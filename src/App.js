import './App.css';
import GoogleLogin from './components/Auth/GoogleLogin';
import TodoUi from './components/TodoUi/TodoUi';
import "react-toastify/dist/ReactToastify.css";
 import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h5>TO Do App</h5>
      <TodoUi />
      <GoogleLogin></GoogleLogin>

      <ToastContainer />
    </div>
  );
}

export default App;
