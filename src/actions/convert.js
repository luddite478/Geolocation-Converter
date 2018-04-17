const googleKey = require('../../config').googleKey

export default dispatch => ({
    convert: (appState) => {
      if(appState.lat === '' && appState.lng === ''){
        let encodedAddress = encodeURI(appState.address)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleKey}`)
          .then(res => res.json())
          .then(res => {
            if(res.status === 'OK'){
              const coords = res.results[0].geometry.location;
              dispatch({type: 'CONVERT_ADDRESS', payload: coords});
            } else {
              alert(res.error_message)
            }
          })
          .catch(e => console.log(e))
      } else {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${appState.lat},${appState.lng}&key=${googleKey}`)
          .then(res => res.json())
          .then(res => {
            if(res.status === 'OK'){
              const address = res.results[0].formatted_address;
              dispatch({type: 'CONVERT_COORDS', payload: address});
            } else {
              alert(res.error_message)
            }
          })
          .catch(e => console.log(e))
      }
    }
})
