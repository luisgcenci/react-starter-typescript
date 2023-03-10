import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface authState {
	authorized: boolean;
}

const initialState: authState = {
	authorized: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateAuthorized(state, action: PayloadAction<boolean>) {
			const st = state;
			st.authorized = action.payload;
		},
		clearAuthStates(state) {
			const st = state;
			st.authorized = false;
		},
	},
});

export const { updateAuthorized, clearAuthStates } = authSlice.actions;

export default authSlice.reducer;
