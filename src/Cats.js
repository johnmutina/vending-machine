import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sound from "react-sound";
import soundfile from "./assets/cat.wav";
import "./Cats.css";

class Cats extends Component {
    render() {
        let cats =
            "https://medlockcrafts.co.uk/wp-content/uploads/2019/05/cat.jpg";
        return (
            <div className="Cats">
                <Sound
                    url={soundfile}
                    playStatus={Sound.status.PLAYING}
                    volume={40}
                />
                <div className="Cats-body">
                    <img src={cats} alt="black cat" />
                    <h3>
                        If the earth was flat, cats would have pushed everything
                        off of it by now.
                    </h3>
                    <img src={cats} alt="black cat" />
                </div>
                <Link to="/vending-machine">
                    <button>Go Back</button>
                </Link>
            </div>
        );
    }
}
export default Cats;
