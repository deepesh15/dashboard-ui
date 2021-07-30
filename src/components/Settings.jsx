import React from "react";
import ProfileCard from "./ProfileCard";
import DashHeader from "./DashHeader";
import SideBoard from "./SideBoard";
import AccountCard from "./AccountCard";
import DeleteCard from "./DeleteCard";
import SecurityCard from "./SecurityCard";
const Settings = () => {
  return (
    <div className="settings-container">
      <SideBoard />
      <div className="settings-body">
        <DashHeader pageTitle="Settings" />
        <div className="settings-content">
          <div className="settings-section-1">
            <ProfileCard UserImg="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
          </div>
          <div className="settings-section-2">
            <AccountCard UserMail="suryawigunaa@gmail.com" UserPassword="12345678"/>
            <SecurityCard />
            <DeleteCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
