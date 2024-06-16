import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import Head from 'next/head';
import BlogHeader from './BlogHeader';
import Footer from './BlogFooter';
import { PostCard, Categories, PostWidget } from '../../components/';
import { getPosts } from '../../services';
import { FeaturedPosts } from '../../sections';

const blog = ({ posts }) => {
  return (
    <>
      <div className={styles.blog}>
        <div>
          <BlogHeader />
        </div>
        
        <div className={styles.mainContainer}>
          <Head>
            <title>Ordo Ab Chao</title>
            <link rel="icon" href="/favicon.ico" />
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
