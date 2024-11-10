import ManageAcc from './account'
import HomePage from './home';
import Login from './login'
import Registration from './registration'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

// creating a brower router so user can redirect from one page to another
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
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
