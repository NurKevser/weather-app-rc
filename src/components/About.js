import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            Weather App Demonstration
            <ul className="pages">
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>                    
                    </Link>
                </ul>
        </div>
    )
}

export default About
