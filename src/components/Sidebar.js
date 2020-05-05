import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getInboxMails,
  getSpamMails,
  getdeletedMails,
} from "../redux/actionCreators/inbox";
import "./sidebar.css";
import { Link, withRouter } from "react-router-dom";
import store from "../redux/store";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cursorpointer">
          <div className="folders">Folders</div>
          <div
            style={{
              color: this.props.activeItem === "inbox" ? "blue" : "black",
            }}
            onClick={() => {
              this.props.getInboxMails("inbox");
              this.props.history.push("/inbox");
            }}
          >
            Inbox
          </div>
          <div
            style={{
              color: this.props.activeItem === "spam" ? "blue" : "black",
            }}
            onClick={() => {
              this.props.getSpamMails("spam");
              this.props.history.push("/spam");
            }}
          >
            Spam
          </div>
          <div
            style={{
              color: this.props.activeItem === "delete" ? "blue" : "black",
            }}
            onClick={() => {
              this.props.getdeletedMails("delete");
              this.props.history.push("/delete");
            }}
          >
            Deleted Items
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  activeItem: state.inboxMails.activeItem,
});

export default withRouter(
  connect(mapStateToProps, {
    getInboxMails,
    getSpamMails,
    getdeletedMails,
  })(Sidebar)
);
