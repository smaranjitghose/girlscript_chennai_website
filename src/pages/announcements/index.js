import Head from 'next/head';
import Layout from '../../components/Layout';
import TimelineCardSection from '../../components/AnnouncementPage/timeline';

const AnnouncementsPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Announcements</title>
      </Head>
      <TimelineCardSection />
    </Layout>
  );
};

export default AnnouncementsPage;
