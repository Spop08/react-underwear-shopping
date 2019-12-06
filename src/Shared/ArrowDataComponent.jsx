import React, { Component } from "react";

class ArrowData extends Component {
  render() {
    let width = window.innerWidth;
    if (width > 696) {
      return (
        <div className="text-white text-center my-5 mt-md-3">
          {/* <h5>less than 60 seconds</h5>
          <h5 style={{ "paddingLeft": "4rem" }} className="mb-4">
            <span>Leasing Documents </span>
            <img src="/assets/arrow.svg" className="mx-4" />
            <span> Negotiation Table in docx.</span>
          </h5> */}
        </div>
      );
    } else {
      return (
        <div className="text-white text-center my-5 mt-md-3">
          <h5>Leasing Documents </h5>
          <i
            className="h2 material-icons font-weight-bold"
            style={{ "font-size": "2rem" }}
          >
            arrow_downward
          </i>
          <h5>less than 60 seconds</h5>
          <i
            className="h2 material-icons font-weight-bold"
            style={{ "font-size": "2rem" }}
          >
            arrow_downward
          </i>
          <h5> Negotiation Table in docx.</h5>
        </div>
      );
    }
  }
}

export default ArrowData;
