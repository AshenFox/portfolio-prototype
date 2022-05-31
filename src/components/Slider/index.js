import React, { useEffect, useRef, useState } from 'react';
import SliderItem from './SliderItem';

const Slider = () => {
  const [activeNum, setActiveNum] = useState(0);
  const [itemsArr, setItemsArr] = useState([
    {
      id: 111,
      value: 'Item 1',
    },
    {
      id: 222,
      value: 'Item 2',
    },
    {
      id: 333,
      value: 'Item 3',
    },
  ]);
  const [isTransition, setIsTransition] = useState(false);

  const clickNext = () => {
    const value = activeNum + 1;
    if (value > itemsArr.length - 1 || isTransition) return;
    setIsTransition(true);
    setActiveNum(value);
  };

  const clickPrev = () => {
    const value = activeNum - 1;
    if (value < 0 || isTransition) return;
    setIsTransition(true);
    setActiveNum(value);
  };

  const el = useRef(null);

  useEffect(() => {
    el.current.addEventListener('transitionend', () => {
      setIsTransition(false);
    });
  }, []);

  const styles = {
    overflow: 'hidden',
  };

  return (
    <>
      <div style={isTransition ? styles : {}} className='slider' ref={el}>
        {itemsArr.map(({ value, id }, i) => {
          const diff = i - activeNum;
          if (diff === -1)
            return (
              <SliderItem key={id} str={value} i={activeNum - 1} classStr={'prev'} />
            );
          if (diff === 0)
            return <SliderItem key={id} str={value} i={activeNum} classStr={'active'} />;
          if (diff === 1)
            return (
              <SliderItem key={id} str={value} i={activeNum + 1} classStr={'next'} />
            );

          return false;
        })}
      </div>
      <div className='menu menu--left'>
        <button onClick={clickPrev}>Prev</button>
      </div>
      <div className='menu menu--right'>
        <button onClick={clickNext}>Next</button>
      </div>
    </>
  );
};

export default Slider;

/* <div className={`slider__item slider__item--1 ${isActive && 'active'}`}>
          Item 1
        </div>
        <div className={`slider__item slider__item--2 ${!isActive && 'active'}`}>
          Item 2
        </div>
        <div className='slider__item slider__item--3'>Item 3</div> */
