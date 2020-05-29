import Head from 'next/head';
import Layout from '../../components/Layout';
import EventHeader from '../../components/event1/header';
import EventScheduleSection from '../../components/event1/ScheduleSection';
import EventAboutSection from '../../components/event1/AboutSection';
import FAQCardSection from '../../components/event1/FaqSection';
import EventRegisterSection from '../../components/event1/RegisterSection';

const eventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Events</title>
      </Head>
      <EventHeader />
      <EventAboutSection />
      <EventScheduleSection />
      <EventRegisterSection />
      <FAQCardSection />
    </Layout>
  );
};

export default eventsPage;
