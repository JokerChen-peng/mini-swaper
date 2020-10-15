import React, {useState} from 'react'
interface SelectDifficultyProps{
    showGame:(width:number,height:number,minCount:number)=>void;
}
export default function SelectDifficulty(props:SelectDifficultyProps){
     const [isShowCustomize,setIsShowCustomize]=useState(false)
     const [width,setWith]=useState(25)
     const [height,setHeight] = useState(25)
     const [mineCount,setMineCount] = useState(99)
    return (
        <div className="app-section select-difficulty">
        <div className={`select-difficulty-container ${isShowCustomize?'show-customize':''}`}>
            <div className="select-difficulty-section">
                <div className ='select-difficulty-item'
                 onClick={()=>props.showGame(8,8,10)}
                >
                    <div>8 x 8</div>
                    <div>10个雷</div>
                </div>
                <div className ='select-difficulty-item'
                 onClick={()=>props.showGame(16,16,40)}
                >
                    <div>16 x 16</div>
                    <div>40个雷</div>
                </div>
                <div className ='select-difficulty-item'
                 onClick={()=>props.showGame(30,16,99)}
                >
                    <div>30 x 16</div>
                    <div>99个雷</div>
                </div>
                <div className ='select-difficulty-item'
                 onClick={()=>setIsShowCustomize(true)}
                >
                    <div>? x ?</div>
                    <div>自定义</div>
                </div>
            </div>
        </div>
    </div>
    )
}