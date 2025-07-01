// import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

type DraftUser = Pick<IUser, "name">;

const initialState: InitialState = {
  users: [{
    id:'1234',
    name: 'Sadaf'
  },{
    id:'7465',
    name: 'Sayan'
  }],
};

const createUser = (userData: DraftUser): IUser => {
  return {
    id: nanoid(),
    ...userData,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((task) => task.id !== action.payload);
    },
  },
});

// export const selectUsers = (state: RootState) => {
//   return state.user.users;
// };

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
