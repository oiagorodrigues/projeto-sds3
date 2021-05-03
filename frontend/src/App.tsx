import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return <>
    <NavBar />

    <main className="container content">
      <h1 className="text-primary py-3">Dashboard de Vendas</h1>

      <section className="row">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Participação nas vendas</h5>
          <DonutChart />
        </div>
      </section>

      <section className="py-3">
        <h2 className="text-primary mb-3">Todas as vendas</h2>
        <DataTable />
      </section>
    </main>

    <Footer />
  </>;
  
}

export default App;
