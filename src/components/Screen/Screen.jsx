import React from 'react';
import File from '../File/File'
import Folder from '../Folder/Folder'
import './Screen.css';
function Screen({data, func}) {
    let lastSymbol=data.path.lastIndexOf('/');
    if(lastSymbol===5)lastSymbol++;
    let backPath=data.path.slice(0, lastSymbol);
    let title=(data.path.length > 6)?data.path.slice(lastSymbol):"Файлы";
  return (
     <div className="Screen">
        <h1 className="Title">{title}</h1>
        {(data.path.length> 6)? <div className="BackButton" onClick={()=> func(backPath)}
            key={`File-${0}`}>
            {"← Назад"}
        </div>:null}
        <ul className="ScrinList">

            {data.items.map((item, i)=>{
                return (item.type !== "dir")
                ?<File key={`File-${i}`} item={item}/>
                :<Folder key={`Folder-${i}`} item={item} handlClick={func}/>})}
        </ul>
    </div>
  )
}

export default Screen;
