import {Star} from './Star.jsx';

export function Stars(){
    const arr = [false, false, false, false, false].map(
        (status) => <Star active={status} />
    );
    return(
        {arr}
    )
    
}