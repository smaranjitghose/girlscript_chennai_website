import Head from 'next/head';
import Layout from '../../components/Layout';
import ContentSection from '../../components/contactPage/contentSection';

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Contact Us</title>
      </Head>
      <ContentSection />
    </Layout>
  );
};

export default ContactPage;
