import { Link } from 'react-router-dom';
import './ErrorPage.css'

function ErrorPage() {
    return (
      <div className="errorpage">
        <p>404 not found</p>
        <Link to={`/`}>
            <button>retourner à l'accueil</button>
        </Link>
      </div>
    );
  }
  
  export default ErrorPage;
  