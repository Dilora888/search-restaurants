import Footer from "./components/Footer";
import Header from "./components/Header";

import RestaurantsPage from "./pages/RestaurantsPage";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col w-10/12 m-auto">
        <RestaurantsPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
