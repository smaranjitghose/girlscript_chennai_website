import Head from 'next/head';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const BlogSection = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 15vh;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;

  > h3 {
    font-family: 'Baloo Bhaina 2', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    padding: 3rem;
    > span {
      color: #f47621;
    }
  }

  @media only screena and(max-width:700px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Blogs</title>
      </Head>
      <BlogSection>
        <Container>
          <h3>
            Recent <span> Blogs </span>
          </h3>

          <div id="medium-widget"></div>
        </Container>
      </BlogSection>
    </Layout>
  );
};

export default BlogPage;
