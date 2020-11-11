import React, { Component } from "react";
import axios from "axios";

class World extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
      this.setState({ data: response.data });
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-primary table-hover table-dark ">
            <thead className="table-danger">
              <tr>
                <td>Country</td>
                <td></td>
                <td>Total Cases</td>
                <td>Recovery</td>
                <td>Deaths</td>
              </tr>
            </thead>
            <tbody>
              {
              this.state.data.map((itm, ky) => {
                return (
                  <tr>
                    <td>{itm.country}</td>
                    <td>
                      <img style={{width:'50px'},{height:'50px'}} src={itm.countryInfo.flag}></img>
                    </td>
                    <td>{itm.cases}</td>
                    <td>{itm.recovered}</td>
                    <td>{itm.deaths}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default World;
