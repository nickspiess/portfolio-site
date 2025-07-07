import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from './ProgressBar';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import styles from '../styles/ProcessForm.module.css';

const ProcessForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const router = useRouter();

  // EmailJS configuration
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    decisionMaker: '',
    companyName: '',
    description: '',
    currentSite: '',
    email: '',
    phone: '',
    businessNeeds: '',
    websiteReasons: '',
    goals: '',
    idealCustomer: '',
    customerReasons: '',
    brandFeel: '',
    competitorSites: '',
    likedSites: '',
    siteManagement: [],
    staffSkillLevel: '',
    successDefinition: '',
    additionalDetails: ''
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    companyName: false,
    description: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((v) => v !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
      
      // Clear validation errors when user types
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: false
        });
      }
    }
  };

  // Improved validation rules
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^(\+\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;

  const validateField = (name, value) => {
    if (name === 'email') {
      return emailRegex.test(value);
    }
    if (name === 'phone') {
      return phoneRegex.test(value);
    }
    if (name === 'name') {
      return nameRegex.test(value) && value.trim().length > 0;
    }
    if (name === 'companyName' || name === 'description') {
      return value.trim().length > 0;
    }
    return true;
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 1) {
      if (!validateField('name', formData.name)) {
        newErrors.name = true;
      }
      if (!validateField('companyName', formData.companyName)) {
        newErrors.companyName = true;
      }
      if (!validateField('description', formData.description)) {
        newErrors.description = true;
      }
    }
    
    if (stepNumber === 2) {
      if (!validateField('email', formData.email)) {
        newErrors.email = true;
      }
      if (formData.phone && !validateField('phone', formData.phone)) {
        newErrors.phone = true;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(step)) {
      return;
    }
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };
  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(2)) { // Final validation
      return;
    }

    try {
      // Create a comprehensive message for the email
      const processFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company_name: formData.companyName,
        decision_maker: formData.decisionMaker,
        company_description: formData.description,
        current_site: formData.currentSite,
        business_needs: formData.businessNeeds,
        website_reasons: formData.websiteReasons,
        goals: formData.goals,
        ideal_customer: formData.idealCustomer,
        customer_reasons: formData.customerReasons,
        brand_feel: formData.brandFeel,
        competitor_sites: formData.competitorSites,
        liked_sites: formData.likedSites,
        site_management: formData.siteManagement.join(', '),
        staff_skill_level: formData.staffSkillLevel,
        success_definition: formData.successDefinition,
        additional_details: formData.additionalDetails,
        // Create a formatted message
        message: `
NEW CONSULTATION REQUEST

Company Information:
- Name: ${formData.name}
- Company: ${formData.companyName}
- Decision Maker: ${formData.decisionMaker}
- Description: ${formData.description}
- Current Site: ${formData.currentSite}

Contact Information:
- Email: ${formData.email}
- Phone: ${formData.phone}

Website Needs:
- Business Needs: ${formData.businessNeeds}
- Website Reasons: ${formData.websiteReasons}
- Goals: ${formData.goals}

Customer & Design:
- Ideal Customer: ${formData.idealCustomer}
- Customer Reasons: ${formData.customerReasons}
- Brand Feel: ${formData.brandFeel}
- Competitor Sites: ${formData.competitorSites}
- Liked Sites: ${formData.likedSites}

Management & Success:
- Site Management: ${formData.siteManagement.join(', ')}
- Staff Skill Level: ${formData.staffSkillLevel}
- Success Definition: ${formData.successDefinition}
- Additional Details: ${formData.additionalDetails}
        `.trim()
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, processFormData, USER_ID);
      
      Swal.fire({
        icon: 'success',
        title: 'Consultation Request Sent Successfully!',
        text: 'We\'ll review your information and get back to you within 24 hours.',
        confirmButtonColor: '#3B82F6'
      }).then(() => {
        router.push('/');
      });

    } catch (error) {
      console.error('Error sending form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops, something went wrong',
        text: 'Please try again or contact us directly.',
        confirmButtonColor: '#3B82F6'
      });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <ProgressBar step={step} totalSteps={totalSteps} />
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" className={styles.formCard} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
              <h2 className={styles.header}>Step 1: Company Information</h2>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name *" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className={errors.name ? styles.inputError : ''}
                />
                {errors.name && <span className={styles.errorMessage}>Please enter a valid name</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="decisionMaker" 
                  placeholder="Decision Maker (if different)" 
                  value={formData.decisionMaker} 
                  onChange={handleChange} 
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="companyName" 
                  placeholder="Company Name *" 
                  value={formData.companyName} 
                  onChange={handleChange} 
                  className={errors.companyName ? styles.inputError : ''}
                />
                {errors.companyName && <span className={styles.errorMessage}>Company name is required</span>}
              </div>
              <div className={styles.inputGroup}>
                <textarea 
                  name="description" 
                  placeholder="What does your company do? *" 
                  value={formData.description} 
                  onChange={handleChange}
                  className={errors.description ? styles.inputError : ''}
                ></textarea>
                {errors.description && <span className={styles.errorMessage}>Please describe your company</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="url" 
                  name="currentSite" 
                  placeholder="Current Website (if any)" 
                  value={formData.currentSite} 
                  onChange={handleChange} 
                />
              </div>
              <div className={styles.buttonGroup}>
                <div></div>
                <button className={styles.nextButton} onClick={nextStep}>Next</button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" className={styles.formCard} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
              <h2 className={styles.header}>Step 2: Contact Information</h2>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Best Email *" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className={errors.email ? styles.inputError : ''}
                />
                {errors.email && <span className={styles.errorMessage}>Please enter a valid email address</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number (optional)" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <span className={styles.errorMessage}>Please enter a valid phone number</span>}
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.backButton} onClick={prevStep}>Back</button>
                <button className={styles.nextButton} onClick={nextStep}>Next</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" className={styles.formCard} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
              <h2 className={styles.header}>Step 3: Website Needs</h2>
              <div className={styles.inputGroup}>
                <textarea name="businessNeeds" placeholder="Top 5 business needs for your website" value={formData.businessNeeds} onChange={handleChange}></textarea>
              </div>
              <div className={styles.inputGroup}>
                <textarea name="websiteReasons" placeholder="Main reasons for needing a new website" value={formData.websiteReasons} onChange={handleChange}></textarea>
              </div>
              <div className={styles.inputGroup}>
                <textarea name="goals" placeholder="Top 3 Goals" value={formData.goals} onChange={handleChange}></textarea>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.backButton} onClick={prevStep}>Back</button>
                <button className={styles.nextButton} onClick={nextStep}>Next</button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" className={styles.formCard} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
              <h2 className={styles.header}>Step 4: Competitor & Design Preferences</h2>
              <div className={styles.inputGroup}>
                <textarea name="competitorSites" placeholder="Competitor Websites" value={formData.competitorSites} onChange={handleChange}></textarea>
              </div>
              <div className={styles.inputGroup}>
                <textarea name="likedSites" placeholder="Other sites you like" value={formData.likedSites} onChange={handleChange}></textarea>
              </div>
              <div className={styles.inputGroup}>
                <textarea name="brandFeel" placeholder="How should your brand feel to customers?" value={formData.brandFeel} onChange={handleChange}></textarea>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.backButton} onClick={prevStep}>Back</button>
                <button className={styles.nextButton} onClick={nextStep}>Next</button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" className={styles.formCard} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
              <h2 className={styles.header}>Step 5: Final Review & Submission</h2>
              <div className={styles.inputGroup}>
                <textarea name="successDefinition" placeholder="What does success look like?" value={formData.successDefinition} onChange={handleChange}></textarea>
              </div>
              <div className={styles.inputGroup}>
                <textarea name="additionalDetails" placeholder="Any other details?" value={formData.additionalDetails} onChange={handleChange}></textarea>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.backButton} onClick={prevStep}>Back</button>
                <button className={styles.submitButton} onClick={handleSubmit}>Submit Consultation Request</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProcessForm;