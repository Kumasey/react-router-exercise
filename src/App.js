import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import ColorAdd from "./colorAdd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Colors} />
          <Route exact path={"/colors/new"} component={ColorAdd} />
          <Route exact path={"/colors"} component={Colors} />
          <Route exact path={"/colors/:color"} component={Color} />
          <Route component={Colors} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
