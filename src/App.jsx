import { useState } from 'react';
import './App.css';
import AddButton from './UI/AddButton/AddButton';
import AppHeader from './UI/AppHeader/AppHeader';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTodo, setNewTodo] = useState(null);

  return (
    <>
      <div className="appArea">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
        {/* Same as */}
        <div className="appCard">
          <div className="topSection">
            <AppHeader>TO-DO App</AppHeader>
            <AddButton
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            ></AddButton>
          </div>
          <TodoForm
            setNewTodo={setNewTodo}
            isFormOpen={isFormOpen}
            setIsFormOpen={setIsFormOpen}
          />
          <TodoList newTodo={newTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
