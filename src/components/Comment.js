import React from 'react';

function Comment ({ comment }) {
    return (
      <div className="comment">
        <p>{comment.content}</p>
        <div className="replies">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      </div>
    );
  }