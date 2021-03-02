import axios from 'axios'
import * as actions from './types'


// fetch first page when there is no input
export const getFirstPage = () => dispatch => {
    dispatch(setApiLoading())
    axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
        .then(res => dispatch({
            type: actions.GET_API,
            payload: res.data
        }))
        .catch(err => 
            console.log(err)
        )
}


// if there is input and option entered by user , fetch followings
export const getBySearchOption = (option, input) => dispatch => {
    dispatch(setApiLoading())
    // create new url that takes option and input
    var url = ''
    if (option === "story") {
        url = `http://hn.algolia.com/api/v1/search?query=${input}&tags=story`
    } else if (option ==="comment") {
        url = `http://hn.algolia.com/api/v1/search?query=${input}&tags=comment`
    } else if (option ==="author") {
        url = `http://hn.algolia.com/api/v1/search?tags=story,author_${input}`
    } else if (option ==="page") {
        url = `https://hn.algolia.com/api/v1/search?page=${parseInt(input)}`
    } else if (option ==="url") {
        url = `http://hn.algolia.com/api/v1/search?query=${input}&restrictSearchableAttributes=url`
    }

    axios.get(url)
        .then(res => dispatch({
            type: actions.GET_API,
            payload: res.data,
            // save the user's search term and option in the redux state
            option: option,
            input: input
        }))
        .catch(err => 
            console.log(err)
        )
}

export const setApiLoading = () => {
    return {
        type: actions.API_LOADING,
    }
}