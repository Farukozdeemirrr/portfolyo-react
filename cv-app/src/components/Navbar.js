import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Link, useLocation} from 'react-router-dom' //html'deki a tagi yerine react'da link kullanılır. --- useLocation Sayfanın nerde olduğunu gösterir.
import ReorderIcon from '@mui/icons-material/Reorder';

 function Navbar() {

      const[expendNavbar, setExpendNavbar] = useState(false);
      const location = useLocation();

      useEffect(()=>{
        setExpendNavbar(false)
      }
      ,[location])

  return (
    //  ? => True ise , : => False ise döndür
    <div className='navbar' id={expendNavbar ? "open" : "close"}> 
      <div className='toggleButton'>
        <button onClick={()=>{setExpendNavbar((prev)=> !prev)}}><ReorderIcon/></button>
    </div>

    <div className='links' >
           <Link to="/">Anasayfa</Link>
      <Link to="/experience">Eğitim</Link>
      <Link to="project">Projeler</Link>
      </div>
    </div>

  )
}
export default Navbar;