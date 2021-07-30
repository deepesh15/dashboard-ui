import React from "react";
import { NavLink as Link } from "react-router-dom";
import { ReactComponent as DashIcon } from "../svg/Dash.svg";
import { ReactComponent as SettingIcon } from "../svg/Settings.svg";
import { ReactComponent as TransactionIcon } from "../svg/Tag.svg";
import { ReactComponent as UserIcon } from "../svg/User.svg";
import { ReactComponent as ScheduleIcon } from "../svg/Calendar.svg";

const SideBoard = () => {
  return (
    <div className="side-board">
      <div>
        <h1>Dash.</h1>
      </div>
      <div className="side-options">
        <ul>
          <li>
            <DashIcon />
            <Link
              to="/dashboard"
              style={{ color: "white" }}
              activeStyle={{ "font-weight": "bolder" }}
            >
              <div className="page-title">Dashboard</div>
            </Link>
          </li>
          <li>
            <TransactionIcon />
            <div className="page-title">Transactions</div>
          </li>
          <li>
            <ScheduleIcon />
            <div className="page-title">Schedules</div>
          </li>
          <li>
            <UserIcon />
            <Link
              to="/users"
              style={{ color: "white" }}
              activeStyle={{ "font-weight": "bolder" }}
            >
              <div className="page-title">Users</div>
            </Link>
          </li>
          <li>
            <SettingIcon />
            <Link
              to="/settings"
              style={{ color: "white" }}
              activeStyle={{ "font-weight": "bolder" }}
            >
              <div className="page-title">Settings</div>
            </Link>
          </li>
        </ul>
        <div className="user-options">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default SideBoard;
