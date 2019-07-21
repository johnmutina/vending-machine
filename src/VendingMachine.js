import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine">
                <p className="VendingMachine-intro">
                    Hello, I am a vending machine. <br />
                    Select whatever you want from the menu here at my right!
                </p>
                <div className="VendingMachine-menu">
                    <Link exact to="/soda">
                        <h2>Soda</h2>
                    </Link>
                    <Link exact to="/chips">
                        <h2>Chips</h2>
                    </Link>
                    <Link exact to="/cats">
                        <h2>Cats</h2>
                    </Link>
                </div>
            </div>
        );
    }
}

export default VendingMachine;
