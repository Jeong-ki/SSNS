import React, { useCallback, useEffect, useRef } from "react";
import { Form, Input, Button } from "antd"
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { addPost } from "../../reducers/post";
import useInput from "../../hooks/useInput";

const UploadBtn = styled(Button)`
  float: right;
  background: black;
  border-color: black;
`;

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form style={{ margin: '0 0 10px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea 
        style={{ marginBottom: '5px' }}
        value={text} 
        onChange={onChangeText} 
        maxLength={140} 
        placeholder="어떤 일들이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <UploadBtn type="primary" htmlType="submit">게시</UploadBtn>
      </div>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        })}
      </div>
    </Form>
  )
}

export default PostForm;