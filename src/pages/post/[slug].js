import React from 'react'
import { useRouter } from 'next/router';

//import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../../components';

import BlogHeader from '../BlogHeader';
import BlogFooter from '../BlogFooter';

import styles from '../../styles/Slug.module.css'
import { getPostDetails, getPosts } from '../../../services';

import Head from 'next/head'
import StructuredData from '../StructuredData';



export const PostDetails = ({ post }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

      const structuredData =  {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": `${post.title}`,
        "url": `https://spiess.tech/orderabchao/${post}`,
        "description": `${post.excerpt}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "995 Cobblestone Drive",
            "addressLocality": "Highlands Ranch",
            "addressRegion": "CO",
            "postalCode": "80126",
            "addressCountry": "US",
        },
    };

  return (
    <>
    <StructuredData data={structuredData} />
    <Head>
    <title>Ordo Ab Chao - {post.title}</title>
    <link rel="icon" href="/ordoabchao.ico" />
    <meta name="description" content={post.excerpt} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.excerpt} />
    <meta property="og:image" content={post.featuredImage.url} />
    <meta property="og:url" content={`https://spiess.tech/ordoabchao/post/${post.title}`} />
    <meta property="og:type" content="article" />
    <meta name="robots" content="index,follow" />
    <meta property="og:image" content={'/images/OrdoAbChao.png'}  />
    <meta property="og:url" content={`https://spiess.tech/ordoabchao/post/${post.title}`} />
    <meta name="robots" content="index,follow" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={post.title} />
    <meta name="twitter:description" content={post.excerpt} />
    <meta name="twitter:image" content={post.featuredImage.url} />
    <link rel="canonical" href={`https://spiess.tech/ordoabchao/post/${post.title}`} />
  </Head>
    <div className={styles.categoryBackground}>
      <div className={styles.navContainer}>
        <BlogHeader />
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
          </div>
      </div>
      </div>
      <BlogFooter />
    </div>
    </>
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
