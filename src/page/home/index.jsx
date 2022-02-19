/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Tabs } from 'antd';
import './index.css';

const { TabPane } = Tabs;

const Home = () => {

  return(
    <div>
      <div className='padding-demo'></div>
      {/* <a href=''>登录</a>
      <a href=''>注册</a> */}
      {/* <img src='' alt='' /> */}
      {/* <input type='button' value='超出容器限制。除非有明确的width相关设置，否则上面3种情况尺寸都不会主动超过父级容器宽度的，但是存在一些特殊情况。例如，内容很长的连续的英文和数字，或者内联元素被设置了white-space:nowrap，则表现为“恰似一江春水向东流，流到断崖也不回头”。'>
        
      </input>
      <button type='button'>
      超出容器限制。除非有明确的width相关设置，否则上面3种情况尺寸都不会主动超过父级容器宽度的，但是存在一些特殊情况。例如，内容很长的连续的英文和数字，或者内联元素被设置了white-space:nowrap，则表现为“恰似一江春水向东流，流到断崖也不回头”。
      </button>
      <video></video>
      <input width={'100%'} style={{}}></input>
      <p>
        <img className='img' alt="美女沉思图" data-src="1.jpg" />
        <p><button>设置src属性显示图片</button></p>
      </p>
      <p>
        <h1>王亮</h1>
      </p>
      <p>
        <div className='box_wrap'>
          <div className='box_child'></div>
          As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
        </div>
      </p> */}
      {/* <Tabs defaultActiveKey="1" tabPosition='left' >
        {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
          <TabPane tab={`Tab-${i}`} key={i}>
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs> */}
    </div>
  )
}

export default Home;