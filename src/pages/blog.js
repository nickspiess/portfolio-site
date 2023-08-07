//import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../../components/';

const posts = [
  { title: "GPT's Impact on Society", excerpt: "We taught sand how to think, what's to come next?"},
  { title: "Masculinity in 2023", excerpt: "Andrew Tate, Femboys, and E-Girls. What happened to men?"},
]

const blog = () => {

  return (
    <div className={styles.blog}>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Ordo Ab Chao</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className="lg:col-span-8 col-span-1">
            <div className={styles.posts}>
              {posts.map((post) => <PostCard post={post} key={post.title} /> )}
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
  );
};

export default blog;
