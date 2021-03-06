import React ,{useState}from 'react';
import SelectDifficulty from './components/SelectDifficulty'
import MineSweeper from './components/MineSweeper'
import './App.css';


 function App() {
 const [isShowGame,setIsShowGame] = useState(false);
 const [width,setWidth] = useState(0);
 const [height,setHeight] = useState(0);
 const [mineCount,setmineCount]=useState(0);
 function showGame(width:number,height:number,mineCount:number):void{
   setIsShowGame(true);
   setWidth(width);
   setHeight(height);
   setmineCount(mineCount)
 }
 function selectDifficulty():void{
   setIsShowGame(false);
 }
  return (
    <div className="app">
      <div className={`app-main ${isShowGame?'show-game':''}`}>
           <SelectDifficulty
           showGame ={showGame}
             ></SelectDifficulty>
           <MineSweeper
            selectDifficulty ={selectDifficulty}
            play = {isShowGame}
            width ={width}
            height = {height}
            mineCount = {mineCount}
           
           />
            
      </div>
    </div>
  );
}

export default App;
