import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Stats from './components/Stats/Stats';
import Blog from './components/blog/Blog';
import ErrorPage from './components/error/ErrorPage';
import Home from './components/Home/Home';
import Quiz from './components/quiz/Quiz';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:  async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/stats',
          loader:  async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Stats></Stats>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path:'quiz/:id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className='overflow-x-hidden'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
