import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import taskReducer from './features/task/taskSlice'
import userReducer from './features/user/userSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch