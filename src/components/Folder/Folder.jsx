import React from 'react';
import '../Screen/Screen.css';
import FileImg from './Folder.svg';

function Folder({item, handlClick}) {
  return (
    <li className="item Folder" onClick={()=> handlClick(item.path)} >
        <img src={FileImg} alt={item}/>
    <p className="itemTitle">{item.name}</p>
    </li>
  )
}

export default Folder;
