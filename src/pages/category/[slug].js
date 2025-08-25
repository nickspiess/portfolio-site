import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/CategoryPage.module.css'
import BlogHeader from '../BlogHeader';
import BlogFooter from '../BlogFooter';
import { getCategories, getCategoryPost } from '../../../services';
import { PostCard, Categories, Loader } from '../../../components';
import Head from 'next/head'

const CategoryPost = ({ posts, categoryName }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <>
            <Head>
                <title>{categoryName ? `${categoryName} - Ordo Ab Chao` : 'Category - Ordo Ab Chao'}</title>
                <link rel="icon" href="/ordoabchao.ico" />
                <meta name="description" content={`Posts in ${categoryName || 'this category'}`} />
            </Head>
            
            <div className={styles.page}>
                <BlogHeader />
                
                <main className={styles.main}>
                    <div className={styles.container}>
                        <header className={styles.header}>
                            <h1 className={styles.title}>
                                {categoryName || 'Category'}
                            </h1>
                            <p className={styles.subtitle}>
                                {posts.length} post{posts.length !== 1 ? 's' : ''} in this category
                            </p>
                        </header>

                        <div className={styles.content}>
                            <section className={styles.postsSection}>
                                <div className={styles.posts}>
                                    {posts.map((post) => (
                                        <PostCard key={post.node.id} post={post.node} />
                                    ))}
                                </div>
                                
                                {posts.length === 0 && (
                                    <div className={styles.emptyState}>
                                        <h3>No posts found</h3>
                                        <p>There are no posts in this category yet.</p>
                                    </div>
                                )}
                            </section>
                            
                            <aside className={styles.sidebar}>
                                <Categories />
                            </aside>
                        </div>
                    </div>
                </main>
                
                <BlogFooter />
            </div>
        </>
    );
};

export default CategoryPost;

export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);
    const categories = await getCategories();
    
    // Find the category name
    const category = categories.find(cat => cat.slug === params.slug);
    const categoryName = category ? category.name : null;

    return {
        props: { 
            posts: posts || [],
            categoryName 
        },
    };
}

export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}