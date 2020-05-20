import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/IndexPage/HeroSection';
import AboutSection from '../components/IndexPage/AboutSection';
import ParallaxSeperator from '../components/IndexPage/ParallaxSeperator';
import InitiativesSection from '../components/IndexPage/InitiativesSection';
import AchievementsSection from '../components/IndexPage/AchievementsSection';
import TrendsSection from '../components/IndexPage/TrendsSection';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate</title>
      </Head>
      <HeroSection />
      <AboutSection />
      <ParallaxSeperator />
      <InitiativesSection />
      <ParallaxSeperator />
      <AchievementsSection />
      <ParallaxSeperator />
      <TrendsSection />
    </Layout>
  );
}
