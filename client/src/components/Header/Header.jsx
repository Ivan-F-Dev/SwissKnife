import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <>
            <nav>
                <div className="nav-wrapper deep-orange darken-1" style={{ padding: '0 2rem'}}>
                    <a href="#" className="brand-logo">Swiss Knife</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="todos">Todos</NavLink></li>
                        <li><NavLink to="sass.html">Blank</NavLink></li>
                        <li><NavLink to="sass.html">Blank</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
