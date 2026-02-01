import { useState, useEffect, useRef } from 'react'
import type { Movie } from '../types'
import MovieCard from '../components/MovieCard'

export default function RentalLibrary() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const movieRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Use proxy in development, direct URL in production
  const API_URL = import.meta.env.DEV 
    ? '/api/movies' 
    : `${import.meta.env.VITE_API_URL || 'http://localhost:5156'}/api/movies`;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setMovies(data);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter movies based on search and format
  const filteredMovies = movies
    .filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           movie.genres?.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
                           movie.review?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFormat = selectedFormat === 'all' || movie.formats?.includes(selectedFormat);
      const notDamaged = movie.condition !== 'Damaged';
      return matchesSearch && matchesFormat && notDamaged;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  // Get unique formats for filter
  const formats = ['all', ...new Set(movies.flatMap(m => m.formats || []))];

  // Get letters that have movies
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const availableLetters = new Set(
    filteredMovies.map(m => m.title.charAt(0).toUpperCase())
  );

  const scrollToLetter = (letter: string) => {
    const ref = movieRefs.current[letter];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Alphabet Navigation */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-0.5 bg-black/80 backdrop-blur-sm rounded-lg p-2 border border-gray-800">
          {alphabet.map((letter) => {
            const hasMovies = availableLetters.has(letter);
            return (
              <button
                key={letter}
                onClick={() => hasMovies && scrollToLetter(letter)}
                disabled={!hasMovies}
                className={`w-6 h-6 flex items-center justify-center text-xs font-semibold rounded transition-colors ${
                  hasMovies
                    ? 'text-yellow-400 hover:bg-yellow-400 hover:text-black cursor-pointer'
                    : 'text-gray-700 cursor-not-allowed'
                }`}
                title={hasMovies ? `Jump to ${letter}` : `No titles starting with ${letter}`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-black rounded-lg shadow-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-[#202020] text-white placeholder-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="md:w-48">
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full px-4 py-2 bg-[#202020] text-white placeholder-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              {formats.map((format) => (
                <option key={format} value={format}>
                  {format === 'all' ? 'All Formats' : format}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
        </div>
      ) : filteredMovies.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No movies found matching your search.</p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-gray-400">
            Showing {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}
          </div>
          <div className="grid grid-cols-3 min-[400px]:grid-cols-4 min-[700px]:grid-cols-6 xl:grid-cols-8 gap-4">
            {filteredMovies.map((movie, index) => {
              const firstLetter = movie.title.charAt(0).toUpperCase();
              const isFirstOfLetter = index === 0 || 
                filteredMovies[index - 1].title.charAt(0).toUpperCase() !== firstLetter;
              
              return (
                <div
                  key={movie.id}
                  ref={isFirstOfLetter ? (el) => { movieRefs.current[firstLetter] = el; } : undefined}
                >
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
}
