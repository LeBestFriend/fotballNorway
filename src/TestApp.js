import "./styling/frontPage.css"
import RenderComponent from "./components/table/RenderComponent";
import Layout from "./components/Layout";
import FrontPageContent from "./FrontPageContent";
import TwitterFeed from "./components/TwitterFeed";
import ScraperComponent from "./components/fetching/ScraperComponent";
function TestApp() {

  return (
    ScraperComponent()
  )
}
export default TestApp;
//TODO:
//Neste steg å få responsen til å vises i en faktisk tabell :), kanskje skjekk etter enkel kok først men kanskje ikke så vanskelig å lage en stygg en sjølv.