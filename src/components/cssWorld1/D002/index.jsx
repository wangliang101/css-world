import React from 'react';
import './index.css';

const D002 = () => {
  console.log('111');

  return(
    <div className='D002_wrap'>
      <p>
        <h1>4.2.4 padding与图形绘制</h1>
        <p>
          <i class="icon-menu"></i>
        </p>
        <p>
          <i class="icon-dot"></i>
        </p>
      </p>
      <p>
        <h1>4.3 激进的margin属性</h1>
        <div className='father'>
          <div className='son'></div>
        </div>
      </p>
      <p>
        <h1>4.4 border</h1>
        <div className='box'>  </div>
      </p>
    </div>
  )
}

export default D002;