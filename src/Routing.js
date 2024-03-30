import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import Home from "./components/Home";
import Register from "./components/Register";
import FormValidations from "./components/FormValidations";
import PageNotFound from "./components/PageNotFound";
import DefaultLayout from "./components/DefaultLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:'',element:<DefaultLayout> <Home/></DefaultLayout>},
        {path:'form', element:<Register/>},
        {path:'validations',element:<DefaultLayout> <FormValidations/></DefaultLayout>},

        {path:"*",element:<PageNotFound/>}
      ]
    }
  ]);