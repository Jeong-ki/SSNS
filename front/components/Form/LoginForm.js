import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;

  & .loginBtn {
    background: black;
    border-color: black;
    margin-right: 5px;

    &:hover {
      background: #1890ff;
      border-color: #1890ff;
    }
  }
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <fieldset>
        <legend>로그인</legend>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
            <br />
          <Input 
            name="user-password" 
            value={password} 
            onChange={onChangePassword} 
            required 
          />
        </div>
        <ButtonWrapper>
          <Button className="loginBtn" type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
          <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </ButtonWrapper>
      </fieldset>
    </FormWrapper>
  );
}

export default LoginForm;