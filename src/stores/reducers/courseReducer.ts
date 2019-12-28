import * as T from '../actions/courseTypes';

const initialState = {
	course: null,
	theme: 'default',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case T.SET_COURSE:
			return Object.assign({}, state, {
        course: action.data,
      });
		case T.SET_THEME:
			return Object.assign({}, state, {
        theme: action.data,
      });
		default:
			return {
				...state
			};
	}
}