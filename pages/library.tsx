import Head from "next/head";
import Layout from "../component/Layout";

const Library = () => {
    return (
        <Layout>
            <Head>
                <title>damitzi</title>
                <meta name="description" content="Damian Tziamtzis' website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Library</h1>
        </Layout>
    );
};

export default Library;
