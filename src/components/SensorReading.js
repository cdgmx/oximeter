
import React, { useEffect,useState } from 'react';

const SensorReading = () => {
  const URL = 'ws://192.168.5.171:1880/ws/simple'
  const [webSocket, setWebSocket] = useState(new WebSocket(URL))
  const [socketStatus, setSocketStatus] = useState("disconnected");
  const [data, setData] = useState('');
  useEffect (() => {
    webSocket.onopen = function (event) {
      webSocket.send("Here's some text that the server is urgently awaiting!");
      setSocketStatus("connected");
    };
  }, [])

  useEffect (() => {
    webSocket.onmessage = function (event) {
      console.log(event.data);
      setData(event.data);

    };
  }, [])


    
  return (
    <div>
      <h1>Socket Status</h1>
      <p>{socketStatus}</p>
      <h1>Sensor Reading</h1>
      <p>
        {data}
      </p>
    </div>
  );
};

export default SensorReading;
