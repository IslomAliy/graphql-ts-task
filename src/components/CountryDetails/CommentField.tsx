import React, { useRef } from "react";
import { requestv2 } from "../../utils/requestv2";

type CommmentFieldProps = {
  setComments: React.Dispatch<React.SetStateAction<any[]>>;
};

const CommentField = ({ setComments }: CommmentFieldProps) => {
  const userComment = useRef<HTMLInputElement>(null);

  const createComment = () => {
    requestv2(
      `mutation CreateComment($input: CreateCommentInput!) {
            createComment(
              input: $input
            ) {
              name
              body
              id
            }
          }`,
      {
        input: {
          name: "something",
          email: "someone@gmail.com",
          body: userComment?.current?.value,
        },
      }
    ).then((res) => {
      setComments((prev) => {
        let newData = {
          title: userComment?.current?.value,
          user: {
            name: "Clementine Bauch",
          },
        };
        return [...prev, newData];
      });
    });
  };

  return (
    <div className="comment-field">
      <input placeholder="Write your comment here..." ref={userComment} />
      <button onClick={() => createComment()}>Send</button>
    </div>
  );
};

export default CommentField;
