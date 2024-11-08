import ManageAcc from './account'
import HomePage from './home';
import Login from './login'
import Registration from './registration'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  // {
  //   path: '/',
  //   element: <Registration />
  // },
  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/register',
    element: <Registration />
  },
  {
    path: '/account',
    element: <ManageAcc />
  }
]);

  return (
  <RouterProvider router={router} />
  );
}

export default App
