import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import { Toaster } from './components/ui/toaster'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthLayout from "./layout/AuthLayout";
import PatientLayout from "./layout/PatientLayout";
import Dashboard from "./components/Dashboard";


const router = createBrowserRouter([
  {
    path: "/auth/signup",
    element: <AuthLayout><Register /></AuthLayout>,
  },
  {
    path: "/auth/login",
    element: <AuthLayout><Login /></AuthLayout>,
  },
  {
    path: "/patient/dashboard",
    element: <PatientLayout><Dashboard /></PatientLayout>,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
};

export default App;