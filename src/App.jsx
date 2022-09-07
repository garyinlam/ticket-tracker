import './App.scss';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';

import team from './data/team';

function App() {
  return (
    <div className="app">
      <Header />
      <CardContainer teamArr={team} />
    </div>
  );
}

export default App;
