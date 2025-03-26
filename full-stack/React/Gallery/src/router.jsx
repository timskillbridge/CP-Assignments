import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import PokeTeam from "../../../React/pokemon-theme-team-master/src/App"
import Hangman from '../../../React/react-hangman-master/src/App'
import MuteSpeaker from '@mute-speaker/App.jsx'
import WhackMole from '../../react-whack-a-mole/src/App'
import Tailwind from '../../Tailwind-and-BootStrap-Project-main/src/App'
// import IntroToDesign from '../../react-understanding-css-main/src/App'

// import BasicCss from '../../../React/react-understanding-css-main/src/App'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'pokemon-theme-team-master',
        element:<PokeTeam/>
      },
      {
        path: 'Hangman',
        element: <Hangman/>
      },
      {
        path: 'mute-speaker',
        element: <MuteSpeaker/>
      },
      {
        path: 'whack-a-mole',
        element: <WhackMole />
      },
      {
        path: 'tailwind',
        element: <Tailwind />
      },
//    {
//     path: 'basic-design',
//      element: <IntroToDesign/>
//    },
    ],
  },
]);

export default router;

///home/wtadam2/code_platoon_cirriculum/assignments/full-stack/React/pokemon-theme-team-master/src/App.jsx
///home/wtadam2/code_platoon_cirriculum/assignments/full-stack/React/Gallery/src

