import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>
  },
  {
    path: '/about',
    element: <About></About>
  }
]);

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App;
