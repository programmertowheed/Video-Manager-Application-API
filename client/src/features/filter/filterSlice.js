import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tags: "",
    search: '',
    author: null,
    pagination: {
        currentPage: 1,
        limit: 5,
        from: 1,
        to: 1,
        totalCount: 1,
    },
};

const filterSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags = action.payload;
        },
        tagRemoved: (state) => {
            state.tags = "";
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        setAuthor: (state, action) => {
            state.author = action.payload;
        },
        clearAuthor: (state, action) => {
            state.author = null;
        },
        setLimit: (state, action) => {
            state.pagination.limit = parseInt(action.payload) || 5;
        },
        setPage: (state, action) => {
            state.pagination.currentPage = parseInt(action.payload) || 1;
        },
        setTotalCount: (state, action) => {
            state.pagination.totalCount = parseInt(action.payload) || 1;
        },
        setMeta: (state, action) => {
            state.pagination.from = parseInt(action.payload.from) || 1;
            state.pagination.to = parseInt(action.payload.to) || 1;
        },
        clearFilters: (state) => {
            state.tags = "";
            state.search = '';
            state.author = null;
        },
    },
});

export default filterSlice.reducer;
export const {
    tagSelected,
    tagRemoved,
    searched,
    clearFilters,
    setAuthor,
    clearAuthor,
    setPage,
    setLimit,
    setTotalCount,
    setMeta,
} = filterSlice.actions;
