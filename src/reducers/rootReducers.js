const initState = {
	contacts: [ {
		"fname": "Jaikanth",
		"lname": "Jay",
		"phone": "1234567890",
		"email": "a@a.com"
	}]
	
}

const rootReducer = (state = initState, action) => {
	switch(action.type){
		case 'ADD_CONTACT': 
			var tmp = state.contacts;
			var obj = {
				"fname": action.contact.get("fname"),
				"lname": action.contact.get("lname"),
				"phone": action.contact.get("phone"),
				"email": action.contact.get("email")
			}
			tmp.push(obj);
			return {
				...state,
				contacts: tmp				
			}
		break;
		case 'REMOVE_CONTACT': 
			var tmp = state.contacts.filter( x => x.phone !== action.phone)
			return {
				...state,
				contacts: tmp				
			}
		break;
	} 
	return state;
}

export default rootReducer;