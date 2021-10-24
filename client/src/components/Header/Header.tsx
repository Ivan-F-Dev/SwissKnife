import {FC} from 'react';
import {NavLink} from "react-router-dom";

export const Header: FC = () => {

    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="todos">Sass</NavLink></li>
                        <li><NavLink to="sass.html">Sass</NavLink></li>
                        <li><NavLink to="sass.html">Sass</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
