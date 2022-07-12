import { useState } from 'react';
import './Star.css';
export function Star({active}){
    const [currentcolor, setCurrentColor] = useState(active === true ? "#61DBFB" : "#3f4552");
    return(
        <span className="Star-shape" style={{color: currentcolor}} onClick={() => {
            setCurrentColor(currentcolor === "#61DBFB" ? "#3f4552" : "#61DBFB");
        }}>
            <i class="fa-solid fa-star"></i>
        </span>
    );
}