import React from 'react'
import { BrowserRouter , Router,Routes , Route  } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Gallery from '../Pages/Gallery';


const AllRoutes = () => {
  return (

    <>
    <BrowserRouter>
                   
            <Routes>
               
                <Route path='/' element={<Home/>}/>

                <Route path='/about' element={<About/>}/>
               
                <Route path='/gallery' element={<Gallery/>}/>

                <Route path='/contact' element={<Contact/>}/>
               
            </Routes>
           
    </BrowserRouter>
    
    </>

    )
}

export default AllRoutes