import React, { useContext } from 'react';
import { AppContext } from '../App';

const Key = ({val, keyType}) =>{

    const { enterClick, deleteClick, onSetLetter } = useContext(AppContext);

    const setLetter = () => {
        if(val === "ENTER"){
            enterClick()
        } else if (val === "DELETE"){
            deleteClick();
        } else {
            onSetLetter(val);
        }
    }

    return(
        <button className={ keyType === "specialKey" ? 'specialKey' : 'key'} onClick={setLetter}>
            {
                val
            }
        </button>
    )
}

export default Key;