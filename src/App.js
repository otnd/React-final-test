import Home from "./components/Home";
import MealDetails from "./components/MealDetails";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "./modules/App.scss"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/MealDetails',
    element: <MealDetails/>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
