import { useState } from 'react';
import './App.css';
import AddButton from './UI/AddButton/AddButton';
import AppHeader from './UI/AppHeader/AppHeader';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <div className="appArea">
        <div className="appCard">
          <div className="topSection">
            <AppHeader>TO-DO App</AppHeader>
            <AddButton
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            ></AddButton>
          </div>
          <TodoForm isFormOpen={isFormOpen} />
          {/* <div className=''></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
