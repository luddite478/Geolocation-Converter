export default dispatch => ({
    logIn: key => {
      // We just check for length here for simplicity
        if(key.length > 10){
          dispatch({type: 'LOGIN', payload: key})
        }
      }
})
