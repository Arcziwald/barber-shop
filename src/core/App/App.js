import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Evas } from "../../features/Evas";
import { Barber } from "../../features/Barber";
import { Shop } from "../../features/Shop";
import { Header } from "../../common/Header";
import { TilesList } from "../../common/TilesList";
import { Box } from "../../common/Box";


export const App = () => {
  
  return (
    <HashRouter>
      <Header />
      <Box />
      <TilesList />
      <Switch>
        <Route path="/evas" component={Evas} />
        <Route path="/barber" component={Barber} />
        <Route path="/shop" component={Shop} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};
