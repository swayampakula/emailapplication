import React, { Component } from "react";
import { connect } from "react-redux";
import "./maildescription.css";
import store from "../redux/store";

class MailDescription extends Component {
  state = {};

  //How does purge work
  // componentDidMount() {
  //   window.onbeforeunload = () => {
  //     store().persistor.purge();
  //   };
  // }

  render() {
    console.log(this.props.selectedMail);
    return this.props.selectedMail ? (
      <div className="maildesc">
        <div className="idcumsub">
          <strong>
            {this.props.selectedMail.mId} - {this.props.selectedMail.subject}
          </strong>
        </div>

        <div>{this.props.selectedMail.content}</div>
      </div>
    ) : (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Please select a mail
      </p>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMail: state.inboxMails.selectedMail,
});

export default connect(mapStateToProps)(MailDescription);
