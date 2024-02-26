import React from "react";
import BotApiKey from "./BotApiKey";
import WeatherApiKey from "./WeatherApiKey";
import MsgFrequency from "./MsgFrequency"
import DeleteUser from "./DeleteUser";


const AdminPanel = () => {
  return (
    <div className="my-40 mx-72 flex flex-col md:flex-row items-center justify-center">
       <div className="m-4">
        <BotApiKey />
      </div>
      <div className="m-4">
        <WeatherApiKey />
      </div>
      <div className="m-4">
        <MsgFrequency />
      </div>
      <div className="m-4">
        <DeleteUser />
      </div>
    </div>
  );
};

export default AdminPanel;
