import React from 'react';
import { Form, Input } from 'antd';
import styled  from 'styled-components';

const NicknameForm = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;

  & button {
    background: black;
    border-color: black;
  }
`;

const NicknameEditForm = () => {
  return (
    <NicknameForm>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </NicknameForm>
  );
};

export default NicknameEditForm;