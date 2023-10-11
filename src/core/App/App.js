import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../../common/Header";
import { TilesList } from "../../common/TilesList";
import { Box } from "../../common/Box";
import { Contact } from "../../common/TilesList/Contact";



export const App = () => {
  return (
    <HashRouter>
      <Header />
      <Box />
      <TilesList />
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};
