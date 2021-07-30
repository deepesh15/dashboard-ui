import React, { useState } from "react";
// import UserRow from "./UserRow";
import SearchIcon from "../svg/search.svg";
import NextIcon from "../svg/next.svg";
import PrevIcon from "../svg/prev.svg";
const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [pages, setPages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  //go to next page
  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  //go to previous page
  const prevPage = () => {
    setCurrentPage((page) => page - 1);
  };
  //change page
  const changePage = (e) => {
    const pageNum = Number(e.target.textContent);
    setCurrentPage(pageNum);
  };
  //get page data
  const getPageData = () => {
    const startInd = currentPage * dataLimit - dataLimit;
    const endInd = startInd + dataLimit;
    return data.slice(startInd, endInd);
  };
  //get page group
  const getPageGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, ind) => start + ind + 1);
  };
  console.log(data);
  //search for user
//   const search = (e) => {
//     console.log(e);
//     let searchValue = document.getElementById("table-search").value.toLowerCase();
//     console.log(data);
//     let filter = (item) => {
//       for (let key in item) {
//         if (
//           (key === "full_name" ||
//             key === "email" ||
//             key === "role" ||
//             key === "gender") &&
//           item[key].toString().toLowerCase().indexOf(searchValue) >=
//             0 /*IE doesn't support 'includes' method*/
//         ) {
//           return item;
//         }
//       }
//     };
//     let result = data.filter(filter);
//     console.log(result);
//     let pageNum = Math.ceil(result.length / dataLimit);
//     if (currentPage > pageNum) {
//       setCurrentPage(0);
//     }
//     let num = pageLimit * currentPage;
//     let start = num < result.length ? num : 0;

//     this.setState({
//       currentData: data,
//       pageData: data.slice(start, start + this.props.perPage),
//       pageCount: pageNum,
//     });
//   };
  return (
    <div>
      <div className="table-options">
        <div className="search-input">
          <input
            type="text"
            name=""
            id="table-search"
            placeholder="Search in table..."
          />
          {/* <span className="search-icon" onClick={search}> */}
          <span className="search-icon" >
            <img src={SearchIcon} alt="search" />
          </span>
        </div>
        <button>Filter</button>
        <button>+ Add</button>
      </div>
      <div className="dataContainer">
        <table className="table-styled">
          <tbody>
              {/* {typeof getPageData()} */}
            {getPageData().map((user, idx) => (
              <tr >
                <td>
                  <img className="table-img" src={user.image} alt="user" />
                </td>
                <td>{user.first_name+" "+user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
              </tr>
            ))}
            {/* <UserRow
                key={idx}
                UserImg={user.image}
                UserName={user.full_name}
                UserEmail={user.email}
                UserGender={user.gender}
                UserRole={user.role}
              /> */}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        {/* previous button */}
        <button
          onClick={prevPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          <img src={PrevIcon} alt="prev"/>
        </button>

        {/* show page numbers */}
        {getPageGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={nextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          <img src={NextIcon} alt="next"/>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
