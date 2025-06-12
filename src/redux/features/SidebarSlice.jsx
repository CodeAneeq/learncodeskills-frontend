import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        openSidebar: (state, action) => {
            state.isOpen = true
        },
        closeSidebar: (state, action) => {
            state.isOpen = false
        }
    }
})

export const { openSidebar, closeSidebar, isOpen } = sidebarSlice.actions
export default sidebarSlice.reducer