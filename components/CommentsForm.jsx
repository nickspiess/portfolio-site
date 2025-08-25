import React, { useRef, useState, useEffect } from 'react'
import styles from './styles/Comments.module.css'
import { submitComment } from '../services'

export const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            nameEl.current.value = window.localStorage.getItem('name') || '';
            emailEl.current.value = window.localStorage.getItem('email') || '';
        }
    }, [])

    const handleCommentSubmission = async () => {
        setError(false);
        setIsSubmitting(true);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!comment || !name || !email) {
            setError(true);
            setIsSubmitting(false);
            return;
        }

        if (storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name')
            window.localStorage.removeItem('email')
        }

        const commentObj = { name, email, comment, slug };

        try {
            await submitComment(commentObj);
            setShowSuccessMessage(true);
            commentEl.current.value = '';
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
        } catch (err) {
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Leave a Comment</h3>
            
            <div className={styles.form}>
                <div className={styles.commentGroup}>
                    <label htmlFor="comment" className={styles.label}>Comment *</label>
                    <textarea 
                        id="comment"
                        ref={commentEl} 
                        className={styles.textarea} 
                        placeholder="Share your thoughts..."
                        rows={6}
                        required
                    />
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Name *</label>
                        <input 
                            id="name"
                            type="text" 
                            ref={nameEl}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email *</label>
                        <input 
                            id="email"
                            type="email" 
                            ref={emailEl}
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.checkboxGroup}>
                    <input 
                        className={styles.checkbox} 
                        ref={storeDataEl} 
                        type="checkbox" 
                        id="storeData" 
                        name="storeData" 
                    />
                    <label htmlFor="storeData" className={styles.checkboxLabel}>
                        Save my name and email for next time
                    </label>
                </div>

                {error && (
                    <p className={styles.error}>
                        All fields are required. Please fill them out.
                    </p>
                )}

                {showSuccessMessage && (
                    <p className={styles.success}>
                        Thank you! Your comment has been submitted for review.
                    </p>
                )}

                <button 
                    type="button" 
                    onClick={handleCommentSubmission}
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Post Comment'}
                </button>
            </div>
        </div>
    )
}

export default CommentsForm;