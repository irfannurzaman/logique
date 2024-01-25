


import React, { useReducer } from "react";
import api from "../request";
import { pagenation } from "../utils/pagenation"

const initialValues = {
    data: [],
    datas: [],
    loading: false,
    message: '',
    input: undefined,
    page: 0,
    per_page: 0,
    next_page: 0,
    total: 0,
    total_pages: 0,
}

function reducer(state, action) {
    if (action.type === 'GET_API_SEARCH') {
        return {
            ...state,
            ...action.value,
            loading: false
        };
    }
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            loading: true
        };
    }
    if (action.type === 'SET_ERROR') {
        return {
            ...state,
            loading: false,
            message: action.value
        };
    }
    if (action.type === 'SET_INPUT') {
        return {
            ...state,
            input: action.value
        };
    }
    if (action.type === 'SET_LOAD_MORE') {
        return {
            ...state,
            ...action.value,
        };
    }
    throw Error('Unknown action.');
}



export default function useGetData() {
    const [state, dispatch] = useReducer(reducer, initialValues);

    const getApi = async (current_page = 0, per_page_items = 5) => {
            dispatch({
                type: 'SET_LOADING',
                value: true
            })
        try {
            const res = await api.search.apiSearch(state.input)
            const result = pagenation(res.results, current_page, per_page_items)
            dispatch({
                type: 'GET_API_SEARCH',
                value: { ...result, datas: res.results}

            })
        } catch (error) {
            dispatch({
                type: 'SET_LOADING',
                value: error.message
            })
        }
    }
    
    const setSearch = (value) => {
        dispatch({
            type: 'SET_INPUT',
            value: value
        })
    }
    const loadMore = (value, per_page_items = 5) => {
        const result = pagenation(state.datas, value, per_page_items)
        dispatch({
            type: 'SET_LOAD_MORE',
            value: {
                ...result,
                data: [...state.data, ...result.data]
            }
        })
    }


    return {
        state,
        getApi,
        setSearch,
        loadMore,
    }
}