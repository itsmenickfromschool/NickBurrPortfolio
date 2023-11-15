import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// CSS file???? what am i going to use?
// import './index.css' ???

import App from "./App.jsx";
import Error from "./pages/Error";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";

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
//         element: <Contact />
//       },
//       {
//         path: '/Resume',
//         element: <Resume />
//       },
//     ]

//   },
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
