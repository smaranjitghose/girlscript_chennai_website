import Head from 'next/head';
import Layout from '../../components/Layout';
import TimelineCardSection from '../../components/AnnouncementPage/timeline';
import AnnouncementCardSection from '../../components/AnnouncementPage/AnnouncementsCards';

const AnnouncementsPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Announcements</title>
      </Head>
      <TimelineCardSection />
      <AnnouncementCardSection />
    </Layout>
  );
};

export default AnnouncementsPage;
