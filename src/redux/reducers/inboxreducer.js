import * as actionTypes from "../actionTypes";
const inboxdata = require("../../data/inbox.json");
const spamdata = require("../../data/spam.json");
const deletedata = require("../../data/delete.json");

const initialState = {
  data: inboxdata,
  inboxdata: inboxdata,
  spamdata: spamdata,
  deletedata: deletedata,
  activeItem: "inbox",
  selectedItem: null
};

export const inboxMails = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actionTypes.GETINBOXMAILS:
      return {
        ...state,
        data: state.inboxdata,
        activeItem: payload.item
      };

    case actionTypes.GETSPAMMAILS:
      return {
        ...state,
        data: state.spamdata,
        activeItem: payload.item
      };

    case actionTypes.GETDELETEDMAILS:
      return {
        ...state,
        data: state.deletedata,
        activeItem: payload.item
      };

    case actionTypes.SELECTEDMAIL:
      let mails = state.data.slice();
      let newmail = {
        mId: payload.mId,
        unread: false,
        subject: payload.subject,
        content: payload.content
      };
      let getIndex = mails.map((mail, index) => mail.mId).indexOf(payload.mId);
      mails[getIndex] = newmail;
      if (state.activeItem === "inbox") {
        state.inboxdata = mails;
      } else if (state.activeItem === "spam") {
        state.spamdata = mails;
      } else {
        state.deletedata = mails;
      }
      return {
        ...state,
        selectedMail: payload,
        data: mails
      };

    case actionTypes.DELETEMAIL:
      // let deletedata = state.deletedata.slice();
      return {
        ...state,
        inboxdata: state.inboxdata.filter(mail => mail.mId !== payload.mId),
        data: state.data.filter(mail => mail.mId !== payload.mId),
        deletedata: [...state.deletedata, payload]
      };

    case actionTypes.FLAGMAIL:
      let flagmails = state.data.slice();
      let newflagmails = {
        mId: payload.mId,
        unread: payload.unread,
        subject: payload.subject,
        content: payload.content,
        flag: !payload.flag
      };
      let getIndexFlag = flagmails
        .map((mail, index) => mail.mId)
        .indexOf(payload.mId);
      flagmails[getIndexFlag] = newflagmails;
      if (state.activeItem === "inbox") {
        state.inboxdata = flagmails;
      } else if (state.activeItem === "spam") {
        state.spamdata = flagmails;
      } else {
        state.deletedata = flagmails;
      }
      return {
        ...state,
        data: flagmails
      };

    default:
      return state;
  }
};
