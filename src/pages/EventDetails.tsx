export default function EventDetails() {
  return (
    <div className="max-w-7xl m-auto">
      Event details page.
    </div>
  );
}

export async function loader({request, params}) {
  const id = params.eventId;

  const response = fetch("http://localhost:8080/events" + id);
}