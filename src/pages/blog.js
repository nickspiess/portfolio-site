import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import Head from 'next/head';
import BlogHeader from './BlogHeader';
import Footer from './BlogFooter';
import { PostCard, Categories, PostWidget } from '../../components/';
import { PostCardSkeleton, PostWidgetSkeleton, CategoriesSkeleton, FeaturedPostSkeleton } from '../../components/SkeletonLoader';
import { getPosts } from '../../services';
import { FeaturedPosts } from '../../sections';
import { useState, useEffect } from 'react';

const blog = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.blog}>
        <div>
          <BlogHeader />
        </div>
        
        <div className={styles.container}>
          <Head>
            <title>Ordo Ab Chao</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <h1 className={styles.title}>Ordo Ab Chao</h1>
              <p className={styles.subtitle}>Thoughts, insights, and explorations</p>
            </div>
          </header>

          <div className={styles.featured}>
            <div className={styles.featuredContent}>
              <h2 className={styles.featuredTitle}>Featured</h2>
              {isLoading ? (
                <FeaturedPostSkeleton />
              ) : (
                <FeaturedPosts />
              )}
            </div>
          </div>

          <main className={styles.main}>
            <div className={styles.content}>
              <section className={styles.postsSection}>
                <h2 className={styles.postsTitle}>Recent Posts</h2>
                <div className={styles.posts}>
                  {isLoading ? (
                    <>
                      <PostCardSkeleton />
                      <PostCardSkeleton />
                      <PostCardSkeleton />
                    </>
                  ) : (
                    posts.map((post) => (
                      <PostCard post={post.node} key={post.node.id} />
                    ))
                  )}
                </div>
              </section>
              
              <aside className={styles.sidebar}>
                {isLoading ? (
                  <>
                    <PostWidgetSkeleton />
                    <CategoriesSkeleton />
                  </>
                ) : (
                  <>
                    <PostWidget />
                    <Categories />
                  </>
                )}
              </aside>
            </div>
          </main>
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
