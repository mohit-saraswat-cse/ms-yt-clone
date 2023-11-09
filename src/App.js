import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { AppStore } from './utils/AppStore';
import { Outlet, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './pages/MainContainer';
import { Suspense, lazy } from 'react';


const WatchPage = lazy(() => import("./pages/WatchPage") );
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <App />,
    errorElement : <></>,
    children:[
      {
        path: "/",
        element: <Body />,
        children:[
          {
            path:"/",
            element: <MainContainer />
          },
          {
            path: "watch",
            element: <Suspense><WatchPage /></Suspense>,
          },
          {
            path: "search",
            element: <Suspense><SearchResultsPage /></Suspense>,
          },
        ]
      },
    ]
  }
])


function App() {
  return (
    <Provider store={AppStore}>
      <Header />
      {/* Here Outlet Gives the Child */}
      <Outlet />
    </Provider>
  )
}
export default App;
