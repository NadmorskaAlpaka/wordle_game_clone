import React from 'react';
import Letter from './Letter';

const Board = () => {
    return (
        <div className='board'>
            <div className='row'>
                <Letter letterPosition={0} attemptWord={0}/>
                <Letter letterPosition={1} attemptWord={0}/>
                <Letter letterPosition={2} attemptWord={0}/>
                <Letter letterPosition={3} attemptWord={0}/>
                <Letter letterPosition={4} attemptWord={0}/>
            </div>
            <div className='row'>
                <Letter letterPosition={0} attemptWord={1}/>
                <Letter letterPosition={1} attemptWord={1}/>
                <Letter letterPosition={2} attemptWord={1}/>
                <Letter letterPosition={3} attemptWord={1}/>
                <Letter letterPosition={4} attemptWord={1}/>
            </div>
            <div className='row'>
                <Letter letterPosition={0} attemptWord={2}/>
                <Letter letterPosition={1} attemptWord={2}/>
                <Letter letterPosition={2} attemptWord={2}/>
                <Letter letterPosition={3} attemptWord={2}/>
                <Letter letterPosition={4} attemptWord={2}/>
            </div>
            <div className='row'>
                <Letter letterPosition={0} attemptWord={3}/>
                <Letter letterPosition={1} attemptWord={3}/>
                <Letter letterPosition={2} attemptWord={3}/>
                <Letter letterPosition={3} attemptWord={3}/>
                <Letter letterPosition={4} attemptWord={3}/>
            </div>
            <div className='row'>
                <Letter letterPosition={0} attemptWord={4}/>
                <Letter letterPosition={1} attemptWord={4}/>
                <Letter letterPosition={2} attemptWord={4}/>
                <Letter letterPosition={3} attemptWord={4}/>
                <Letter letterPosition={4} attemptWord={4}/>
            </div>
            <div className='row'>
                <Letter letterPosition={0} attemptWord={5}/>
                <Letter letterPosition={1} attemptWord={5}/>
                <Letter letterPosition={2} attemptWord={5}/>
                <Letter letterPosition={3} attemptWord={5}/>
                <Letter letterPosition={4} attemptWord={5}/>
            </div>
        </div>
    );
}

export default Board;
