import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sound from "react-sound";
import soundfile from "./assets/soda.mp3";
import "./Soda.css";

class Soda extends Component {
    render() {
        let sodaBottle =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2M5nsa20FdzhNueCY6XWooTNloiGkNqtO1Fe6U6SEXErxBTh2ww";
        return (
            <div className="Soda">
                <Sound
                    url={soundfile}
                    playStatus={Sound.status.PLAYING}
                    volume={40}
                />
                <div className="Soda-body">
                    <img src={sodaBottle} alt="soda bottle" />
                    <h3>
                        I got hit in the head with a can of soda. <br />
                        Luckily, it was a soft drink.
                    </h3>
                    <img src={sodaBottle} alt="soda bottle" />
                </div>
                <Link to="/react-router">
                    <button>Go Back</button>
                </Link>
            </div>
        );
    }
}
export default Soda;
