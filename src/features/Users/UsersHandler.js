import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  return data
})
