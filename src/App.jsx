import { Routes, Route, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer'
import './App.css'
import Error from './pages/Error'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: '/About',
//         element: <About />
//       },
//       {
//         path: '/Projects',
//         element: <Projects />
//       },
//       {
//         path: '/Contact',
//         element: <Contacts />
//       },
//       {
//         path: '/Resume',
//         element: <Resume />
//       },
//     ]

//   },
// ])

function App() {
  

  return (
    <>
      <Nav />
        <Routes>
          <Route path ="/" element = {<Home />}/>
          <Route path ="/about" element = {<About />}/>
          <Route path ="/contact" element = {<Contact />}/>
          <Route path ="/projects" element = {<Projects />}/>
          <Route path ="/resume" element = {<Resume />}/>
          <Route path ="*" element = {<Error />}/>

        </Routes>
      <Footer />
    </>
      )
}

export default App
