import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/Layout/AppLayout';
import NicknameEditForm from '../components/Form/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: '정기수'}, { nickname: '고구마' }, { nickname: '감자' }];
  const followingList = [{ nickname: '정기수'}, { nickname: '고구마' }, { nickname: '감자' }];

  return (
    <>
      <Head>
        <title>내 프로필 | DongDong</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout> 
    </>
  )
};

export default Profile;