import React from 'react';

const alist = [1, 2, 3]
const blist = [5, 6, 7]

const About = () => {

  return(
    <div>
      {alist.map((a, i) => <div key={i}>a</div>)}
      {blist.map((b, i) => <div key={i}>b</div>)}
    </div>
  )
}

export default About;