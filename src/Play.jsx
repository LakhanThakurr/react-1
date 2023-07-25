import React from "react";
import './Play.css';

function Play() {


    return (

        <div className="play-hero">
            <h2>Play.</h2>
            <p className="p-h-t">A collection of tools and sites I've created, designed
                to be helpful, fun, & sometimes just a little bit weird.</p>
        </div>

    );

}

function PlayC1({heading, txt, imgUrl}) {
    return (
        <div className="playC1">
            <div>
                <h3>{heading}</h3>
                <p>{txt}</p>
            </div>
            <img src={imgUrl} alt="" />
        </div>
    );
}

function PlayC2({heading, txt, imgUrl}) {


    return (

        <div className="playC2">
            <div>
                <h3>{heading}</h3>
                <p>{txt}</p>
            </div>
            <img src={imgUrl} alt="img" />
        </div>

    );

}


export  {Play, PlayC1, PlayC2};








