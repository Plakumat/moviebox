import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

const Header = lazy(() => import('./components/header'));
const Footer = lazy(() => import('./components/footer'));

function App() {
  return (
    <div className='moviebox'>
      <Suspense
        fallback={
          <Skeleton
            animation='wave'
            className='moviebox__header-skeleton'
            height={60}
            variant='rectangular'
          />
        }
      >
        <Header />
      </Suspense>
      <Outlet />
      <Suspense
        fallback={
          <Skeleton
            animation='wave'
            className='moviebox__footer-skeleton'
            height={60}
            variant='rectangular'
          />
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
