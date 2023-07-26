import React from "react";
import './Footer.css';
import { useState } from "react";

// function Footer() {

//     return (
//         <div className="footer">
//             <div className=" footer-c">
//                 <div className="c-1">
//                     <div className="spotify">
//                         <img src="/spotify2.svg" alt="Spotify Icon" />
//                         <div className="spotify-txt"> <p>On repeat</p>
//                             <h4>Pink + White by Frank Ocean</h4>
//                         </div>

//                     </div>
//                     <div className="txt-ftr"><p>© 2023 Seán Halpin
//                         •
//                         Colophon</p></div>
//                 </div>

//                 <div className="c-2">
//                     <div className="f-h">
//                         <h3> Elsewhere</h3>
//                         <p>Github</p>
//                         <p>Figma</p>
//                         <p>Posts</p>
//                         <p>CV</p>

//                     </div>
//                     <div className="f-h">

//                         <h3>Elsewhere</h3>
//                         <p>Github</p>
//                         <p>Figma</p>

//                     </div>
//                 </div>
//         </div>
//             <div className="stick-c">
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//                 <div className="s-p"><div className="stick"></div></div>
//             </div>
//         </div>
//     );

// }

const ElementWithImage = ({ index, onClick }) => {
    return (
        <div onClick={() => onClick(index)} className="s-p">

            <div className="stick"></div>

        </div>



    );
};

const ElementContainer = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        setClickedIndex(index);
    };

    return (
        <>


            <div className="footer">
                <div className=" footer-c">
                    <div className="c-1">
                        <div className="spotify">
                            <img src="/spotify2.svg" alt="Spotify Icon" />
                            <div className="spotify-txt"> <p>On repeat</p>
                                <h4>Pink + White by Frank Ocean</h4>
                            </div>
                        </div>
                        <div className="txt-ftr"><p>© 2023 Seán Halpin
                            •
                            Colophon</p></div>
                    </div>

                    <div className="c-2">
                        <div className="f-h">
                            <h3> Elsewhere</h3>
                            <p>Github</p>
                            <p>Figma</p>
                            <p>Posts</p>
                            <p>CV</p>

                        </div>
                        <div className="f-h">

                            <h3>Elsewhere</h3>
                            <p>Github</p>
                            <p>Figma</p>

                        </div>
                    </div>
                </div>



                <div className="stick-c">
                    {Array(23).fill().map((_, index) => (
                        <ElementWithImage key={index} index={index} onClick={handleClick} />
                    ))}

                    {clickedIndex !== null && (
                        <img
                            src="/spotify.svg" // Replace with the actual image path
                            alt="Moving Image"
                            style={{
                                position: 'absolute',
                                top: "0px", // Adjust the values to position the image properly
                                left: 19 + clickedIndex * 52,
                                height: "50px",
                                transition: 'left 0s ease', // Add a smooth transition for movement
                            }}
                        />
                    )}
                </div>

            </div>
        </>
    );
};

export default ElementContainer;


// export default Footer;
