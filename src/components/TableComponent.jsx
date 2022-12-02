import React from "react";
import profileImg from "./../assets/profile-img.jpg";
import { RiArrowUpDownFill } from "react-icons/ri";

const TableComponent = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
            <RiArrowUpDownFill
              onClick={() => window.alert("sort")}
              className="arrow"
            ></RiArrowUpDownFill>
          </th>
          <th>
            City
            <RiArrowUpDownFill className="arrow"></RiArrowUpDownFill>
          </th>
          <th>
            Email Address
            <RiArrowUpDownFill className="arrow"></RiArrowUpDownFill>
          </th>
          <th>
            Joining Date
            <RiArrowUpDownFill className="arrow"></RiArrowUpDownFill>
          </th>
          <th>
            Role
            <RiArrowUpDownFill className="arrow"></RiArrowUpDownFill>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <tr key={index}>
            <td>
              <img src={profileImg} alt="profile" />
              <span>{person.person.name}</span>
            </td>
            <td>{person.city}</td>
            <td>{person.email}</td>
            <td>{person.joiningDate}</td>
            <td>{person.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
