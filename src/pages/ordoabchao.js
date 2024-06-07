import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import Head from 'next/head';
import BlogHeader from './BlogHeader';
import Footer from './BlogFooter';
import { PostCard, Categories, PostWidget } from '../../components';
import { getPosts } from '../../services';
import { FeaturedPosts } from '../../sections';
import StructuredData from 'src/pages/StructuredData';



const blog = ({ posts }) => {
      const structuredData =  {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Ordo Ab Chao",
        "url": "https://spiess.tech/orderabchao",
        "description": "Creating order from chaos.",
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
      <div className={styles.blog}>
        <div>
          <BlogHeader />
        </div>
        
        <div className={styles.mainContainer}>
          <Head>
            <title>Ordo Ab Chao</title>
            <link rel="icon" href="/ordoabchao.ico" />
          </Head>
          <h1 className={styles.featuredPostHeader}>
            Featured Posts
          </h1>
          <FeaturedPosts />
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className="lg:col-span-8 col-span-1">
              <div className={styles.posts}>
                {posts.map((post) => (
                  <PostCard post={post.node} key={post.node.id} /> // Ensure each post has a unique key
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 col-span-1">
              <div className={styles.sideContainer}>
                <PostWidget />
                <Categories />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  };
}

export default blog;
