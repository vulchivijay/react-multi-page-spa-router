import { createBrowserRouter} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import EventsLayout from "../pages/EventsLayout";
import NewsLetterLayout from "../pages/NewsLetterLayout";
import Home from './../pages/Home';
import Events, { loader as eventsLoader } from './../pages/Events';
import EventDetails, { loader as eventLoader } from './../pages/EventDetails';
import EventEdit from './../pages/EventEdit';
import NewsLetters from './../pages/NewsLetters';
import Error from './../components/Error';

const error = {
  status: 404,
  message: "An error accured!"
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error error={error} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            element: <EventDetails />,
            loader: eventLoader,
          },
          {
            path: 'edit',
            element: <EventEdit />,
            loader: () => {},
            action: () => {},
          },
        ]
      },
      {
        path: 'newsletters',
        element: <NewsLetterLayout />,
        errorElement: <Error error={error} />,
        children: [
          {
            index: true,
            element: <NewsLetters />
          },
        ]
      }
    ]
  }
]);

export default AppRouter;