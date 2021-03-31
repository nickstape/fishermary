import logo from './fishermary-.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <a className="navbar-brand logo" href="https://www.fishermary.co" title="Fisher Mary Anike">Fisher Mary</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                   </button>
                 <div className="collapse navbar-collapse standard navbar-right" id="navbarNav">
                    <ul className="navbar-nav menu">
                         <li className="nav-item">
                           <a className="nav-link" href="https://www.fishermary.co/about">About</a>
                         </li>
                          <li className="nav-item">
                           <a className="nav-link" href="mailto:fishermary@gmail.com">Contact</a>
                         </li>
                     </ul>
                  </div>
             </div>
         </nav>
    </div>
  );
}

export default App;
