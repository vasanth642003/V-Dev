import React, { useState } from 'react';
import Plus from '../dist/images/portfolioPlus.svg';
import Minus from '../dist/images/portfolioMinus.svg';
import { pros } from '../Data/projects';

const Portfolio = () => {
  const Category = (props) => {
    const { Name, catg } = props;
    const [state, setState] = useState('none');
    const [symbol, setSymbol] = useState(Plus);

    const show = () => {
      if (state === 'none') {
        setState('flex');
        setSymbol(Minus);
      } else if (state === 'flex') {
        setState('none');
        setSymbol(Plus);
      }
    };

    return (
      <div className='catg'>
        <div onClick={show}>
          <div className='catg__circle catg__circle--dark'>
            <img src={symbol} alt='Plus' className='catg__symbol' />
          </div>
          <h3 className='catg__title catg__title--dark'>{Name}</h3>
        </div>
        <div className='catg__list' style={{ display: state }}>
          {pros[catg].map((pro) => {
            return <Projects key={pro.id} {...pro} />;
          })}
        </div>
      </div>
    );
  };

  const Projects = (props) => {
    const { code, image, link } = props;

    return (
      <div className='catg__project'>
        <a
          href={link}
          className='catg__link'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            title='v'
            src={image}
            alt='v1'
            width='100%'
            height='100%'
            className='catg__image'
          />

          <div className='attr'>
            {code.map((name) => {
              return (
                <div className='attr__code' key={code.indexOf(name)}>
                  <h4>{name}</h4>
                </div>
              );
            })}
          </div>
        </a>
      </div>
    );
  };

  return (
    <>
      <div className='portfolio portfolio--dark' id='portfolio'>
        <h2 className='portfolio__title portfolio__title--dark'>PORTFOLIO</h2>
        <Category Name='BRANDING SITES' catg='pro1' />
        <Category Name='PORTFOLIOS' catg='pro2' />
        <Category Name='OTHERS' catg='pro3' />
      </div>
    </>
  );
};

export default Portfolio;
