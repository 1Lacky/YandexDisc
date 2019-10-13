import React,{ useState, useEffect } from 'react';
import Screen from '../Screen/Screen';
import Preloader from '../Preloader/Preloader';
function Main({token}) {
const [data, setData] = useState([]);
const [position, setPosition] = useState("/");

const handlClick=(adress)=>{
    adress=adress.slice(5);
    setPosition(adress);
}

async function download(){
    let url=`https://cloud-api.yandex.net/v1/disk/resources?path=${position}&limit=50`;
    let response = await fetch(url,{
            headers: {
                Authorization : "OAuth "+ token,
                'Accept': 'application/json',
                "Content-Type":'application/json'
            }});
    if (response.ok) {
    let json = await response.json();
    console.log(json._embedded);
    setData(json._embedded);
    } else
        alert("Ошибка HTTP: " + response.status);
}

    useEffect( ()=>{
        download();
        document.location.hash = position;
    },[position]);

  return (
    <div className="Main">
        {(data.length === 0)?<Preloader/>:<Screen data={data} func={handlClick}/>}
    </div>
  )
}
//https://cors-anywhere.herokuapp.com/
export default Main;
