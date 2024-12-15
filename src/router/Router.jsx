import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../aouthenTication/Register";
import Login from "../aouthenTication/Login";
import JobDetails from "../components/JobDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element: <JobDetails></JobDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: 'register',
          element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
      ]
    }
    
  ]);

  export default router;