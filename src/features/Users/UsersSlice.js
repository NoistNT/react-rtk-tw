import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './UsersHandler'

const initialState = {
  users: [],
  isLoading: false,
  error: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
  }
})

export default usersSlice.reducer
