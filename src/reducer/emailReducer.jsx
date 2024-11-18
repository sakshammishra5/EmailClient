
export const initialState = {
  emails: [],
  selectedEmailId: null,
  selectedMailDetails:null,
  emailBodyContent: null,
  mailSelected: false,
  filteredEmails: [],
  currentPage: 1,
};

export const actions = {
  SET_EMAILS: 'SET_EMAILS',
  SET_SELECTED_EMAIL_ID: 'SET_SELECTED_EMAIL_ID',
  SET_EMAIL_BODY: 'SET_EMAIL_BODY',
  SET_MAIL_SELECTED: 'SET_MAIL_SELECTED',
  SET_FILTERED_EMAILS: 'SET_FILTERED_EMAILS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_SELECTED_MAIL_DETAILS:'SET_SELECTED_MAIL_DETAILS'
}



export const emailReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAILS':
      return { ...state, emails: action.payload }

    case 'SET_SELECTED_EMAIL_ID':
    return { ...state, selectedEmailId:action.payload }

    case 'SET_EMAIL_BODY':
    return {...state,emailBodyContent:action.payload}

    case 'SET_MAIL_SELECTED':
    return {...state,mailSelected:action.payload}

    case 'SET_FILTERED_EMAILS':
    return {...state,filteredEmails:action.payload}

    case 'SET_CURRENT_PAGE':
      return {...state,currentPage:action.payload}

      case 'SET_SELECTED_MAIL_DETAILS':
        return {...state,selectedMailDetails:action.payload}

    default:
    return state
  }
}