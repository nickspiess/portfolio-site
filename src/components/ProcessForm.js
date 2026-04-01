import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import styles from '../styles/ProcessForm.module.css';

const STEPS = [
  { num: 1, label: 'Company' },
  { num: 2, label: 'Contact' },
  { num: 3, label: 'Needs' },
  { num: 4, label: 'Design' },
  { num: 5, label: 'Review' },
];

const StepIndicator = ({ current, total }) => (
  <div className={styles.progressContainer}>
    {STEPS.map((s, i) => (
      <React.Fragment key={s.num}>
        <div
          className={`${styles.stepDot} ${
            s.num === current
              ? styles.stepDotActive
              : s.num < current
              ? styles.stepDotComplete
              : styles.stepDotInactive
          }`}
        >
          {s.num < current ? '\u2713' : s.num}
        </div>
        {i < STEPS.length - 1 && (
          <div
            className={`${styles.stepLine} ${
              s.num < current ? styles.stepLineActive : styles.stepLineInactive
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

const cardVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

const ProcessForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const router = useRouter();

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

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
    additionalDetails: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
      if (errors[name]) setErrors({ ...errors, [name]: false });
    }
  };

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex =
    /^(\+\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;

  const validateField = (name, value) => {
    if (name === 'email') return emailRegex.test(value);
    if (name === 'phone') return phoneRegex.test(value);
    if (name === 'name') return nameRegex.test(value) && value.trim().length > 0;
    if (name === 'companyName' || name === 'description') return value.trim().length > 0;
    return true;
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    if (stepNumber === 1) {
      if (!validateField('name', formData.name)) newErrors.name = true;
      if (!validateField('companyName', formData.companyName)) newErrors.companyName = true;
      if (!validateField('description', formData.description)) newErrors.description = true;
    }
    if (stepNumber === 2) {
      if (!validateField('email', formData.email)) newErrors.email = true;
      if (formData.phone && !validateField('phone', formData.phone)) newErrors.phone = true;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(step)) return;
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(2)) return;

    try {
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
        `.trim(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, processFormData, USER_ID);

      Swal.fire({
        icon: 'success',
        title: 'Consultation Request Sent!',
        text: "We'll review your information and get back to you within 24 hours.",
        confirmButtonColor: '#007ed8',
        background: '#0f172a',
        color: '#F5F5F7',
      }).then(() => router.push('/'));
    } catch (error) {
      console.error('Error sending form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops, something went wrong',
        text: 'Please try again or contact us directly.',
        confirmButtonColor: '#007ed8',
        background: '#0f172a',
        color: '#F5F5F7',
      });
    }
  };

  const StepHeader = ({ stepNum, title }) => (
    <>
      <span className={styles.stepLabel}>Step {stepNum} of {totalSteps}</span>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.headerAccent} />
    </>
  );

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <StepIndicator current={step} total={totalSteps} />

        <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                className={styles.formCard}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                <StepHeader stepNum={1} title="Company Information" />
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
                  />
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
                  <div />
                  <button className={styles.nextButton} onClick={nextStep}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                className={styles.formCard}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                <StepHeader stepNum={2} title="Contact Information" />
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
                  <button className={styles.nextButton} onClick={nextStep}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                className={styles.formCard}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                <StepHeader stepNum={3} title="Website Needs" />
                <div className={styles.inputGroup}>
                  <textarea
                    name="businessNeeds"
                    placeholder="Top 5 business needs for your website"
                    value={formData.businessNeeds}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    name="websiteReasons"
                    placeholder="Main reasons for needing a new website"
                    value={formData.websiteReasons}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    name="goals"
                    placeholder="Top 3 Goals"
                    value={formData.goals}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.backButton} onClick={prevStep}>Back</button>
                  <button className={styles.nextButton} onClick={nextStep}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                className={styles.formCard}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                <StepHeader stepNum={4} title="Competitor & Design" />
                <div className={styles.inputGroup}>
                  <textarea
                    name="competitorSites"
                    placeholder="Competitor Websites"
                    value={formData.competitorSites}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    name="likedSites"
                    placeholder="Other sites you like"
                    value={formData.likedSites}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    name="brandFeel"
                    placeholder="How should your brand feel to customers?"
                    value={formData.brandFeel}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.backButton} onClick={prevStep}>Back</button>
                  <button className={styles.nextButton} onClick={nextStep}>Continue</button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                className={styles.formCard}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                <StepHeader stepNum={5} title="Final Details" />
                <div className={styles.inputGroup}>
                  <textarea
                    name="successDefinition"
                    placeholder="What does success look like?"
                    value={formData.successDefinition}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    name="additionalDetails"
                    placeholder="Any other details?"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.backButton} onClick={prevStep}>Back</button>
                  <button className={styles.submitButton} onClick={handleSubmit}>Submit Request</button>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProcessForm;
