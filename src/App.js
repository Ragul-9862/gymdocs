import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React ,{useEffect,useState} from 'react'
import Loader from "./Components/Loader/Loader";
import Tito from "./Components/tito/Tito";
import About from "./Components/About/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Tito />
          <About />
        </div>
      )}
    </div>
  );
}

export default App;
