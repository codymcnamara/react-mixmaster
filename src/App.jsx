import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import { loader as landingLoader } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError/>,
        element: <Landing />,
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail/>
      }, 
      {
        path: '/newsletter',
        element: <Newsletter/>
      }, 
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },

]);

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App;
