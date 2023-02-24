import { RouterProvider, createBrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import RootLayout from "./pages/Root";
import CoctailsPage from "./pages/CoctailsPage";
import CategoriesPage from "./pages/CategoriesPage";
import GlassesPage from "./pages/GlassesPage";
import IngredientsPage from "./pages/IngredientsPage";
import FilterPage from "./pages/FilterPage";
import CoctailDetailPage from "./pages/CoctailDetailPage";
import ErrorPage from "./pages/ErrorPage";
import { useDispatch } from "react-redux";
import { drinksActions } from "./store/index.js";
import { useEffect } from "react";
import DrinksProvider from "./store/DrinksProvider";


function App() {

  const dispatch = useDispatch();
  

  useEffect(() => {
      dispatch(drinksActions.getItem());
  }, []);

   
  const router = createBrowserRouter([
    { path: "/", element: <RootLayout />, errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <CoctailsPage /> },
        { path: "/coctails", element: <CoctailsPage /> },
        { path: "/coctails/:coctailId", element: <CoctailDetailPage />},
        { path: "/categories", element: <CategoriesPage />},
        { path: "/glasses", element: <GlassesPage />},
        { path: "/ingredients", element: <IngredientsPage />},
        { path: "/bartender-beginner", element: <FilterPage />}
    ]} 
  ]); 

  return (
    <DrinksProvider><RouterProvider router={router} /></DrinksProvider>
  );
}

export default App;
