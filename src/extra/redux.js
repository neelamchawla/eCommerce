import React from 'react'

const userReducer = (currentState, action) => {
  switch (action.type) {
      case 'SET_CURRENT_USER':
          return {
              ...currentState,
              currentUser: action.payload
            };
        default:
            return currentState;
    }
}

export default userReducer

// output => { currentUser: {...} }
