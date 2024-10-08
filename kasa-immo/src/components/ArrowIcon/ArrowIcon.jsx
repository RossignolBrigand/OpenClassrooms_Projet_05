import React from "react";
import { useState } from "react";

import '../../styles/components/_arrow-icon.scss'

function ArrowIcon({ color }) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => { setIsClicked(!isClicked) };

    return (
        <div className={`arrow-icon${isClicked ? ' rotated ' : ''}`} onClick={handleClick}>
            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2103 13.8522C12.5409 14.5216 11.4538 14.5216 10.7843 13.8522L0.502064 3.56991C-0.167355 2.90049 -0.167355 1.81335 0.502064 1.14393C1.17148 0.474515 2.25862 0.474515 2.92804 1.14393L12 10.2159L21.072 1.14929C21.7414 0.479871 22.8285 0.479871 23.4979 1.14929C24.1674 1.81871 24.1674 2.90585 23.4979 3.57526L13.2157 13.8575L13.2103 13.8522Z" fill={color} />
            </svg>
        </div>
    )
}

export default ArrowIcon;

// ) : (
{/* <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z" fill={color} />
</svg> */}
