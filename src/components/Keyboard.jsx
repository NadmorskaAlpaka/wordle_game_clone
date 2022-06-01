import React, { useCallback, useEffect, useContext }from 'react';
import { AppContext } from '../App';
import Key from '../components/Key';

const Keyboard = () => {

    const { enterClick , deleteClick, onSetLetter} = useContext(AppContext);

    const keys_top = ["Q","W","E","R","T","Y","U","I","O","P"];
    const keys_middle = ["A","S","D","F","G","H","J","K","L"];
    const keys_bottom = ["Z","X","C","V","B","N","M"];

    const alphabet = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M" ]

    const handleKeyboradPress = useCallback((event) => {
        if(event.key === "Enter"){
            enterClick();
        } else if (event.key === "Backspace"){
            deleteClick();
        } else {
            alphabet.forEach((key) => {
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSetLetter(key.toUpperCase());
                }
            })
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboradPress);

        return () => {
            document.removeEventListener('keydown', handleKeyboradPress);
        }
    },[handleKeyboradPress]);

    return (
        <div className='keyboard' onClick={handleKeyboradPress}>
            <div className='keys_top'>
                {
                    keys_top.map((key,index) => <Key key={index} val={key}/>)
                }
            </div>
            <div className='keys_middle'>
                {
                    keys_middle.map((key,index) => <Key key={index} val={key}/>)
                }
            </div>
            <div className='keys_bottom'>
                <Key val={"ENTER"} keyType={"specialKey"}/>
                {
                    keys_bottom.map((key,index) => <Key key={index} val={key}/>)
                }
                <Key val={"DELETE"}  keyType={"specialKey"}/>
            </div>
        </div>
    );
}

export default Keyboard;
