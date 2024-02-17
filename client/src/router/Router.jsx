import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AddProduct from "../pages/Dashboard/AddProduct";
import AddCustomer from "../pages/Dashboard/AddCustomer";
import CustomerList from "../pages/Dashboard/CustomerList";
import CustomerDetails from "../pages/Dashboard/CustomerDetails";
import Carts from "../pages/Carts";
import ProductList from "../pages/Dashboard/ProductList";
import OrderList from "../pages/Dashboard/OrderList";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/details/:id',
            element: <ProductDetails/>
        },
        {
            path: '/cart',
            element: <Carts/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "home",
          element: <DashboardHome/>
        },
        {
          path: "add-product",
          element: <AddProduct/>
        },
        {
          path: "add-customer",
          element: <AddCustomer/>
        },
        {
          path: "customer-list",
          element: <CustomerList/>
        },
        {
          path: "product-list",
          element: <ProductList/>
        },
        {
          path: "order-list",
          element: <OrderList/>
        },
        {
          path: "customer-list/info/:id",
          element: <CustomerDetails/>
        }
      ]
    }
  ]);