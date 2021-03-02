import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFirstPage } from '../actions/apiActions'
function Result(props) {
    const [ firstPage, setFirstPage ] = useState(false)
    Result.propTypes = {
        currentAPI: PropTypes.object
    }
    console.log(props.currentAPI)
    console.log(props.currentAPI.option)
    console.log(firstPage)

    useEffect(() => {
        props.getFirstPage()
        setFirstPage(true)
    }, [firstPage === false])

    return (
        <div>
            {props.currentAPI.result.hits?.map(hit => (
                <div>
                    {hit.title ? 
                        <h4><a href={hit.url}>{hit.title}</a> / {hit.author}</h4> :
                        <h4>{hit.comment_text} / {hit.author}</h4>
                    }
                    <p>Created at: {hit.created_at}</p>
                </div>
            ))}
        </div>
    )
}


const mapStateToProps = state => ({
    currentAPI: state.api,
})

export default connect(mapStateToProps, { getFirstPage } )(Result)
