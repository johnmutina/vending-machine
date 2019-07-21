import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sound from "react-sound";
import soundfile from "./assets/chips.wav";
import "./Chips.css";

class Chips extends Component {
    render() {
        let chips =
            "https://cdn.pixabay.com/photo/2013/07/13/12/49/chips-160417_960_720.png";
        return (
            <div className="Chips">
                <Sound
                    url={soundfile}
                    playStatus={Sound.status.PLAYING}
                    volume={40}
                />
                <div className="Chips-body">
                    <img src={chips} alt="bag of chips" />
                    <h3>
                        Breast implants are like potato chips. <br />
                        You can't have just one.
                    </h3>
                    <img src={chips} alt="bag of chips" />
                </div>
                <Link to="/vending-machine">
                    <button>Go Back</button>
                </Link>
            </div>
        );
    }
}
export default Chips;
