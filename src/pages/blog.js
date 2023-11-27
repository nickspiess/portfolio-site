//import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import Head from 'next/head'
import BlogHeader from './BlogHeader';
import { PostCard, Categories, PostWidget } from '../../components/';
import { getPosts } from '../../services';



const blog = ({ posts }) => {

  return (
    <>

    <BlogHeader />
    <div className={styles.blog}>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Ordo Ab Chao</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className="lg:col-span-8 col-span-1">
            <div className={styles.posts}>
              {posts.map((post) => <PostCard post={post.node} key={post.title} /> )}
              </div>
          </div>
          <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky relative top-8">
                <PostWidget />
                <Categories />
              </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

export default blog;
