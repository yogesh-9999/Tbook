import Footer from "./Components/footer1/Footer";
import Nav2 from "./Components/Nav/Nav2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage/SearchPage";
import Card1 from "./Components/HotelCard/Card1";
import Services from "./Components/Services/Services";
import { Crausal } from "./Components/Crausal/Crausal";
import { Igrid } from "./Components/ImageGrid/Igrid";

function App() {
  return (
    <div className="App">
      <Router>
       
        <Switch>
          <Route exact path="/">
          <Nav2 />
            <Card1 />
            <Services />
            <Crausal/>
            <Igrid/>
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
