import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import styles from './styles/Comments.module.css'
import { getComments } from '../services';

export const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((result) => setComments(result))
    }, [slug])

    return (
        <>
            {comments.length > 0 && (
                <div className={styles.container}>
                    <h3 className={styles.title}>
                        {comments.length} Comment{comments.length !== 1 ? 's' : ''}
                    </h3>
                    <div className={styles.commentsList}>
                        {comments.map((comment) => (
                            <article key={comment.createdAt} className={styles.comment}>
                                <header className={styles.commentHeader}>
                                    <span className={styles.commentAuthor}>{comment.name}</span>
                                    <time className={styles.commentDate} dateTime={comment.createdAt}>
                                        {moment(comment.createdAt).format('MMMM DD, YYYY [at] h:mm A')}
                                    </time>
                                </header>
                                <div className={styles.commentContent}>
                                    {parse(comment.comment)}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Comments;