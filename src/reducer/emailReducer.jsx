
export const initialState = {
  emails: [],
  selectedEmailId: null,
  emailBodyContent: null,
  mailSelected: false,
  filteredEmails: [],
};

export const actions = {
  SET_EMAILS: 'SET_EMAILS',
  SET_SELECTED_EMAIL_ID: 'SET_SELECTED_EMAIL_ID',
  SET_EMAIL_BODY: 'SET_EMAIL_BODY',
  SET_MAIL_SELECTED: 'SET_MAIL_SELECTED',
  SET_FILTERED_EMAILS: 'SET_FILTERED_EMAILS',
}

export const emailReducer = (state, action) => {
  switch (action.type) {
    case action.SET_EMAILS:
      return { ...state, emails: action.payload }

    case (action.SET_SELECTED_EMAIL_ID):
    return { ...state, selectedEmailId:action.payload }

    case (action.SET_EMAIL_BODY):
    return {...state,emailBodyContent:action.payload}

    case (action.SET_MAIL_SELECTED):
    return {...state,mailSelected:action.payload}

    case (action.SET_FILTERED_EMAILS):
    return {...state,filteredEmails:action.payload}

    default:
    return state
  }
}