import Head from 'next/head';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import UpToCard from '../../components/UpToCard';

const Heading = styled.h2`
  font-size: 38px;
  letter-spacing: 3px;
  text-align: center;
  font-weight: bold;
  padding-bottom: 3rem;
  font-family: 'Baloo Bhaina 2', sans-serif;
  > span {
    color: #f47621;
  }
`;

const AchievementsPage = () => {
  const [uptoDetails, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch('/membersUptoCards.json');
      const data = await res.json();
      setDetails(data);
    };

    getDetails();
  }, []);

  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Achievements</title>
      </Head>

      <div className="container space-out">
        <Heading>
          See What Our Other <span>Members Are Upto</span>
        </Heading>
        <div className="container row m-auto">
          {uptoDetails.map((detail, index) => (
            <UpToCard key={index} detail={detail} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AchievementsPage;
