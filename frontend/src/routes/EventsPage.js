import { Link } from "react-router-dom";

const DUMMY_DATA = [
  { id: "e1", title: "Event One" },
  {
    id: "e2",
    title: "Event Two",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_DATA.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
