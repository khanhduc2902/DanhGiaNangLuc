const initialState = {
    count: 'select'
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'user':
        return {count: state.count = 'user' };
      case 'company':
        return {count: state.count = 'company'};
      default:
        return state;
    }
  };
  
  export default reducers;