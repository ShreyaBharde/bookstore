import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import pc7 from "../assets/out.gif";
import "../Styles/Logout.css"

const Logout=()=>{


    const {logOut} = useContext(AuthContext);
   
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleLogout = () =>{
        logOut().then(()=>{
            alert ('Sign-out successfull');
            navigate(from,{replace:true})
        }).catch((error)=>{

        })
    }
    return(
        
        <div className="dribble">
         <div className='flow'>
            <h1>Logout Successful.</h1>
            <div className='log'>
                <img src={pc7}></img>
            </div>
            <button className="vlog" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    



    
      
    );
};


   

export default Logout;