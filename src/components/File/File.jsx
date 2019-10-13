import React from 'react';
import '../Screen/Screen.css';
import FileImg from './File.svg'
function File({item}) {
  return (
    <li className=" item File"  >
        <img src={FileImg} alt={item}/>
    <p className="itemTitle">{item.name}</p>
    </li>
  )
}

export default File;
