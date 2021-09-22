const appState = {
  customers: [],
  products: [],
  orders: []
};

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return { ...state, customers: action.data };
    case "CREATE_CUSTOMER":
      return { ...state, customers: [...state.customers, action.data] };
    default:
      return state;
  }
};


const tokenState = {
  loggedIn: false,
  userId: null
};

export const tokenReducer = (state = tokenState, action) => {
  switch(action.type) {
    case "LOGIN":
      return { loggedIn: true, userId: action.data };
    case "LOGOUT":
      return { loggedIn: false, userId: null };
    default:
      return state;
  }
};