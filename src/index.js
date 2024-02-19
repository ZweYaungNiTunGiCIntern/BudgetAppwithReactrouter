import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {logoutAction} from './logout.js'
import Dashboard, {dashboardAction, dashboardLoader} from './Dashboard';
import Main, {mainLoader} from './Main';
import Error from './Error.js';
import ExpensesPage,{expensesLoader} from './ExpensesPage.js';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

