import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
//how is the e working in jsx
const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      Overview
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <table className="overview-table">
        <tr>
          <td>Continent: </td>
          {currentDisplay.continents.map((e) => (
            <td>{e}</td>
          ))}
        </tr>
        <tr>
          <td> Borders:</td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}, `;
                  }
                })
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td> Capitol: </td>
          {currentDisplay.capital.map((e) => (
            <td>{e}</td>
          ))}
        </tr>
        <tr>
          <td> Languages: </td>
          {Object.values(currentDisplay.languages).map((e, i) => {
            return <td key={i}>{e}</td>;
          })}
        </tr>
        <tr>
          <td> Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Independent: </td>
          <td>{currentDisplay.independent ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Landlocked: </td>
          <td>{currentDisplay.landlocked ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Drive on the: </td>
          <td>{currentDisplay.car.side}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
