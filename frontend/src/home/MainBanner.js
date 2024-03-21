import React from 'react'
import "../Styles/MainBanner.css"
import { Link } from "react-router-dom";
import pc2 from "../assets/awardbooks.png";


const MainBanner=()=>{
    return(
        <div className='Demo3'>
            <div className='english'>
                <div className='bigimage'>
                    <h2 className='fiction'>Reading is the best for get idea<br></br><span>Keep Reading</span><br></br>Your Reading Journey Starts Here.</h2>
                    <Link to="/Shop" className="Devlop"><button className='box-btn'>Explore More</button></Link>
                </div>
                <div className='"image-container"'>
                    <img src={pc2} alt=" " />
                </div>
            </div>
        </div>

    )
}
export default MainBanner;