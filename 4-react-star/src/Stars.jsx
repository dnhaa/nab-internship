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
                    {console.log("rating: " + rating + "; number: " + number)}
                    <Star active={number <= rating ? true : false}/>
                </div>
                )
            }
            

        </div>
    );
}