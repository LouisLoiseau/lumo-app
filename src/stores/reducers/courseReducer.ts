import * as T from '../actions/courseTypes';

const initialState = {
	course: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case T.SET_COURSE:
			return {
				course: action.data,
			};
		default:
			return {
				...state
			};
	}
}