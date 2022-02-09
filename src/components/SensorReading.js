import React, { useEffect, useState } from "react";

const SensorReading = () => {
  const URL = "ws://192.168.5.171:1880/ws/simple";
  const [webSocket, setWebSocket] = useState(null);
  const [socketStatus, setSocketStatus] = useState("disconnected");
  const [data, setData] = useState("");

  useEffect(() => {
    setWebSocket(new WebSocket(URL));
  }, []);

  useEffect(() => {
    if (webSocket) {
    webSocket.onopen = function (event) {
      console.log("WebSocket open");
      webSocket.send("Here's some text that the server is urgently awaiting!");
      setSocketStatus("connected");
    };
    webSocket.onmessage = function (event) {
      console.log(event);
      webSocket.send("from client");
      setData(event.data);
    };
    webSocket.onclose = function (event) {
      console.log("Socket is closed. Reconnect will be attempted in 1 second.");
      setTimeout(function() {
        setWebSocket(new WebSocket(URL));
      }, 1000);
      setSocketStatus("disconnected");
    }}else{
      console.log("WebSocket is null");
    }
  }, [webSocket]);

  return (
    <div>
      <h1>Socket Status</h1>
      <p>{socketStatus}</p>
      <h1>Sensor Reading</h1>
      <p>{data}</p>
    </div>
  );
};

export default SensorReading;
