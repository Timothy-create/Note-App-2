import React from 'react';
import { Router, Route } from 'react-router-dom'
import history from './history'
import FrontPage from './components/FrontPage';
import Homepage from './components/HomePage/HomePage';
import SecondPage from './components/SecondPage/SecondPage';
import CreateNoteModal from './components/SecondPage/SecondPageModal/CreateNoteModal';
import DeleteModal from './components/SecondPage/SecondPageModal/DeleteModal';
import EditModal from './components/SecondPage/SecondPageModal/EditModal';
import TodoList from './components/NavPages/TodosFolder/TodoList';
import MyEvents from './components/NavPages/Events/MyEvents';
import Archive from './components/NavPages/Archive/Archive';
import Settings from './components/NavPages/Setting/Settings';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Route path="/homepage" exact component={FrontPage} />
          <Route path="/aboutpage" component={Homepage} />
          <Route path="/dash/note" component={SecondPage} />
          <Route path="/create/note" component={CreateNoteModal} />
          <Route path="/delete/note" component={DeleteModal} />
          <Route path="/edit/note" component={EditModal} />
          <Route path="/note/todos" component={TodoList} />
          <Route path="/note/events" component={MyEvents} />
          <Route path="/note/archive" component={Archive} />
          <Route path="/note/setting" component={Settings} />
        </div>
      </Router>
    </div>
  );
}

export default App;
