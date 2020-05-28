import Head from 'next/head';
import Layout from '../../components/Layout';
import EventHeader from '../../components/event1/header';
import EventScheduleSection from '../../components/event1/ScheduleSection';
import EventAboutSection from '../../components/event1/AboutSection';

const eventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Events</title>
      </Head>
      <EventHeader />
      <EventAboutSection />
      <EventScheduleSection />
    </Layout>
  );
};

export default eventsPage;
