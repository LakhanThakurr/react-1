import React from "react";
import './Card.css';


function Card() {

    return (
        <div className="card-box">

            <div className="card-sm h">
                <div className="card-txt">
                    <p className="mr-0 mrt"  >HElP SCOUT</p>
                    <h2 className="mr-0 ">Ai</h2>
                </div>
                <img src="https://www.seanhalpin.xyz/hp/ai@2x.png" alt="" className="abs" />
            </div>

            <div className="card-big h">
                <div className="card-txt">
                <p className="mr-0 mrt" >HElP SCOUT</p>
                    <h2 className="mr-0">Articles</h2>
                </div>
                <img src="https://www.seanhalpin.xyz/hp/docs@2x.png" alt="" className="abs img2 " />
            </div>

        </div>
    );
}


export default Card;



