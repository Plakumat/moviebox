export const BaseImageURL = 'https://image.tmdb.org/t/p/original/';

export const AppTitle = 'Moviebox';

export const SeeMoreKey = 'See Details';

export const API_LIMIT = 6;

export const MobileBreakpoint = 430;

export interface IPopularDetail {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: Boolean;
  vote_average: number;
  vote_count: number;
}

export interface IBackDrops {
  movieId: number;
  movieImage: string;
  movieTitle: string;
}

export interface IPopularMovies {
  results?: Array<IPopularDetail>;
}

export interface ICarouselProps {
  posters: Array<IBackDrops>;
}

export interface IErrorResponse {
  data: any;
  status: number;
  statusText: string;
  message?: string;
}

export interface IContainerProps {
  children?: any;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  className?: string;
  fullWidth?: boolean;
}

export interface IPosterTitleProps {
  children?: any;
  className?: string;
}

export type IGenreTypes = {
  id: number;
  name: string;
};

export type IMovieTypes = {
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  spoken_languages: Array<any>;
  id: number;
  genres: Array<any>;
};

export const CarouselResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 700, min: MobileBreakpoint },
    items: 2,
  },
  superMobile: {
    breakpoint: { max: MobileBreakpoint, min: 320 },
    items: 1,
  },
};
