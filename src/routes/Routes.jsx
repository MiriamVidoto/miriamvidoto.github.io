import { Route, Switch } from 'react-router-dom';
import Carreira from '../pages/Carreira';
import Home from '../pages/Home';
import Projetos from '../pages/Projetos';
import Skills from '../pages/Skills';
import Sobre from "../pages/Sobre";
import Header from "../components/Header";
import Footer from '../components/Footer';

export default function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sobre" component={Sobre} />
        <Route path="/skills" component={Skills} />
        <Route path="/carreira" component={Carreira} />
        <Route path="/projetos" component={Projetos} />
      </Switch>
      <Footer />
    </>
  );
}