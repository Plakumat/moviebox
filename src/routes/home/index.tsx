import { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import { IPopularMovies, IBackDrops, BaseImageURL } from '../../model/common';
import { API } from '../../service';
import Skeleton from '@mui/material/Skeleton';

const Carousel = lazy(() => import('../../components/carousel'));
const Categories = lazy(() => import('../../components/categories'));

function Home() {
  const [popularMovies, setPopularMovies] = useState<IPopularMovies>({});
  const [popularBackDrops, setPopularBackDrops] = useState<Array<IBackDrops>>(
    []
  );

  const getPopularMovies = useCallback(async () => {
    try {
      const populars = await API.getPopularMovies();
      if (populars) setPopularMovies(populars);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getPopularMovies().catch(console.error);
  }, [getPopularMovies]);

  useEffect(() => {
    const { results } = popularMovies;
    if (results)
      results.forEach((movie) => {
        const { id, backdrop_path, title } = movie;

        popularBackDrops.push({
          movieId: id,
          movieImage: BaseImageURL + backdrop_path,
          movieTitle: title,
        });

        setPopularBackDrops([...popularBackDrops]);
      });
  }, [popularMovies]);

  return (
    <div className='moviebox'>
      <Suspense
        fallback={
          <Skeleton
            animation='pulse'
            className='moviebox__carousel-skeleton'
            height={500}
            variant='rectangular'
          />
        }
      >
        <Carousel posters={popularBackDrops} />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            animation='pulse'
            className='moviebox__categories-skeleton'
            width={960}
            height={500}
            variant='rectangular'
          />
        }
      >
        <Categories />
      </Suspense>
    </div>
  );
}

export default Home;
