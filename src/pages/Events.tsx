import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../components/Error";

export default function Events() {
  const events = useLoaderData();

  return (
    <div className="max-w-7xl m-auto py-10">
      <ul className="flex flex-wrap gap-8 justify-between">
        { events.length === 0 && <div className="p-4 my-4 text-center shadow-2xl rounded-2xl border-2 border-stone-200 hover:shadow-md">
          <p className="animate-pulse">Feching data... Please wait!</p>
        </div> }
        { events && events.map((event: any) => {
          return <li key={event.id}
            className="w-xl p-4 mx-6 shadow-2xl rounded-2xl border-2 border-stone-200 hover:shadow-md">
            <Link to={`${event.id}`} className="flex items-top justify-start">
              <div className="w-xl">
                <img src={`http://localhost:8080/${event.image.src}`} alt={event.image.alt} />
              </div>
              <div className="w-full pl-4">
                <h2 className="text-xl">{event.title}</h2>
                <p className="text-xs text-stone-500">{event.lon}, {event.lat}</p>
              </div>
            </Link>
          </li>
        })}
      </ul>
    </div>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    <Error error={ response } />
  }
  else {
    const data = await response.json();
    return data.events;
  }
}