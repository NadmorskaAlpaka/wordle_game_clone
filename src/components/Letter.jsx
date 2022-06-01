import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter( {letterPosition, attemptWord} ){
    const { board } = useContext(AppContext);
    const letter = board[attemptWord][letterPosition];
    return (
        <div className="letter"> { letter } </div>
    )
}

export default Letter;