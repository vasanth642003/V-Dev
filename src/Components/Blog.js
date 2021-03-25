import React from 'react';
import vadivelu from '../dist/images/vadivelu.jpg';
const Blog = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',

    height: '100vh',
  };
  return (
    <>
      <div className='blog' style={style}>
        <img src={vadivelu} alt='vadivelu' />
        <br />
        <h1>Comming Soon :)</h1>
      </div>
    </>
  );
};
export default Blog;
