import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './component/Layout';

const Landing = React.lazy(() => import('./component/Landing'));
const Solution = React.lazy(() => import('./component/Solution'));
const Pricing = React.lazy(() => import('./component/Pricing'));
const Blog = React.lazy(() => import('./component/Blog'));
const ContactUs = React.lazy(() => import('./component/Contact_Us'));
const SignUp = React.lazy(()=>import('./pages/SignUpPage'));
const Login = React.lazy(()=>import('./pages/LoginPage'));
const BlogPage = React.lazy(()=>import('./pages/BlogPage'))
const JdParser = React.lazy(()=>import('./component/JdParser/JdParser'))
const SearchMatch = React.lazy(()=>import('./component/searchandmatch/SearchMatch'))
const PvTech = React.lazy(()=>import('./component/Parmacovigilance/PvTech'))
const PvLiterature = React.lazy(()=>import('./component/Parmacovigilance/PvLiterature'))


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: 'solution',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Solution />
          </Suspense>
        ),
      },
      {
        path: 'pricing',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: 'contact_us',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: 'blogPage',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: 'jdParser',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <JdParser />
          </Suspense>
        ),
      },
      {
        path: 'searchMatch',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <SearchMatch />
          </Suspense>
        ),
      },
      {
        path: 'PvTech',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <PvTech />
          </Suspense>
        ),
      },
      {
        path: 'PvLiterature',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <PvLiterature />
          </Suspense>
        ),
      },
     

    ],
  },
]);

const App = () => (
  <RouterProvider router={router}>
    <Layout/>
  </RouterProvider>
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
     {/* <div className="h-screen w-full overflow-y-scroll font-titillium_web no-scrollbar"> this was previous remove the overflow-y-scroll because it was not letting us go to top page of route page when link from footer is clicked */}
     <div className="h-screen w-full overflow-y-scroll font-titillium_web no-scrollbar" >
      <App />
    </div>
  </React.StrictMode>
);
