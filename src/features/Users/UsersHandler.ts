import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  )
})
