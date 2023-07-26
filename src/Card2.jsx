import React from "react";
import './Card.css';


function Card2() {

    return (
        <div className="card-box" style={{ flexDirection: "row-reverse" }}>

            <div className="card-sm h" style={{ background: 'hsl(206deg 71.74% 84.21%)' }}>
                <div className="card-txt">
                    <p className="mr-0 mrt"  >HElP SCOUT</p>
                    <h2 className="mr-0 ">Mobile</h2>
                </div>
                <img src="https://www.seanhalpin.xyz/hp/hs@2x.png" alt="" className="abs crd2-img" />
            </div>

            <div className="card-big h" style={{ background: '  hsl(22deg 59.06% 75%)' }}>
                <div className="card-txt">
                    <p className="mr-0 mrt" >HElP SCOUT</p>
                    <h2 className="mr-0">Plugins</h2>
                </div>
                <img src="https://www.seanhalpin.xyz/hp/figma@2x.png" alt="" className="abs img2 " />
            </div>

        </div>
    );
}


export default Card2;



