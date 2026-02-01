export default function HomeStreaming() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#202020] rounded-lg shadow-2xl backdrop-blur-sm p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Personal Media Server Setup</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Transform your physical media collection into your own personal streaming service. We'll help you 
            set up a complete NAS and Plex solution to stream your movies and shows anywhere, anytime.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Our Services</h3>
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-4 bg-gray-800/50 p-4 rounded-r">
              <h4 className="font-semibold text-lg text-white mb-2">NAS Configuration & Setup</h4>
              <p className="text-gray-300">
                We'll help you select and configure the perfect Network Attached Storage (NAS) device for your 
                collection size and streaming needs. From entry-level 2-bay systems to enterprise-grade solutions, 
                we ensure your media is stored safely with proper RAID redundancy.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 bg-gray-800/50 p-4 rounded-r">
              <h4 className="font-semibold text-lg text-white mb-2">Plex Media Server Installation</h4>
              <p className="text-gray-300">
                Complete Plex server setup and configuration optimized for your hardware. We handle library 
                organization, metadata fetching, user management, and remote access so you can stream your 
                collection from anywhere in the world.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 bg-gray-800/50 p-4 rounded-r">
              <h4 className="font-semibold text-lg text-white mb-2">Media File Optimization</h4>
              <p className="text-gray-300">
                Convert raw physical media rips into streaming-ready assets. We optimize file sizes through 
                advanced compression techniques while maintaining quality, ensuring smooth playback across all 
                devices without buffering. Perfect for bandwidth-efficient streaming.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4 bg-gray-800/50 p-4 rounded-r">
              <h4 className="font-semibold text-lg text-white mb-2">Automated Workflow Setup</h4>
              <p className="text-gray-300">
                Streamline your digitization process with automated file naming, organization, and transcoding 
                pipelines. We'll configure tools to automatically process new media additions, extract subtitles, 
                and optimize for various quality tiers (4K, 1080p, 720p).
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Service Packages</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
              <h4 className="font-semibold text-white mb-2">Starter Package</h4>
              <p className="text-3xl font-bold text-blue-400 mb-2">$299</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>NAS consultation</li>
                <li>Basic Plex setup</li>
                <li>Library organization</li>
                <li>Up to 50 files optimized</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-purple-500">
              <div className="text-xs font-semibold text-purple-400 mb-2">MOST POPULAR</div>
              <h4 className="font-semibold text-white mb-2">Complete Package</h4>
              <p className="text-3xl font-bold text-purple-400 mb-2">$699</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Full NAS setup & config</li>
                <li>Advanced Plex features</li>
                <li>Remote access setup</li>
                <li>Up to 200 files optimized</li>
                <li>Automated workflows</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
              <h4 className="font-semibold text-white mb-2">Enterprise Package</h4>
              <p className="text-3xl font-bold text-green-400 mb-2">$1,299</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Multi-drive RAID setup</li>
                <li>Multi-user Plex config</li>
                <li>Unlimited optimization</li>
                <li>GPU transcoding setup</li>
                <li>12-month support</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">What We Provide</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Expert guidance on NAS hardware selection (Synology, QNAP, TrueNAS, etc.)</li>
            <li>Professional Plex server configuration with hardware transcoding</li>
            <li>Advanced media compression using H.265/HEVC and AV1 codecs</li>
            <li>Automated metadata and poster/artwork management</li>
            <li>Secure remote access setup with SSL certificates</li>
            <li>Backup strategy implementation for your digital library</li>
            <li>Training on managing and expanding your media server</li>
          </ul>
          
          <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-2">Free System Assessment</h4>
            <p className="text-gray-300 mb-4">
              Schedule a free consultation where we'll assess your physical media collection size, 
              network infrastructure, and streaming requirements to design the perfect solution for your needs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Schedule Assessment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
