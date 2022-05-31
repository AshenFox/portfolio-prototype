import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const SliderItem = ({ str, i, classStr }) => {
  const [prevClassStr, setPrevClassStr] = useState(classStr);

  const [isNextTrans, setIsNextTrans] = useState(false);
  const [isPrevTrans, setIsPrevTrans] = useState(false);
  const [isActiveTrans, setIsActiveTrans] = useState(false);

  const el = useRef(null);

  useEffect(() => {
    el.current.addEventListener('transitionend', () => {
      setIsNextTrans(false);
      setIsPrevTrans(false);
      setIsActiveTrans(false);
    });
  }, []);

  useLayoutEffect(() => {
    if (prevClassStr === 'active') {
      // el.current.scrollTo(0, 0);
      if (classStr === 'prev') setIsPrevTrans(true);
      if (classStr === 'next') setIsNextTrans(true);
    }

    if (prevClassStr !== 'active') setIsActiveTrans(true);

    setPrevClassStr(classStr);
  }, [classStr]);

  const styles = {
    overflowY: 'hidden',
  };

  return (
    <div
      ref={el}
      className={`slider__item slider__item--${i} ${classStr} ${
        isNextTrans ? 'transition-next' : ''
      } ${isPrevTrans ? 'transition-prev' : ''}`}
    >
      <div style={isActiveTrans ? styles : {}} className='slider__item-frame'>
        <div className='content'>
          <h1>{str}</h1>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
