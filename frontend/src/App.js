import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import EventsPage, { loader as eventsLoader } from "./routes/EventsPage";
import EventsDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./routes/EventsDetailPage";
import NewEventPage, { action as newEventAction } from "./routes/NewEventPage";
import EditEventPage from "./routes/EditEventPage";
import RootLayout from "./routes/Root";
import EventsRoot from "./routes/EventsRoot";
import ErrorPage from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventsDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
