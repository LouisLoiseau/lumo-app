import * as T from '../actions/courseTypes';

const initialState = {
	// course: {TODO INSERT A REAL COURSE}
	course: { id: 1, name: "Billie" },
	loading: false,
	error: null,
	success: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case T.GET_COURSE_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
				success: null,
			};
		case T.GET_COURSE_SUCCESS:
			return {
				course: { ...action.course },
				loading: false,
				success: true,
				error: null,
			};
		case T.GET_COURSE_ERROR:
			return {
				...state,
				loading: false,
				success: false,
				error: action.error,
			};
		default:
			return {
				...state
			};
	}
}