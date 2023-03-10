import reducer, {
	authState,
	clearAuthStates,
	updateAuthorized,
} from '../authSlice';

test('should return the initial state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual({
		authorized: false,
	});
});

test('should update authorized', () => {
	const previousState: authState = { authorized: false };

	expect(reducer(previousState, updateAuthorized(true))).toEqual({
		authorized: true,
	});
});

test('should clear states', () => {
	const previousState: authState = { authorized: false };

	expect(reducer(previousState, clearAuthStates())).toEqual({
		authorized: false,
	});
});
