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
    changeInboxView(state, action: PayloadAction<string>) {
      const inboxOwner = action.payload;
      return {
        ...state,
        conversations: {
          ...state.conversations,
          inboxOwner,
        },
      };
    },
    fetchData(state, action: PayloadAction<Conversations[]>) {
      const conversations = action.payload;
      return {
        ...state,
        conversations,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeInboxView, sendMessage, fetchData } = reservationsSlice.actions;

export default reservationsSlice.reducer;
