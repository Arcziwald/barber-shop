import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../../common/Header";
import { TilesList } from "../../common/TilesList";
import { Contact } from "../../common/Contact";
import { Gallery } from "../../js/Gallery";
import Booking from "../../features/Booking";
import { Shop } from "../../common/Shop";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/callMe" />
      <Route path="/booking" component={Booking} />
        <Route path="/shop" component={Shop} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/evas" component={TilesList} />
        <Redirect to="/evas" />
      </Switch>
    </HashRouter>
  );
};
