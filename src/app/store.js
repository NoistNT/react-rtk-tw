import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/Users/UsersSlice'

export default configureStore({
  reducer: {
    users: userReducer
  }
})
