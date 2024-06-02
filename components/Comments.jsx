import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import styles from './styles/Comments.module.css'

import { getComments } from '../services';
import { comment } from 'postcss';

export const Comments = ({ slug }) => {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [])

  return (
    <>
      {comment.length > 0 && (
        <div className={styles.comments}>
          <h3 className={styles.commentLength}>
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment) => (
              <div key={comment.createdAt} className={styles.comment}>
                <p className={styles.commentP}>
                  <span className={styles.commentName}>{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className={styles.commentText}>
                  {parse(comment.comment)}
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export default Comments;