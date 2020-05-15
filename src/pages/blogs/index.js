import Head from 'next/head';
import Layout from '../../components/Layout';

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Blogs</title>
      </Head>
      <h2 className="center temp">This is Blog Page</h2>
    </Layout>
  );
};

export default BlogPage;
