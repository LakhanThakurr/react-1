import React from "react";
import './Card.css';


function Card3() {

    return (
        <div className="card-box" style={{flexDirection:"row-reverse"}}>

            <div className="card-sm h" style={{background:'black'}}>
                <div className="card-txt">
                    <p className="mr-0 mrt"  >HElP SCOUT</p>
                    <h2 className="mr-0 ">Ai</h2>
                </div>
                <img src="https://www.seanhalpin.xyz/hp/wip/dm@2x.png" alt="" className="abs crd2-img" />
            </div>
          
            <div className="card-big h" style={{background:' white'}}>
                <div className="card-txt">
                <p className="mr-0 mrt" >HElP SCOUT</p>
                    <h2 className="mr-0">Articles</h2>
                </div>
                <img src="https://www.seanhalpin.xyz/hp/wip/doodler@2x.png" alt="" className="abs img2 crd3-img" />
            </div>

        </div>
    );
}


export default Card3;



