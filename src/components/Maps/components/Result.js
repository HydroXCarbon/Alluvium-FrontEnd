import React, { useState, useEffect } from 'react';
import Style from '../../../Pages/Map/Maps.module.css';
import ResultCard from './ResultCard';
import { result } from './Api';

function Result() {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (result) {
      console.log('push result to data');
      setData((prevData) => [...prevData, result[0]]);
    }
    if(data[data.length - 1] === data[data.length - 2]) {
      data.pop()
    }
    console.log('result', result);
    console.log('data', data);
  }, [result]);

  const first10Items = data;

  if (first10Items.length === 0) {
    return (
      <div className={Style.resultBlock}>
        <h1 className={Style.title}>Ranking Score</h1>
        <div className={Style.resultCard}>
          <div className={Style.noHistoryCard}>
            <p>No history available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={Style.resultBlock}>
      <h1 className={Style.title}>Ranking Score</h1>
      {first10Items.map((item, index) => (
        <div key={index} className={Style.resultCard}>
          {item && item.score !== undefined ? (
            <ResultCard data={item} />
          ) : <></>}
        </div>
      ))}
    </div>
  );
}

export default Result;
