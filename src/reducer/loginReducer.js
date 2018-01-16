export default function loginReducer(state = {}, action) {
	switch (action.type) {
		case 'Login':{		
			action.user.test = 'Hello World'
			const newState = Object.assign(...state, action.user);
			console.log('login reducer message'+newState)
			return newState
		}
		case 'UserProfile': {
			return state.user
		}
		default:{
			return state
		}
	}
}	