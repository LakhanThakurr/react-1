import { React, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./Work";
import "./Nav.css";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Progress from "./Pro";
import "./font/stylesheet.css";
import ElementContainer from "./Footer";
import Intro from "./About";
import { RestA1, RestA2, RestA3, RestA4, RestA5 } from "./Rest_About";
import Contact from "./Contact";
import { Play, PlayC1, PlayC2 } from "./Play";
import { Note, NoteC1 } from "./Note";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Work />
              <Card />
              <Card2 />
              <Progress />
              <Card3 />
            </>
          }
        ></Route>
        <Route
          path="About"
          element={
            <>
              <Intro />
              <RestA1 />
              <RestA2 />
              <RestA3 />
              <RestA4 />
              <RestA5 />
            </>
          }
        ></Route>

        <Route path="Contact" element={<Contact />} />

        <Route
          path="Play"
          element={
            <>
              <Play />

              <div className="flexBox">
                <PlayC1
                  heading="Wire Box"
                  txt="Turn hi-fi designs to lo-fi in one click - comes in nasty pink."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_wirebox-dm@2x.png"
                />

                <PlayC1
                  heading="FigChat"
                  txt="
              Chat, rage, or table flip about design with your team in Figma."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_figchat@2x.png"
                />

                <PlayC2
                  heading="Outline"
                  txt="Instantly spec out your designs so developers can have no excuses."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_outline@2x.png"
                />

                <PlayC1
                  heading="Custoji"
                  txt="
              Create emojis that-should-not-be to torment your friends with."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_custoji@2x.png"
                />

                <PlayC2
                  heading="Bulk"
                  txt="Select, edit, or adjust your most used elements lightning ⚡ quick in Figma."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_bulk@2x.png"
                />

                <PlayC2
                  heading="Annotator"
                  txt="Document A11y concerns to start conversations with developers."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_annotator@2x.png"
                />

                <PlayC1
                  heading="Brosow"
                  txt="
              Get all of your computers details... but the year's 1999."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_browso@2x.png"
                />

                <PlayC1
                  heading="Cover Status
              "
                  txt="
              Let folks know what's up with status thumbnails for your work."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_cover@2x.png"
                />

                <PlayC1
                  heading="Jeffsum"
                  txt="
              World's first, and probably only, Jeff Goldblum Ipsum generator."
                  imgUrl="https://www.seanhalpin.xyz/resources/showcase/showcase_jeffsum@2x.png"
                />
              </div>
            </>
          }
        />

        <Route path="Note" element={<><Note />
          <div className="note-container">
            <NoteC1
              heading="How I leverage AI in my everyday work"
              txt="Ai is here to eat all the things. Here how I use it to my advantage."
              imgUrl="https://www.seanhalpin.xyz/notes/chatgpt/icon@2x.png"
            />

            <NoteC1
              heading="WIP: Cover Status Figma plugin"
              txt="I'm reworking my Cover Status plugin for Figma, here's a sneak peak."
              imgUrl="https://www.seanhalpin.xyz/notes/cover/icon@2x.png"
            />

            <NoteC1
              heading="Throwaway projects are the best kinds of projects"
              txt="Not all ideas are good ideas. But thats a good thing.
              "
              imgUrl="https://www.seanhalpin.xyz/notes/throwaway/icon@2x.png"
            />

            <NoteC1
              heading="Flash to Figma: My love story with prototyping tools"
              txt="I've witnessed coding simplify and prototyping principles endure.
              "
              imgUrl="https://www.seanhalpin.xyz/notes/prototypes/icon@2x.png"
            />

          </div>
        </>
        } />
      </Routes>
      <ElementContainer />
    </BrowserRouter>
  );
}

export default App;
