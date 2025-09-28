import { Link, Outlet } from "react-router-dom";
import Header from "../components/UI/Header";

export default function EventsLayout() {
  return (
    <div className="bg-stone-100">
      <div className="flex items-center justify-center gap-8 pt-10 pb-5">
        <Link to='/events' className="bg-white px-6 py-2 shadow-md rounded-2xl border-1 border-stone-300 hover:shadow-sm">
          All events
        </Link>
        <Link to="/events/new" className="bg-white px-6 py-2 shadow-md rounded-2xl border-1 border-stone-300 hover:shadow-sm">
          New event
        </Link>
      </div>
      <Outlet />
    </div>
  );
}