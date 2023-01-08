import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>damitzi</title>
                <meta name="description" content="Damian Tziamtzis' website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-3xl">Hello there</h1>
        </Layout>
    );
};

export default Home;
