import './App.css';
import AppRouting from './Routes/AppRouting';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
      />
      <AppRouting />
    </>
  );
}

export default App;
