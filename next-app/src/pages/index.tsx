import Head from "@/components/home/head";
import Table from "@/components/home/table";

function Home() {
  return (
    <section id="home-page">
      <div className="container mx-auto px-4">
        <Head />
        <Table />
      </div>
    </section>
  );
}

export default Home;
