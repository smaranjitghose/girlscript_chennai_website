import Head from 'next/head';
import Layout from '../../components/Layout';
import TeamPageText from '../../components/TeamPageText';
import TeamPageDisplay from '../../components/TeamPageDisplay';
import styled from 'styled-components';

const CustomContainer = styled.div`
  width: 100%;
  padding: 0 150px;
  margin-top: 20vh;
`;

const TeamContainer = styled.div`
  width: 100%;
`;

const TeamPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Team </title>
      </Head>
      <CustomContainer>
        <TeamPageText />
      </CustomContainer>
      <TeamContainer>
        <TeamPageDisplay />
      </TeamContainer>
    </Layout>
  );
};

export default TeamPage;
