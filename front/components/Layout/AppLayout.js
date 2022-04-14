import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { UserOutlined, QqCircleFilled, ProfileOutlined } from '@ant-design/icons';
import UserProfile from '../UserProfile';
import LoginForm from '../Form/LoginForm.js';
import styled, { createGlobalStyle }  from 'styled-components';
import { useSelector } from 'react-redux';

const MenuBar = styled(Menu)`
  align-items: center;
  height: 60px;
  padding: 0 70px;
  & button {
    background-color: black;
    color: white;
    border-color: black;
  }
`;

const RowLayout = styled(Row)`
  padding: 0 80px;
`;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
  width: 250px;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child {
    padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  return (
    <div>
      <Global />
      <MenuBar mode="horizontal">
        <Menu.Item key="home">
          <Link href="/"><a><QqCircleFilled style={{ fontSize: '33px', marginTop: '15px' }}/></a></Link>
        </Menu.Item>
        <Menu.Item key="search">
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile"><a><ProfileOutlined style={{ fontSize: '23px', marginTop: '18px'}} /></a></Link> 
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup"><a><UserOutlined style={{ fontSize: '23px', marginTop: '16px'}} /></a></Link>
        </Menu.Item>
      </MenuBar>
      <RowLayout gutter={8}>
        <Col xs={24} md={8}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col style={{ marginTop: '20px' }} xs={24} md={16}>
          {children}
        </Col>
      </RowLayout>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;