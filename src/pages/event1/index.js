import Head from 'next/head';
import Layout from '../../components/Layout';
import EventHeader from '../../components/event1/header';

const eventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Events</title>
      </Head>
      <EventHeader />
    </Layout>
  );
};

export default eventsPage;
