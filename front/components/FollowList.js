import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import styled  from 'styled-components';

const Flist = styled(List)`
  margin-bottom: 20px;
`;
const ListItem = styled(List.Item)`
  margin-top: 20px;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const FollowList = ({ header, data }) => {
  const ListHeader = <div>{header}</div>;
  const MoreButton = <ButtonWrapper><Button>더 보기</Button></ButtonWrapper>;
  const RenderItem = useCallback((item) => (
    <ListItem>
      <Card actions={[<StopOutlined key="stop" />]}>
        <Card.Meta description={item.nickname} />
      </Card>
    </ListItem>
  ), [data]);

  return (
    <Flist
      grid={{ gutter: 4, column: 3 }}
      size="small"
      header={ListHeader}
      loadMore={MoreButton}
      bordered
      dataSource={data}
      renderItem={RenderItem}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default FollowList;