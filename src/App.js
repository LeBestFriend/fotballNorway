import "./styling/frontPage.css"
import RenderComponent from "./components/table/RenderComponent";
import Layout from "./components/Layout";
import FrontPageContent from "./FrontPageContent";
function App() {

  return (
    <div id="mainDiv">
      {/*fetch leagues
       <FetcherComponent myUrl = https://api-football-v1.p.rapidapi.com/v3/leagues/>
      */}
      <Layout content = {<FrontPageContent/>}/>
    </div>
  )
}
export default App;
//TODO:
//Neste steg å få responsen til å vises i en faktisk tabell :), kanskje skjekk etter enkel kok først men kanskje ikke så vanskelig å lage en stygg en sjølv.