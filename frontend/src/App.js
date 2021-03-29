
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FooterPage from './pages/footerPage/FooterPage';

function App() {

  return (
    <Router> 
    <div className="App">
      <div className="footer-container">
      <Route path="/footer">
      <FooterPage />
      </Route>
      </div>
     
      
      
    </div>
    </Router>
  );
}

export default App;
