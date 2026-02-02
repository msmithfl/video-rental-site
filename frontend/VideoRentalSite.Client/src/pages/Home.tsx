import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden" style={{ height: 'calc(100vh - 5.5rem)' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden h-full">
        <img 
          src={`${import.meta.env.BASE_URL}wilhelm-scream-background.jpg`}
          alt="Video Collection" 
          className="absolute inset-0 w-full h-full object-cover object-[calc(100%+375px)_center] md:object-center"
        />
        <div className="absolute inset-0 bg-black/70 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-left relative z-20">
            <div className="bg-[#202020] rounded-lg p-8 min-w-[20rem] max-w-2xl shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">Pop-up Location</h3>
              <div className="text-gray-300 space-y-2">
                <p className="text-lg">TBD</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-lg font-semibold text-white mb-2">Hours</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>TBD</div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/library" 
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Browse Our Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
