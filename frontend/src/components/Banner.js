import React from 'react'
import '../Styles/Banner.css'
import pc1 from "../assets/hero.png"
const Banner = () => {
    return (
        <>
            <div className="shipping">
                <div className="screen">
                    <div className='left-side'>
                        <h2>What Look do you <br></br> want to <span className='read-me'>READ?</span></h2>
                        <p>A book is a medium for recording information in the form of writing or images.<br></br> Books are typically composed of many pages, bound together and protected by a cover.<br></br> Modern bound books were preceded by many other written mediums, such as the codex and the scroll. <br></br>The book publishing process is the series of steps involved in their creation and dissemination.</p>
                        <div className='search-box'>
                            <input type="search" name="search" id="search" placeholder='Search a book' />
                            <button className='engine'>Search </button>

                        </div>
                        </div>
                    <div className='Right-side'>
                        <img src={pc1}></img>
                    </div>
                </div>

            </div>




        </>
    )
}
export default Banner;