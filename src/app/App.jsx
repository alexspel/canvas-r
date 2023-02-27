import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/AppRouter";
import './styles/index.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  )
};

export default App;