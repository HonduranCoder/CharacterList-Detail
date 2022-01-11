import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './views/Character/CharacterDetail';
import CharacterList from './views/Character/CharacterList';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route path="/character/:id">
        <CharacterDetail />
      </Route>
      <Route path="/characterlist">
        <CharacterList />
      </Route>
    </Switch>
  );
}
