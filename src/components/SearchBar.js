import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBySearchOption } from '../actions/apiActions'
function SearchBar(props) {
    const [ option, setOption ] = useState('story')
    const [ input, setInput ] = useState('')

    SearchBar.propTypes = {
    }


    // takes input and option and 
    const onSubmitHandler = e => {
        e.preventDefault()
        console.log(input, option)
        props.getBySearchOption(option, input)
        setInput('')
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <select id="option" onChange={e => setOption(e.target.value)}>
                <option value="story">Story</option>
                <option value="comment">Comment</option>
                <option value="author">Author</option>
                <option value="page">Page</option>
                <option value="url">URL</option>
            </select>
                <input
                    type="text"
                    placeholder="search"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button>Enter</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { getBySearchOption } )(SearchBar)
