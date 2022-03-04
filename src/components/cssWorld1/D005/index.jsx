import React from 'react';
import './index.css';
import img from './1.jpg'


const D004 = () => {
  console.log('111');

  return(
    <div className='D005_wrap'>
      <p>
        <h1>第五章</h1>
        <p>
          <div className='abox'>
            <img src={img} alt=''/>
          </div>
          <div className='cell'>
            <img src={img} alt=''/>
          </div>
        </p>
      </p>
    </div>
  )
}

export default D004;