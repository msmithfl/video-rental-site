import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Movie } from '../types';

interface TMDBMovieDetails {
  title: string;
  overview: string;
  runtime: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  budget: number;
  revenue: number;
  tagline: string;
}

interface TMDBCredits {
  cast: { id: number; name: string; character: string; profile_path: string | null }[];
  crew: { id: number; name: string; job: string; department: string }[];
}

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [tmdbDetails, setTmdbDetails] = useState<TMDBMovieDetails | null>(null);
  const [credits, setCredits] = useState<TMDBCredits | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingTrailer, setLoadingTrailer] = useState(false);

  const API_URL = import.meta.env.DEV 
    ? '/api/movies' 
    : `${import.meta.env.VITE_API_URL || 'http://localhost:5156'}/api/movies`;

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      // Fetch from our backend
      const response = await fetch(`${API_URL}/${id}`);
      if (response.ok) {
        const data = await response.json();
        setMovie(data);
        
        // If we have a TMDB ID, fetch additional details
        if (data.tmdbId) {
          fetchTMDBDetails(data.tmdbId);
        } else {
          setLoading(false);
        }
      }
    } catch (error) {
      console.error('Error fetching movie:', error);
      setLoading(false);
    }
  };

  const fetchTMDBDetails = async (tmdbId: number) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODZmYTE3MzcwNzRmMzY3NzkwNzc1Y2Q1NTQwNmExYyIsIm5iZiI6MTY4NzYyNzAzOC40MDEsInN1YiI6IjY0OTcyNTFlYjM0NDA5MDBhZDUyNTY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YA8K57yrPNiM_UwefPB6Bv2t8fZdY_v1GD9AS3rRrU0'
        }
      };

      // Fetch movie details
      const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}?language=en-US`, options);
      if (detailsResponse.ok) {
        const data = await detailsResponse.json();
        setTmdbDetails(data);
      }

      // Fetch credits (cast and crew)
      const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/credits?language=en-US`, options);
      if (creditsResponse.ok) {
        const creditsData = await creditsResponse.json();
        setCredits(creditsData);
      }
    } catch (error) {
      console.error('Error fetching TMDB details:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTrailer = async () => {
    if (!movie?.tmdbId) return;
    
    setLoadingTrailer(true);
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODZmYTE3MzcwNzRmMzY3NzkwNzc1Y2Q1NTQwNmExYyIsIm5iZiI6MTY4NzYyNzAzOC40MDEsInN1YiI6IjY0OTcyNTFlYjM0NDA5MDBhZDUyNTY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YA8K57yrPNiM_UwefPB6Bv2t8fZdY_v1GD9AS3rRrU0'
        }
      };

      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}/videos?language=en-US`, options);
      if (response.ok) {
        const data = await response.json();
        // Find the first official trailer, or any trailer
        const trailer = data.results.find((video: any) => 
          video.type === 'Trailer' && video.site === 'YouTube' && video.official
        ) || data.results.find((video: any) => 
          video.type === 'Trailer' && video.site === 'YouTube'
        );

        if (trailer) {
          // Open YouTube video in new tab
          window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
        } else {
          alert('No trailer available for this movie.');
        }
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
      alert('Failed to load trailer.');
    } finally {
      setLoadingTrailer(false);
    }
  };

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
        </div>
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Movie not found</p>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/library" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
        ← Back to Library
      </Link>

      <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-8">
          {/* Poster */}
          <div className="shrink-0">
            <div className="bg-gray-800 rounded-lg overflow-hidden w-full max-w-56 mx-auto md:mx-0 aspect-2/3">
              {movie.posterPath ? (
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
              {movie.formats && movie.formats.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {movie.formats.map((format) => (
                    <span key={format} className="px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded-full">
                      {format}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {tmdbDetails?.tagline && (
              <p className="text-gray-400 italic mb-4">"{tmdbDetails.tagline}"</p>
            )}

            {movie.tmdbId && (
              <button
                onClick={fetchTrailer}
                disabled={loadingTrailer}
                className="mb-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                {loadingTrailer ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    View Trailer
                  </>
                )}
              </button>
            )}

            <div className="flex flex-wrap gap-4 mb-6">
              {movie.year && (
                <div className="text-gray-300">
                  <span className="text-gray-500"></span> {movie.year}
                </div>
              )}
              {tmdbDetails?.runtime && (
                <div className="text-gray-300">
                  <span className="text-gray-500"></span> {tmdbDetails.runtime} min
                </div>
              )}
              {movie.rating > 0 && (
                <div className="flex items-center text-yellow-500">
                  <span className="text-gray-500 mr-2">Rating:</span>
                  <span className="font-semibold">{movie.rating}/10</span>
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Genres */}
            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Overview */}
            {tmdbDetails?.overview && (
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">{tmdbDetails.overview}</p>
              </div>
            )}

            {/* Director */}
            {credits?.crew && (() => {
                const directors = credits.crew.filter(person => person.job === 'Director');
                if (directors.length === 0) return null;
                return (
                <div className="flex gap-2 items-center mb-4">
                    <h3 className="text-gray-500 text-sm font-semibold">Directed by</h3>
                    <p className="text-gray-300">{directors.map(d => d.name).join(', ')}</p>
                </div>
                );
            })()}

            {/* Rental Info */}
            {/* <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-gray-500 text-sm font-semibold mb-4">Rental Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movie.shelfSection && (
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Location</p>
                    <p className="text-gray-300">Shelf {movie.shelfSection} - {movie.shelfNumber}</p>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>

        {/* Cast - Full Width */}
        {credits?.cast && credits.cast.length > 0 && (
          <div className="border-t border-gray-800 p-8">
            <h3 className="text-gray-500 text-sm font-semibold mb-4">Cast</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {credits.cast.slice(0, 16).map((actor) => (
                <div key={actor.id} className="text-center">
                  <div className="bg-gray-800 rounded-lg overflow-hidden mb-2 aspect-2/3">
                    {actor.profile_path ? (
                      <img 
                        src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                        alt={actor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 text-xs font-medium">{actor.name}</p>
                  {actor.character && (
                    <p className="text-gray-500 text-xs">{actor.character}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
