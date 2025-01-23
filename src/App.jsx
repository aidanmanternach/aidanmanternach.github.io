import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Experience, Works, Tech } from "./components/";
import { styles } from "./styles";
import { useTheme } from "./components/ThemeContext";

const App = () => {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <div className={`relative z-0 ${theme == 'light' ? styles.offWhiteBackground : 'bg-black'}`}>
        <div className={`bg-cover bg-no-repeat bg-center ${theme == 'light' ? styles.offWhiteBackground : 'bg-black'}`}>
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

