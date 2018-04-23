const initialValue = {
  address: '',
  lat: '',
  lng: '',
  key: '',
  loggedIn: false
}

export default function todos(state = initialValue, action) {
  if(action.type === 'LOGIN'){
    return {
      ...state,
      loggedIn: true,
      key: action.payload
    }
  } else if(action.type === 'UPDATE_ADDRESS'){
    return {
      ...state,
      address: action.payload
    }
  } else if(action.type === 'UPDATE_LAT'){
    return {
      ...state,
      lat: action.payload,
    }
  } else if(action.type === 'UPDATE_LNG'){
    return {
      ...state,
      lng: action.payload,
    }
  } else if(action.type === 'CONVERT_ADDRESS'){
    return {
      ...state,
      lng: action.payload.lng,
      lat: action.payload.lat
    }
  } else if(action.type === 'CONVERT_COORDS'){
    return {
      ...state,
      address: action.payload
    }
  } else {
      return state
  }
}
