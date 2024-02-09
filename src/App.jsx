import Header from "./components/Header/Header";
import WatherBoard from "./components/Wather/WatherBoard";

export default function App() {
  return (
    <div className="grid place-items-center h-screen ">
      <Header />
      <main>
        <section>
          <WatherBoard />
        </section>
      </main>
    </div>
  )
}