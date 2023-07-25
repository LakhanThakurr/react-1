import React from "react";
import './About.css';


function RestA1() {


    return (
        <div className=" s-container">
            <div className="abt-scout s1">
                <div className="">
                    <h3 className="w s-pp "> Help Scout</h3>
                    <p className="w">Senior Product Designer</p>
                </div>
                <div><h4 className="w n">15~</h4></div>
            </div>

            <div className="abt-scout s2">
                <div className="">
                    <h3 className="w s-pp "> Freelance  </h3>
                    <p className="w">Design Consultant</p>
                </div>
                <div><h4 className="w n">12~</h4></div>
            </div>
            <div className="abt-scout s3">
                <div className="">
                    <h3 className="w s-pp "> Dotfusion</h3>
                    <p className="w">Design / Dev</p>
                </div>
                <div><h4 className="w n">10-14</h4></div>
            </div>
            <div className="abt-scout s4">
                <div className="">
                    <h3 className="w s-pp ">Cubic</h3>
                    <p className="w">Design / Dev</p>
                </div>
                <div><h4 className="w n">7-10</h4></div>
            </div>
        </div>

    );
}

function RestA2() {

    return (
        <div className="coll-c">
            <div className="collab">
                <h3 className="collaborate">Let's collaborate if you're committed to
                    sustainability, education, equality,
                    or carbon neutrality.
                </h3>

                <p className="collaborate-txt">I believe we should leave this Earth as
                    good as or better than we found it for
                    future generations; my goal is to contribute
                    to those ideals in whatever way I can. If you feel
                    the same, I'd love to talk.
                </p>
            </div>
        </div>
    );
}

function RestA3() {

    return (

        <div className="article-sec">
            <div className="article-container">

                <div className="article">
                    <h3>01</h3>
                    <h3>Make it</h3>
                    <p>I sketch wireframes and make prototypes.
                        Talking through tactile designs existing in the
                        browser is worth its weight. Design tools only carry
                        you so far; the rest should be realized with a
                        link my team can rally around.
                    </p>
                </div>

                <div className="article">
                    <h3>02</h3>
                    <h3>Collaborate</h3>
                    <p>Good design is not created in a vacuum
                        but rather in a shared space. It must be
                        facilitated and iterated upon as a team. I
                        aim to include stakeholders in my design
                        process and create a collaborative
                        environment that welcomes and encourages
                        feedback.
                    </p>
                </div>
                <div className="article">
                    <h3>03</h3>
                    <h3>Accessible FTW</h3>
                    <p>I aim to make everything I design accessible
                        to all for one main reason - it's the right
                        thing to do. Accessible
                        products benefit the many, not the few.
                    </p>
                </div>
                <div className="article">
                    <h3>04</h3>
                    <h3>Keep experimenting</h3>
                    <p>Everything I create is subject to change and
                        experimentation. Not everything will work,
                        but it's worth
                        trying - and learning from what doesn't.
                    </p>
                </div>

            </div>
        </div>
    );

}

function RestA4() {

    return (
        <div className="p-box">
            <p>Before I stepped into the world of product design,
                I was a web developer. One of my earliest jobs
                involved writing HTML emails, in a time before
                email linters. Lots of wishing, hoping, and finger
                crossing that your email arrived in a recipient's
                inbox in one piece.
            </p>

            <p>Coding emails forced me to understand how HTML
                and CSS play together, a skill set I've carried
                and kept fresh in the years since. My side project
                work is just an excuse to satisfy my curiosity
                about new technologies and understand how the web
                is moving forward.
            </p>

            <p>Outside work, I enjoy good coffee near my home by
                the sea, listening to and playing music, exploring
                the world with my partner, and playing with my
                Labrottie pup, Louie.
            </p>

        </div>
    );
}

function RestA5() {

    return (
        <div className="A-img-sec">
            <img src="https://www.seanhalpin.xyz/about/photos/large-05.png" alt="" className="i"/>
            <img src="https://www.seanhalpin.xyz/about/photos/small-07.png" alt="" className="ii"/>
        </div>
    );
}

export { RestA1, RestA2, RestA3, RestA4, RestA5 };