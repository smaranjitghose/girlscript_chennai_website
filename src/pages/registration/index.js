import Head from 'next/head';
import Layout from '../../components/Layout';

const RegistrationPage = () => {
  return (
    <Layout>
      <Head>
        <title>GirlScript Website Boilerplate | Registration </title>
        <script src="/JS/registrations.js"></script>
      </Head>
      <div id="progress"></div>
      <canvas id="success-screen" className="hide"></canvas>
      <div className="center">
        <div id="register">
          <i id="progressButton" className="ion-android-arrow-forward next"></i>

          <div id="inputContainer">
            <input id="inputField" required autoFocus />
            <label id="inputLabel"></label>
            <div id="inputProgress"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationPage;
