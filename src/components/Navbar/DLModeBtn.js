import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './index.css'

import { dlModeContext } from '../../contexts/dlMode'

export default function DLModeBtn () {
    //mode == false for light mode; true for dark mode
    const [dlMode, setDLMode] = useContext(dlModeContext);

    return (
        <div id="dl-container">
            <FontAwesomeIcon class={`dl-icon ${dlMode ? 'white' : 'gray'}`} icon={faSun}/>
            <label className="dl-switch">
                <input className="dl-input" defaultChecked={dlMode} onChange={() => setDLMode(!dlMode)} type="checkbox" />
                <span className="dl-slider round"></span>
            </label>
            <FontAwesomeIcon class={`dl-icon ${dlMode ? 'white' : 'gray'}`} icon={faMoon}/>
        </div>
    )
}