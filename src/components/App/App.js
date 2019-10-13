import React, { useState, useEffect } from 'react';
import Main from '../Main/Main';
import StartPage from '../StartPage/StartPage';
import './App.css';

function App() {
    const [token, setToken] = useState("");


    useEffect( () => {
        if(document.location.hash.indexOf(`access_token`) !== -1){
            setToken( /access_token=([^&]+)/.exec(document.location.hash)[1])
        }else if(document.location.hash.indexOf(`error`) !== -1) {
            let desc = /error_description=([^&]+)/.exec(document.location.hash)[1];
            console.log("Ошибка "+desc);
        }else if(document.location.hash===""){
            console.log(`Это начало`);
        }
    }, []);


  return (
    <div className="App">
    {(token==="")?<StartPage/>:<Main token={token}/>}
    </div>
  );
}

export default App;
//
