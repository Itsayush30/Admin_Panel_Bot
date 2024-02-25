import React from "react";
import ApiKey from "./ApiKey";
import MsgFrequency from "./MsgFrequency";
import DeleteUser from "./DeleteUser";

const AdminPanel = () => {
  return (
    <div className="my-40 mx-96 flex flex-col md:flex-row items-center justify-center">
      <div className="m-4">
        <ApiKey />
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
