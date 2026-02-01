import { Link } from 'react-router-dom';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  showRating?: boolean;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="rounded-lg transition-all duration-300 overflow-hidden block"
    >
      <div className="rounded-lg bg-gray-800 aspect-2/3 flex items-center border hover:border-yellow-500 justify-center relative">
        {movie.posterPath ? (
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        ) : (
          <div className="text-center p-2">
            <svg className="w-8 h-8 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-2">
        <h3 className="font-bold text-xs text-white mb-1 line-clamp-1">
          {movie.title}
        </h3>
        
        {movie.year && (
          <p className="text-xs text-gray-400">{movie.year}</p>
        )}
      </div>
    </Link>
  );
}
