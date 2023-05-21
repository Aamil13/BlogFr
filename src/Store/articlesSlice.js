import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
    'fetcharticles',
    async(page)=>{
        const res = await fetch(`https://api.theinnerhour.com/v1/customers/resources/articles/list?page=${page || 1}&limit=10`)
        return res.json()
    }
)

export const SingleArticle = createAsyncThunk(
    "SingleArticle",
    async(param)=>{
        const res = await fetch(`https://api.theinnerhour.com/v1/blogdetail/${param}`)
        return res.json()
    }
)

const articleSlice = createSlice({
    name: "article",
    initialState:{
        isLoading: false,
        data: [],
        searchedData: [],
        isError: false,
    },
    reducers:{
        search: (state, action)=>{
            state.searchedData = action.payload
        },
        clear:(state)=>{
            state.searchedData = []
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchArticles.pending,(state,action)=>{
            state.isLoading = true
        });
        builder.addCase(fetchArticles.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
            // console.log(state.data);
        });
        builder.addCase(fetchArticles.rejected,(state,action)=>{
            state.isLoading = false;
            console.log("error",action.payload);
            state.isError = true;
        })
    }

})

export const {search, clear} = articleSlice.actions
export default articleSlice.reducer; 