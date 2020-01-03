import { navigate } from 'gatsby';
import * as React from 'react';
import ReactResizeDetector from 'react-resize-detector';

import { IndexComponent } from '../components/IndexComponent/IndexComponent';

export const MOBILE_BREAKPOINT = 1200;

export const Index: React.FC = () => {
  const [viewportSize, setViewportSize] = React.useState({ width: 0, height: 0 });

  const onResize = () => {
    setViewportSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  if (viewportSize && viewportSize.width < MOBILE_BREAKPOINT && viewportSize.width !== 0) {
    navigate('/portfolio', { replace: true });
  }

  return (
    <>
      <ReactResizeDetector handleWidth={true} handleHeight={true} onResize={onResize} />
      <IndexComponent viewport={viewportSize} />
    </>
  );
};
