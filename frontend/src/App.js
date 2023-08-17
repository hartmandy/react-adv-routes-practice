import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import EventsPage from "./routes/EventsPage";
import EventsDetailPage from "./routes/EventsDetailPage";
import NewEventPage from "./routes/NewEventPage";
import EditEventPage from "./routes/EditEventPage";
import RootLayout from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "events:eventId", element: <EventsDetailPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <div></div>;
}

export default App;
