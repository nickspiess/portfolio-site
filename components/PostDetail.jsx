import React from 'react';
import styles from './styles/PostDetail.module.css';
import moment from 'moment';

export const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text || ''; 

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index} className={styles.paragraph}>{text}</b>);
      }
      if (obj.italic) {
        modifiedText = (<em key={index} className={styles.paragraph}>{text}</em>);
      }
      if (obj.underline) {
        modifiedText = (<u key={index} className={styles.paragraph}>{text}</u>);
      }
      if (obj.href) {
        modifiedText = (
          <a 
            key={index} 
            href={obj.href} 
            className={styles.underlineLink} 
            target={obj.openInNewTab ? '_blank' : '_self'} 
            rel="noopener noreferrer"
          >
            {obj.children ? obj.children.map((child, childIndex) => 
              getContentFragment(`${index}-${childIndex}`, child.text, child)
            ) : text}
          </a>
        );
      } else if (obj.children) {
        modifiedText = (
          <React.Fragment key={index}>
            {obj.children.map((child, childIndex) => 
              getContentFragment(`${index}-${childIndex}`, child.text, child)
            )}
          </React.Fragment>
        );
      }
    } else {
      modifiedText = <span key={index} className={styles.paragraph}>{text}</span>;
    }

    return modifiedText;
  };

  const renderList = (typeObj, index) => {
    return (
      <ul key={index} className={styles.list}>
        {typeObj.children.map((item, itemIndex) => (
          <li key={`${index}-item-${itemIndex}`} className={styles.listItem}>
            {item.children ? item.children.map((child, childIndex) => 
              getContentFragment(`${index}-${itemIndex}-${childIndex}`, child.text || '', child, child.type)
            ) : ''}
          </li>
        ))}
      </ul>
    );
  };

  const renderContent = (content) => {
    return content.map((typeObj, index) => {
      const children = typeObj.children.map((item, itemIndex) => 
        getContentFragment(`content-${index}-${itemIndex}`, item.text || '', item, item.type)
      );
      
      switch (typeObj.type) {
        case 'heading-three':
          return <h3 key={`h3-${index}`} className={styles.textXl}>{children}</h3>;
        case 'paragraph':
          return <p key={`p-${index}`} className={styles.paragraph}>{children}</p>;
        case 'heading-four':
          return <h4 key={`h4-${index}`} className={styles.textMd}>{children}</h4>;
        case 'bulleted-list':
          return renderList(typeObj, `list-${index}`);
        case 'image':
          return (
            <img
              key={`img-${index}`}
              alt={typeObj.title}
              height={typeObj.height}
              width={typeObj.width}
              src={typeObj.src}
            />
          );
        default:
          return <span key={`span-${index}`} className={styles.paragraph}>{children}</span>;
      }
    });
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

        <div className={styles.author}>
          <img 
            alt={post.author.name}
            height="30px"
            width="30px"
            className={styles.authorPhoto}
            src={post.author.photo.url}
          />
          <p className={styles.authorInfo}>
            {post.author.name}
          </p>
        </div>
        <div className={styles.info}>
          <span className={styles.createdAt}>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
        <div className={styles.contentHolder}>
          {renderContent(post.content.raw.children)}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;