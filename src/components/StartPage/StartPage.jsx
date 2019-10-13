import React from 'react';
import './StartPage.css';

const id=`022fdac2d6224138b7180f2d7569d4c8`;
const refAu=`https://oauth.yandex.ru/authorize?response_type=token&client_id=${id}`;

function StartPage() {
  return (
    <div className="StartPage">
        <a className="StartButton" href={refAu}>Войти в Яндекс.Диск</a>
    </div>
  );
}

export default StartPage;
