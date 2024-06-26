import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Slug.module.css'

import Navbar from '../BlogHeader';
import BlogFooter from '../BlogFooter';
import { getCategories, getCategoryPost } from '../../../services';
import { PostCardCategorySlug, CategoriesCat, Loader } from '../../../components';
import Head from 'next/head'


const CategoryPost = ({ posts }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
<>
    <Head>
    <title>Ordo Ab Chao</title>
    <link rel="icon" href="/ordoabchao.ico" />
    </Head>
    <div className={styles.categoryBackground}>
      <Navbar />
      <div className={styles.categoryContainer}>
        <div className={styles.posts}>
          {posts.map((post, index) => (
            <PostCardCategorySlug key={index} post={post.node} />
          ))}
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.categorySubContainer}>
            <CategoriesCat />
          </div>
        </div>
      </div>
      <BlogFooter />
    </div>
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}