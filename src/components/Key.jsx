import React, { useContext } from 'react';
import { AppContext } from '../App';

const Key = ({val, keyType, disabled, good}) =>{

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

    const keyColor = (keyType === 'specialKey' ? 'specialKey' : disabled ? 'disabled' : good && 'good').toString();

    return(
        <button className='key' id={keyColor} onClick={setLetter}>
            {
                val
            }
        </button>
    )
}

export default Key;