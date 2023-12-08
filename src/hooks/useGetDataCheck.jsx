import { useReducer, useEffect } from 'react'
import auth from '../utils/auth'

const useGetDataCheck = (url) => {
  const initialState = {
    isLoading: false,
    data: null,
    error: false,
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOADING':
        return {
          ...state,
          isLoading: true,
        }
      case 'SUCCESS':
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        }
      case 'ERROR':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({ type: 'LOADING' })
    fetch(url, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SUCCESS', payload: data })
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', payload: err.message })
      })
  }, [])
  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error,
  }
}
export default useGetDataCheck
