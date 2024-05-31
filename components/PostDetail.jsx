import React from 'react'
import styles from './styles/PostDetail.module.css'
import cardStyles from './styles/PostCard.module.css'
import moment from 'moment';

export const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }
      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }
      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className={styles.paragraph}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
        default:
          return modifiedText;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
      <h1 className={styles.h1}>{post.title}</h1>

        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className={styles.detailImage}
        />

        <div className={`${styles.author}`}>
          <img 
            alt={post.author.name}
            height="30px"
            width="30px"
            className={`${styles.authorPhoto}`}
            src={post.author.photo.url}
          />
          <p className={`${styles.authorInfo}`}>
            {post.author.name}
          </p>
        </div>
        <div className={`${styles.info}`}>
          <span className={`${styles.createdAt}`}>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
          
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}

      </div>
    </div>
  )
}

export default PostDetail;
