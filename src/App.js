import './css/App.css'
import Navbar from './components/Navbar';
import './css/tailwind.css';
import Home from './components/Home';
import SectionData from './components/SectionData';
import SectionAcademic from './components/SectionAcademic';
import Footer from './components/Footer';
import SectionExperience from './components/SectionExperience';

// Run: npx tailwindcss -i ./src/css/App.css -o ./src/css/tailwind.css --watch acordarse de ponerlo
// import {  } from 'flowbite-react'
// import {  } from '@heroicons/react/24/outline'


function App() {
  return (
  <>
    <Navbar></Navbar>
    <Home></Home>
    <SectionData></SectionData>
    <SectionAcademic></SectionAcademic>
    <SectionExperience></SectionExperience>
   <Footer></Footer>
    </>
    )

}

export default App;
