import React, { Component } from "react";
import Mailbox from "./Mailbox";
import MailDescription from "./MailDescription";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "./container.css";

class Container extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main_container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="mailbox">
            <Mailbox />
          </div>
          <div className="maildescription">
            <MailDescription />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Container;
