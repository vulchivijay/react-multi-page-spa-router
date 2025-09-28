export default function Error({ error }) {
  let title = "An error accured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page!";
  }

  return (
    <div className="h-dvh flex flex-col flex-1 items-center justify-center">
      <h1 className="text-3xl text-red-700 animate-bounce">{title}</h1>
      <p className="text-xl text-red-500 animate-pulse">{message}</p>
    </div>
  );
}