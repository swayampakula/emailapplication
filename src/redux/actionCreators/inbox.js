import * as actionTypes from "../actionTypes";
const inboxdata = require("../../data/inbox.json");
const spamdata = require("../../data/spam.json");
const deletedata = require("../../data/delete.json");

export const getInboxMails = item => async dispatch => {
  dispatch({
    type: actionTypes.GETINBOXMAILS,
    payload: { inboxdata, item }
  });
};

export const getSpamMails = item => async dispatch => {
  dispatch({
    type: actionTypes.GETSPAMMAILS,
    payload: { spamdata, item }
  });
};

export const getdeletedMails = item => async dispatch => {
  dispatch({
    type: actionTypes.GETDELETEDMAILS,
    payload: { deletedata, item }
  });
};

export const selectedMail = mail => async dispatch => {
  dispatch({
    type: actionTypes.SELECTEDMAIL,
    payload: mail
  });
};

export const deleteMail = mail => async dispatch => {
  dispatch({
    type: actionTypes.DELETEMAIL,
    payload: mail
  });
};

export const flagMail = mail => async dispatch => {
  dispatch({
    type: actionTypes.FLAGMAIL,
    payload: mail
  });
};
