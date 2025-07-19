import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);

 // like an event listener that i have attached to our app , this listens to evrry auth state change , (user) ==> refers to the same user that we get from signIn and signup
  return <RouterProvider router={appRouter} />;
}

export default App;
