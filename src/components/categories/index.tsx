import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  BaseImageURL,
  API_LIMIT,
  CarouselResponsive,
  SeeMoreKey,
  IGenreTypes,
  IMovieTypes,
  MobileBreakpoint,
} from '../../model/common';
import { API } from '../../service';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from '../container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Categories: React.FC = () => {
  const [genreList, setGenreList] = useState<any[]>([]);
  const [movieWithGenre, setMovieWithGenre] = useState<any[]>([]);
  const [carouselCenter, setCarouselCenter] = useState(false);

  const getGenres = useCallback(async () => {
    try {
      const listOfGenres = await API.getGenreList();
      if (listOfGenres) {
        const { genres } = listOfGenres;

        setGenreList(genres);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getGenres().catch(console.error);
  }, [getGenres]);

  useEffect(() => {
    if (genreList.length > 0) {
      genreList.forEach(async (genre: IGenreTypes, genreIndex: number) => {
        const { id } = genre;
        if (genreIndex! < API_LIMIT) {
          try {
            const correntMovieOfGenre = await API.getDiscoverByGenres(id);
            movieWithGenre.push(correntMovieOfGenre);
            setMovieWithGenre([...movieWithGenre]);
          } catch (error) {
            console.error(error);
          }
        }
      });
    }
  }, [genreList]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth < MobileBreakpoint) {
        setCarouselCenter(true);
        return;
      }

      setCarouselCenter(false);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  /**
   *
   * @param movie
   * @param index
   * @returns
   */
  const carouselGroupTemplate = (movie: IMovieTypes, index: number) => {
    const { title, original_title, overview, vote_average, poster_path, id } =
      movie;

    return (
      <div className='moviebox__categories__item__box' key={index}>
        <LazyLoadImage
          className='moviebox__categories__item__poster'
          src={BaseImageURL + poster_path}
          effect='blur'
          alt='movie-poster'
        />
        <div className='moviebox__categories__item__info'>
          <p className='movie-name'>{title}</p>
        </div>
        <div className='box-overlay'>
          <span className='box-overlay__title'>{original_title}</span>
          <p className='box-overlay__description'>{overview}</p>
          <p className='box-overlay__score'>{vote_average}</p>
          <Link to={`/movie/${id}`} className='box-overlay__see-more'>
            {SeeMoreKey}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className='moviebox__categories'>
      <Container flexDirection='column'>
        {genreList.map((genre: IGenreTypes, genreIndex: number) => {
          const { id, name } = genre;
          return genreIndex! < API_LIMIT ? (
            <div className='moviebox__categories__item' key={id}>
              <p className='moviebox__categories__item__title'>{name}</p>
              {movieWithGenre && (
                <Carousel
                  infinite={true}
                  responsive={CarouselResponsive}
                  key={id}
                  centerMode={carouselCenter}
                >
                  {movieWithGenre[genreIndex]?.results.map(
                    (movie: IMovieTypes, movieIndex: number) =>
                      movieIndex! < API_LIMIT
                        ? carouselGroupTemplate(movie, movieIndex)
                        : null
                  )}
                  {null}
                </Carousel>
              )}
            </div>
          ) : null;
        })}
      </Container>
    </div>
  );
};

export default Categories;
