import AddingEmployeeModule from "@/components/home/addingEmplyeeModule";
import Head from "@/components/home/head";
import Table from "@/components/home/table";

const Home = () => {
  return (
    <section id="home-page">
      <div className="container mx-auto px-4">
        <div className="in-module hidden">
          <AddingEmployeeModule />
        </div>
        <div className="outof-module">
          <Head />
          <Table />
        </div>
      </div>
    </section>
  );
}

export default Home;
