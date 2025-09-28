import { Link } from "react-router-dom";

export default function NewEvent() {
  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <div className="bg-stone-100 pb-10">
      <div className="bg-white max-w-2xl m-auto p-10 shadow-2xl rounded-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm">Event title:</label>
            <input type="text" className="w-full h-8 px-8 border-b-2 border-stone-400 rounded-2xl" placeholder="Enter event tittle" />
          </div>
          <div className="flex flex-col">
            <label>Upload Picture:</label>
            <input type="file" className="w-full h-8 px-2 pt-0.5 border-b-2 border-stone-400 rounded-2xl" placeholder="Upload event picture" />
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <label>Longitude:</label>
              <input type="text" className="w-full h-8 px-8 border-b-2 border-stone-400 rounded-2xl" placeholder="Enter longitute"/>
            </div>
            <div>
              <label>Latitude:</label>
              <input type="text" className="w-full h-8 px-8 border-b-2 border-stone-400 rounded-2xl" placeholder="Enter latitude"/>
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-6">
            <Link to="/events" className="bg-white px-6 py-2 shadow-md rounded-2xl border-1 border-stone-300 hover:shadow-sm">Canel</Link>
            <Link to="#" className="bg-white px-6 py-2 shadow-md rounded-2xl border-1 border-stone-300 hover:shadow-sm">Save</Link>
          </div>
        </form>
      </div>
    </div>
  )
}