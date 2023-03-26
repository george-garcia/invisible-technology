import './App.css'
import Sidebar from "./pages/Sidebar.jsx";
import Nav from "./pages/Nav.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import logo from "./assets/just-logo.svg";

function App() {

  return (
      <div className={"App"} id="outer-container">
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <div id="page-wrap">
          </div>

          <Nav/>
          <HeroPage/>

      </div>
  )
}

export default App
