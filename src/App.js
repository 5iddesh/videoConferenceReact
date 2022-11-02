import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./styles.css";
import Purchase from "./components/main/purchase/Purchase";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
