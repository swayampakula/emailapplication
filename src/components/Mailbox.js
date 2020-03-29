import React, { Component } from "react";
import { connect } from "react-redux";
import {
  selectedMail,
  deleteMail,
  flagMail
} from "../redux/actionCreators/inbox";
import "./mailbox.css";

class Mailbox extends Component {
  state = {
    hoverindex: -1,
    filterType: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ filterType: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="mailcumfilter">
          <span className="mailtext">
            {this.props.activeItem.toUpperCase()} MAILS
          </span>
          <select className="select" onChange={this.handleChange}>
            <option value="allmails">Please select</option>
            <option value="flagged">Flagged</option>
            <option value="tome">To me</option>
            <option value="attachments">Attachements</option>
          </select>
        </div>
        {this.props.data.filter(mail =>
          this.state.filterType === "flagged" ? mail.flag : true
        ).length > 0 ? (
          this.props.data
            .filter(mail =>
              this.state.filterType === "flagged" ? mail.flag : true
            )
            .map((mail, index) => {
              return (
                <div
                  className="mails"
                  key={index}
                  style={{ borderLeft: mail.unread && "3px solid blue" }}
                  onMouseOver={() => this.setState({ hoverindex: index })}
                  onMouseLeave={() => this.setState({ hoverindex: -1 })}
                  onClick={() => this.props.selectedMail(mail)}
                >
                  <strong>
                    {mail.mId}
                    {this.state.hoverindex === index && (
                      <span className="delflag">
                        {this.props.activeItem !== "delete" && (
                          <button
                            className="del"
                            onClick={e => {
                              this.props.deleteMail(mail);
                              e.stopPropagation();
                            }}
                          >
                            Del
                          </button>
                        )}

                        <button
                          className="flag"
                          onClick={e => {
                            this.props.flagMail(mail);
                            e.stopPropagation();
                          }}
                        >
                          {mail.flag ? "Flagged" : "Flag"}
                        </button>
                      </span>
                    )}
                  </strong>
                  <p style={{ color: mail.unread && "blue", margin: 0 }}>
                    {mail.subject}
                  </p>

                  <small>
                    {mail.content && mail.content.substring(0, 100)}...
                  </small>
                </div>
              );
            })
        ) : (
          <div style={{ textAlign: "center", color: "red" }}>
            {" "}
            No flagged items to display{" "}
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.inboxMails.data,
  activeItem: state.inboxMails.activeItem
});

export default connect(mapStateToProps, {
  selectedMail,
  deleteMail,
  flagMail
})(Mailbox);
