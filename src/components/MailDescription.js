import React, { Component } from "react";
import { connect } from "react-redux";
import "./maildescription.css";

class MailDescription extends Component {
  state = {};
  render() {
    console.log(this.props.selectedMail);
    return this.props.selectedMail ? (
      <div className="maildescription">
        <div>{this.props.selectedMail.subject}</div>
        <div>{this.props.selectedMail.mId}</div>
        <div>{this.props.selectedMail.content}</div>
      </div>
    ) : (
      <p
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        Please select a mail
      </p>
    );
  }
}

const mapStateToProps = state => ({
  selectedMail: state.inboxMails.selectedMail
});

export default connect(mapStateToProps)(MailDescription);
