import React from 'react';
import { Flex, Spin } from 'antd';

const Loader = () => (
    <Flex gap="middle" className='loader'>
        <Spin size="large" />
    </Flex>
);

export default Loader;