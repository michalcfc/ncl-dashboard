import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Conversations } from '../../types/reservations';

export interface ReservationState {
  message: string
  conversations: Conversations[]
}

const initialState: ReservationState = {
  conversations: [],
  message: 'something',
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<string>) {
      const message = action.payload;
      return {
        ...state,
        message,
      };
    },
    fetchData(state, action: PayloadAction<Conversations[]>) {
      const conversations = action.payload;
      console.log(action.payload);
      return {
        ...state,
        conversations,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { sendMessage, fetchData } = reservationsSlice.actions;

export default reservationsSlice.reducer;
