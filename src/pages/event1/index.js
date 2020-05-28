import Head from 'next/head';
import Layout from '../../components/Layout';
import EventHeader from '../../components/event1/header';
import EventAboutSection from '../../components/event1/AboutSection';

const eventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Events</title>
      </Head>
      <EventHeader />
      <EventAboutSection />
    </Layout>
  );
};

export default eventsPage;
