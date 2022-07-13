import { useState } from 'react';
import './Star.css';
export function Star({active}){
    return(
        <span className="Star-shape" style={{color: active === true ? "#61DBFB" : "#3f4552"}} >
            <i class="fa-solid fa-star"></i>
        </span>
    );
}

// export function Star(){
//     const [currentcolor, setCurrentColor] = useState("#3f4552");
//     return(
//         <span className="Star-shape" style={{color: currentcolor}} onClick={() => {
//             setCurrentColor(currentcolor === "#61DBFB" ? "#3f4552" : "#61DBFB");
//         }}>
//             <i class="fa-solid fa-star"></i>
//         </span>
//     );
// }