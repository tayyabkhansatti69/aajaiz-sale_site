import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
// import News from "../src/components/News";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Layout from "../src/layout/Layout";



const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Aajiz</title>
      </Head>
      <Home />

      <Process />

      <About />

      <Skills />

      <Service />

      {/* <News /> */}
      <Contact />
    </Layout>
  );
};
export default Index;
