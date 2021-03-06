import React from 'react';
import faker from 'faker';

const CommentDetail=(props)=>{
    return (
    <div className="comment">
    <a href="/" className="avatar">
        <img src={props.images} alt="avatar"></img>
    </a>
    <div className="content">
        <a href="/" className ="author">
            {props.author}
        </a>
        <div className="metadata">
            <span className="date">{props.timeago}</span>
        </div>
        <div className="text">Nice Blog!</div>
    </div>
    </div>

    );
};

export default CommentDetail;