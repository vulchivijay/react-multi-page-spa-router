import { useLoaderData } from "react-router-dom";

export default function Events() {
  const events = useLoaderData();
  console.log(events);
  return (
    <div className="w-7xl m-auto">
      Events page.
    </div>
  );
}