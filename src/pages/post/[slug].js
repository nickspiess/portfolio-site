import React from 'react'

//import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../../components';

import BlogHeaderPost from '../BlogHeaderPost';

import styles from '../../styles/Slug.module.css'
import { getPostDetails, getPosts } from '../../../services';

export const PostDetails = ({ post }) => {

  return (
    <div className={styles.postPage}>
      <div>
      <BlogHeaderPost />
      </div>
      <div className={styles.mainContainer}>
    <div className={styles.postDetailContainer}>
      <div className={styles.detailContainer}>
      <div className={styles.postDetail}>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
      </div>
      </div>
      </div>
      <div className={styles.side}>
          <div className={styles.sideContainer}>
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
            <Categories />
          </div>
      </div>
      </div>
    </div>
  )
}


export default PostDetails;

export async function getStaticProps({ params }) {

  const data = await getPostDetails(params.slug);

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug }}) => ({params:  { slug }})),
    fallback: false,
  }
}
