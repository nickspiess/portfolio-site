import React, { useRef, useState, useEffect } from 'react'
import styles from './styles/Comments.module.css'

import { submitComment } from '../services'

export const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false)
  const [localStorage, useLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])
  
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    const commentObj =  { name, email, comment, slug };

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      });
  };

  return (
    <div className={styles.commentsFormContainer}>
        <h1 className={styles.formHeader}>Leave a Reply:</h1>
        <div className={styles.commentArea}>
          <textarea 
            ref={commentEl} 
            className={styles.commentInput} 
            placeholder="Comment"
            name="comment"
          />
        </div>
        <div className={styles.infoArea}>
          <input 
            type="text" 
            ref={nameEl}
            placeholder="Name"
            name="name"
            className={styles.input}
          />
          <input 
            type="text" 
            ref={emailEl}
            placeholder="Email"
            name="email"
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <div>
            <input className={styles.inputButton} ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' />
              <label className={styles.label}>Save my name and e-mail for the next time I comment.</label>
          </div>
        </div>
        {error && <p className={styles.errorField}>All fields are required.</p>}
        <div classname={styles.buttonContainer}>
          <button 
            type="button" 
            onClick={handleCommentSubmission}
            className={styles.button}
            >
            Post Comment
          </button>
          {showSuccessMessage && <span className={styles.successMessage}>Comment submitted for review.</span>}
        </div>
    </div>
  )
}

export default CommentsForm;