import Head from 'next/head';
import Layout from '../../components/Layout';
import TeamPageText from '../../components/TeamPageText';

const TeamPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Team </title>
      </Head>
      <TeamPageText />
    </Layout>
  );
};

export default TeamPage;
