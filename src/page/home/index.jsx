/* eslint-disable no-unused-vars */
import React from 'react';
import { Tabs } from 'antd';
import './index.css';

import D002 from '../../components/cssWorld1/D002';
import D004 from '../../components/cssWorld1/D004';
import D005 from '../../components/cssWorld1/D005';

const { TabPane } = Tabs;

const Home = () => {

  return(
    <div className='home_wrap'>
      <Tabs defaultActiveKey="D004" tabPosition='left' style={{ height: '100%' }}> 
        <TabPane tab="D002" key="D002">
          <D002 />
        </TabPane>
        <TabPane tab="D004" key="D004">
          <D004 />
        </TabPane>
        <TabPane tab="D005" key="D005">
          <D005 />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Home;