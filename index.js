import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    setTheme(color) {
        if( color === "default")
            color = "#262253"

        document
            .documentElement
            .style
            .setProperty("--main-color", color);
    }

    render() {
        return (
            <div className="main">
                <div className="section">
                    <div className="section-head">
                      Theme React Components - CSS Variable Demo
                    </div>
                    <div className="section-body">
                        <div>
                            <button onClick={() => this.setTheme("default")}>Reset Theme Default</button>
                            <button onClick={() => this.setTheme("red")}>Set Theme(Red)</button>
                            <button onClick={() => this.setTheme("yellow")}>Set Theme(Yellow)</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));
