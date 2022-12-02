import React, { useState } from "react";
import profileImg from "./../assets/profile.jpg";
import { RiArrowUpDownFill } from "react-icons/ri";

const TableComponent = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [order, setOrder] = useState("DSC");

  // sort name function
  const sortNameHandler = () => {
    if (order === "DSC") {
      const sorted = [...tableData].sort((a, b) =>
        a.person.name.toLowerCase() > b.person.name.toLowerCase() ? 1 : -1
      );

      setTableData(sorted);
      setOrder("ASC");
    } else if (order === "ASC") {
      const sorted = [...tableData].sort((a, b) =>
        a.person.name.toLowerCase() < b.person.name.toLowerCase() ? 1 : -1
      );

      setTableData(sorted);
      setOrder("DSC");
    }
  };

  // sort date function
  const sortDateHandler = () => {
    if (order === "DSC") {
      const sorted = [...tableData].sort((a, b) => {
        const dateA = a.joiningDate;
        const dateB = b.joiningDate;

        const newDateA = dateA.split("/");
        const newDateB = dateB.split("/");

        const d1 = new Date(Date.UTC(newDateA[2], newDateA[1], newDateA[0]));
        const d2 = new Date(Date.UTC(newDateB[2], newDateB[1], newDateB[0]));

        return d1 > d2 ? 1 : -1;
      });

      setTableData(sorted);
      setOrder("ASC");
    } else if (order === "ASC") {
      const sorted = [...tableData].sort((a, b) => {
        const dateA = a.joiningDate;
        const dateB = b.joiningDate;

        const newDateA = dateA.split("/");
        const newDateB = dateB.split("/");

        const d1 = new Date(Date.UTC(newDateA[2], newDateA[1], newDateA[0]));
        const d2 = new Date(Date.UTC(newDateB[2], newDateB[1], newDateB[0]));

        return d1 < d2 ? 1 : -1;
      });

      setTableData(sorted);
      setOrder("DSC");
    }
  };

  // sort by column name function
  const sortHandler = col => {
    if (order === "DSC") {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );

      setTableData(sorted);
      setOrder("ASC");
    } else if (order === "ASC") {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );

      setTableData(sorted);
      setOrder("DSC");
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
            <RiArrowUpDownFill
              onClick={sortNameHandler}
              className="arrow"
            ></RiArrowUpDownFill>
          </th>
          <th>
            City
            <RiArrowUpDownFill
              onClick={() => sortHandler("city")}
              className="arrow"
            ></RiArrowUpDownFill>
          </th>
          <th>
            Email Address
            <RiArrowUpDownFill
              onClick={() => sortHandler("email")}
              className="arrow"
            ></RiArrowUpDownFill>
          </th>
          <th>
            Joining Date
            <RiArrowUpDownFill
              onClick={sortDateHandler}
              className="arrow"
            ></RiArrowUpDownFill>
          </th>
          <th>
            Role
            <RiArrowUpDownFill
              onClick={() => sortHandler("role")}
              className="arrow"
            ></RiArrowUpDownFill>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td>
              <img src={profileImg} alt="profile" />
              <span>{data.person.name}</span>
            </td>
            <td>{data.city}</td>
            <td>{data.email}</td>
            <td>{data.joiningDate}</td>
            <td>{data.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
