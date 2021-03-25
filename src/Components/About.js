import React from 'react';
import vasanth from '../dist/images/vasanth.jpeg';

const About = () => {
  const Textcircle = (props) => {
    const { Text, Size, Color, Border } = props;

    const circle = {
      height: Size,
      width: Size,
      backgroundColor: Color,
      border: Border,
    };
    return (
      <>
        <div className='about__circle' style={circle}>
          <p className='about__text'>{Text}</p>
        </div>
      </>
    );
  };

  const Imgcircle = () => {
    return (
      <>
        <div className='about__circle'>
          <img src={vasanth} alt='myself' className='about__image' />
        </div>
      </>
    );
  };

  return (
    <>
      <div className='about about--dark' id='about'>
        <h2 className='about__title about__title--dark'>ABOUT ME</h2>
        <Textcircle
          Text='Vasanth, A 18 year old, Full-stack developer from India. I started learning frontend development from my secondary education.'
          Size='25rem'
          Color='#ffffff'
          Border='3px dashed #8c1864'
        />
        <Imgcircle />
        <Textcircle
          Text='I developed applications by turning my ideas and visions into websites. As of now I am continueing my learning process. '
          Size='25rem'
          Color='#ffffff'
          Border='3px dashed #8c1864'
        />
      </div>
    </>
  );
};

export default About;
