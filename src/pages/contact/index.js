import Head from 'next/head';
import Layout from '../../components/Layout';
import ContentSection from '../../components/contactPage/contentSection';
import ContactForm from '../../components/contactPage/form';

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Contact Us</title>
      </Head>
      <section className="main-section">
        <div className="container container-contact pt-5 pb-5">
          <ContentSection />
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
