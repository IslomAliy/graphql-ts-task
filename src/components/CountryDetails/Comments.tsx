import React, { useEffect, useState } from "react";
import { requestv2 } from "../../utils/requestv2";
import CommentField from "./CommentField";

const Comments = () => {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    requestv2(
      `query {
    user(id:3) {
      posts {
        data {
          title
          user {
            name
          }
        }
      }
    }
  }`
    ).then((res) => {
      setComments(res.data.data.user.posts.data);
    });
  }, []);

  console.log("comments", comments);

  return (
    <div className="comments-wrapper">
      <CommentField setComments={setComments} />
      {comments
        .slice(0)
        .reverse()
        .map((elm, index) => (
          <div className="comment-section" key={index}>
            <span className="user-image" />
            <div className="user-comment">
              <h4 className="user-name">{elm.user.name}</h4>
              <p className="comment">{elm.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
