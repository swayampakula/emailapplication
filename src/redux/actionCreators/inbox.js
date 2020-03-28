import * as actionTypes from "../actionTypes";

export const getInboxMails = item => async dispatch => {
  await fetch("http://localhost:3001/data/inbox.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({
        type: actionTypes.GETINBOXMAILS,
        payload: { data, item }
      });
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const getSpamMails = item => async dispatch => {
  await fetch("http://localhost:3001/data/spam.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({
        type: actionTypes.GETSPAMMAILS,
        payload: { data, item }
      });
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const getdeletedMails = item => async dispatch => {
  await fetch("http://localhost:3001/data/delete.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({
        type: actionTypes.GETDELETEDMAILS,
        payload: { data, item }
      });
    })
    .catch(error => {
      console.log(error.message);
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
