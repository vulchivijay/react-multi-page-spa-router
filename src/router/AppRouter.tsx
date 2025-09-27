import { createBrowserRouter} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import EventsLayout from "../pages/EventsLayout";
import NewsLetterLayout from "../pages/NewsLetterLayout";
import Home from './../pages/Home';
import Events from './../pages/Events';
import EventDetails from './../pages/EventDetails';
import EventEdit from './../pages/EventEdit';
import NewsLetters from './../pages/NewsLetters';
import Error from './../components/Error';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'events',
        element: <EventsLayout />,
        errorElement: <Error />,
        loader: async () => {
          const response = await fetch("http://localhost:8080/events");
          if (!response.ok) {
            //...
          }
          else {
            const data = await response.json();
            return data.events;
          }
        },
        children: [
          {
            index: true,
            element: <Events />,
            loader: () => {},
          },
          {
            path: ':eventId',
            element: <EventDetails />,
            loader: () => {},
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
        errorElement: <Error />,
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