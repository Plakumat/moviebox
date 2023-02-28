import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { ICarouselProps, SeeMoreKey } from '../../model/common';
import PosterTitle from '../posterTitle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MovieCarousel: React.FC<ICarouselProps> = (props: ICarouselProps) => {
  const { posters } = props;

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [posters]);

  return (
    <div className='moviebox__carousel'>
      <Carousel
        autoPlay={true}
        showIndicators={false}
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
      >
        {posters &&
          posters.map((poster, index) => (
            <div className='moviebox__carousel__item' key={index}>
              <img alt='poster' src={poster.movieImage} />
              <div className='moviebox__carousel__item__poster'>
                <PosterTitle>
                  {poster.movieTitle}
                  <Link
                    to={`/movie/${poster.movieId}`}
                    className='moviebox__carousel__item__link'
                  >
                    {SeeMoreKey}
                  </Link>
                </PosterTitle>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
