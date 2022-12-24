import Head from "next/head";
import Header from "../components/home/header/Header";
import DefaultLayout from "../components/layouts/DefaultLayout";
import WhyChoose from "../components/home/why-choose/WhyChoose";
import NowCloud from "../components/home/now-cloud/NowCloud";
import PriceCards from "../components/home/price-cards/PriceCards";
// import MapSection from "../components/home/map-section/MapSection";
export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Cloudzy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />
        <PriceCards />
        {/* <MapSection /> */}
      </div>
      <WhyChoose />
      <div className="container">
        <NowCloud />
      </div>
    </DefaultLayout>
  );
}
