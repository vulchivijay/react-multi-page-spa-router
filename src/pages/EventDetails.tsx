import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../components/Error";

export default function EventDetails() {
  const { event } = useLoaderData();

  return (
    <div className="bg-stone-100 max-w-7xl m-auto">
      <div className="bg-white w-3xl m-auto p-4 shadow-2xl rounded-2xl">
        <h1 className="my-2 text-2xl">{event?.title}</h1>
        <div className="">
          <figure>
            <img src={`http://localhost:8080/${event?.image?.src}`} alt={event?.image?.alt} />
          </figure>
        </div>
        <div className="">
        </div>
      </div>
      <div className="flex justify-end py-4">
        <Link to="/events" className="">&larr; Go back to Events page.</Link>
      </div>
    </div>
  );
}

export async function loader({request, params}) {
  const id = params.eventId;
  const response = fetch("http://localhost:8080/events/" + id);
  if (!response) {
    <Error error={ response } />
  }
  else {
    const data = await response;
    return data;
  }
}