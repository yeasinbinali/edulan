import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './routes/RouterProvider/RouterProvider';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
