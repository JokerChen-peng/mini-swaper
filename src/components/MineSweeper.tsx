import React from 'react'
import "./MineSweeper.css"
interface MineSweeperProps{
    selectDifficulty:()=>void;
    play:boolean;
    width:number;
    height:number;
    mineCount:number;
}
interface MineSweeperState{
    isEnd:boolean;
    mines:Array<number>;
    openStatus:Array<number>
}
export default function MineSweeper(){
    return (
        <div>hello</div>
    )
}