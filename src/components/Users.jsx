import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBoard from "./SideBoard";
import DashHeader from "./DashHeader";
import Pagination from './Pagination';
const Users = () => {
  const URL = "https://my.api.mockaroo.com/records.json?key=da5634d0";
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  console.log(data);
  return (
    <div className="user-container">
      <SideBoard />
      <div className="user">
        <DashHeader pageTitle="Users" />

        <div className="user-body Card">
          <div className="card-header">
            <h3>User Records</h3>

          </div>
          <div className="user-list">
            <Pagination data={data} pageLimit={4} dataLimit={8}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Users;
