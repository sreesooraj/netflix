import React from "react"
import "./Banner.css"
function Banner(){
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_button">
                    <button className="button">My list</button>
                    <button className="button">My list</button>

                </div>
                <h1 className='discription'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's t </h1>
            </div>
            <div className="fade_bottom"></div>



        </div>
    )
}

export default Banner