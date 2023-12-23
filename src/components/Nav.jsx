import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top when the route changes
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="navbar sticky">
            <ul className="navListbar">
                <li className="navList">
                    <Link className="navbar" to="/">
                        Home
                    </Link>
                </li>
                <li className="navList">
                    <Link className="navbar" to="/about">
                        About
                    </Link>
                </li>
                <li className="navList">
                    <Link className="navbar" to="/projects">
                        Projects
                    </Link>
                </li>
                <li className="navList">
                    <Link className="navbar" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}
