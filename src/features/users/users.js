import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Sach Linh' },
  { id: '1', name: 'Ninh Tuan' },
  { id: '2', name: 'Vu Khiem' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer