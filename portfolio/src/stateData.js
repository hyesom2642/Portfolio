import { configureStore, createSlice } from '@reduxjs/toolkit';

let scrollYData = createSlice({
    name: 'scrollYValue',
    initialState: window.scrollY
})

export default configureStore({
    reducer: {
        scrollYData: scrollYData.reducer
    }
})