import React from 'react';
import {useParams} from "react-router-dom"

function Post() {
    let { id } = useParams();
    return (
        <div>
            {
                id?`there your id ${id}`:`pl,kmjmj`
            }
        </div>
    )
}

export default Post
