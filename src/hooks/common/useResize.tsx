import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useResize() {
  const [windowSize, setWindowSize] = useState(getWindowDimensions());

  useEffect(() => {
    function onWindowResize() {
      setWindowSize(getWindowDimensions());
    }

    // resize를 할때마다 handleResize가 실행되면서 성능 문제가 발생할 수 있다. 그래서 throttle을 사용해보자
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return windowSize;
}
