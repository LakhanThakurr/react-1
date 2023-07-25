import React from "react";
import './About.css';

function Intro() {

    return (

        <div className="about-hero">
            <h1 className='hi'>I'm Seán.</h1>
            <div className="hero-content">
                <div>

                    <div className="hero-img">
                        <img src="https://www.seanhalpin.xyz/about/faces.jpg" alt="" />
                    </div>
                    <div className="spotify sp-ab">

                        <img src="/spotify.svg" alt="Spotify Icon" />
                        <div className="spotify-txt"> <p className="w">On repeat</p>
                            <h4 className="w">Pink + White by Frank Ocean</h4>
                        </div>
                    </div>

                </div>
                <div className="hero-txt">

                    <h2>I'm a Product Designer working remotely from 10°C Dublin, Ireland.</h2>
                    <p className="hero-p">Over the past 12+ years, I've worked in various areas of digital
                        design, including front-end development, email, marketing,
                        and app UI/UX. I'm proud to have worn many hats.</p>

                    <p>These days, I focus on building Help Scout's knowledge
                        base and AI tools as a Senior Product Designer.</p>

                </div>
            </div>
        </div>

    );

}


export default Intro;