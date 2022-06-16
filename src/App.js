import './App.css';
import GoogleLogin from './components/Auth/GoogleLogin';
import TodoUi from './components/TodoUi/TodoUi';
import "react-toastify/dist/ReactToastify.css";
 import { ToastContainer, toast } from "react-toastify";
 import { Link, Route, Routes } from "react-router-dom";
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <h5> Welcome To Do App, Please Login to Use</h5>
      

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <TodoUi />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <TodoUi />
            </RequireAuth>
          }
        ></Route>
        <Route path='/login' element={<GoogleLogin></GoogleLogin>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
