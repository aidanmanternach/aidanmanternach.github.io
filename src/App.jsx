import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Experience, Works, Tech } from "./components/";
import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className={`bg-cover bg-no-repeat bg-center ${styles.offWhiteBackground}`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
    </BrowserRouter>
  )
}

export default App

