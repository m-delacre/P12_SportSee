import { Link } from "react-router-dom";
import "./app.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header/>
      <div className="App">
        <div className="mockedContainer">
          <p>Mocked data :</p>
          <Link to={`mockUserProfil/12`}>
            <button>Mock Karl Dovineau</button>
          </Link>
          <Link to={`mockUserProfil/18`}>
            <button>Mock Cecilia Ratorez</button>
          </Link>
        </div>
        <div className="apiContainer">
          <p>API data :</p>
          <Link to={`userProfil/12`}>
            <button>API Karl Dovineau</button>
          </Link>
          <Link to={`userProfil/18`}>
            <button>API Cecilia Ratorez</button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default App;
