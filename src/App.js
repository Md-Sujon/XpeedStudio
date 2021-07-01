import './App.css';
import {Switch, Route} from 'react-router-dom';
import Component from './component'
import Update from './component/Update';


function App() {
  return (
    <div className="App">
      <h2>CRUD Operation</h2>
      <Switch>
        <Route exact path="/" component={Component}/>
        <Route exact path="/update/:id" component={Update} />
      </Switch>
    </div>
  );
}

export default App;
