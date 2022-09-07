import { Route, Switch } from 'react-router-dom';
import Carreira from './pages/Carreira';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Skills from './pages/Skills';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/skills" component={Skills} />
      <Route path="/carreira" component={Carreira} />
      <Route path="/projetos" component={Projetos} />
      <Route path="/contato" component={Contato} />
    </Switch>
  );
}

export default App;
