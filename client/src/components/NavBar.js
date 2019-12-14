import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <div className='toggle_dark-mode'>
                <button 
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    onClick={toggleMode}
                >Button</button>
            </div>
            <div>
                <h4>2019 Women's World Cup</h4>
                <p>Players ranked by search interest from Google Trends</p>
                <h5>June-July 2019, worldwide</h5>
            </div>
        </div>
    )
}
export default NavBar;