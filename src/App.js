import "./styling/frontPage.css"
import RenderComponent from "./components/table/RenderComponent";
import Layout from "./components/Layout";
function App() {

  return (
    <div id="mainDiv">
      {/*fetch leagues
       <FetcherComponent myUrl = https://api-football-v1.p.rapidapi.com/v3/leagues/>
      */}
      <Layout content = {<RenderComponent myUrl = "https://api-football-v1.p.rapidapi.com/v3/standings?league=103&season=2024"/>}/>
    </div>
  )
}
export default App;
//TODO:
//Neste steg å få responsen til å vises i en faktisk tabell :), kanskje skjekk etter enkel kok først men kanskje ikke så vanskelig å lage en stygg en sjølv.