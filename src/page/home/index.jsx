import React from 'react';
import { Tabs } from 'antd';
import './index.css';

import D002 from '../../components/cssWorld1/D002';

const { TabPane } = Tabs;

const Home = () => {

  return(
    <div className='home_wrap'>
      <Tabs defaultActiveKey="D002" tabPosition='left' style={{ height: '100%' }}> 
        <TabPane tab="D002" key="D002">
          <D002 />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Home;