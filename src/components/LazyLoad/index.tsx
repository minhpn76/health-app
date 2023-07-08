import React, { Suspense } from 'react';

// to show loading state for desired page only instead of the entire screen
const LazyLoad = (children: React.ReactNode) => {
  return <Suspense fallback={<>Loading..</>}>{children}</Suspense>;
};

export default LazyLoad;
