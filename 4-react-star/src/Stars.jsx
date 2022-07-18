import {Star} from './Star.jsx';
import { useState } from 'react';

export function Stars (){
    const [rating, setRating] = useState(0)
    return(
        <div style={{display : "flex"}}>
            {
                [1, 2, 3, 4, 5].map((number) => 
                <div onClick={() => {
                    setRating(number);
                }}>
                    <Star active={number <= rating ? true : false}/>
                </div>
                )
            }
        </div>
    );
}

//439d4b804bc8187953eb36d2a8c26a02
