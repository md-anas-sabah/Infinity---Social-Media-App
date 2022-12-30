import "./App.css";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
