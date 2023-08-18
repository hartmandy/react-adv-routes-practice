import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import EventsPage from "./routes/EventsPage";
import EventsDetailPage from "./routes/EventsDetailPage";
import NewEventPage from "./routes/NewEventPage";
import EditEventPage from "./routes/EditEventPage";
import RootLayout from "./routes/Root";
import EventsRoot from "./routes/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: "eventId", element: <EventsDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: "eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
