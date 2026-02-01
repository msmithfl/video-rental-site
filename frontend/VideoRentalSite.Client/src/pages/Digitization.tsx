export default function Digitization() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#202020] rounded-lg shadow-2xl backdrop-blur-sm p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Digitization Services</h2>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Preserve your precious memories by converting your old tapes and films to digital formats. 
            Our professional digitization services ensure your family videos, wedding tapes, and cherished moments 
            are protected for generations to come.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">What We Digitize</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-lg text-white mb-2">Video Formats</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>VHS & VHS-C</li>
                <li>Betamax</li>
                <li>MiniDV & Digital8</li>
                <li>Hi8 & Video8</li>
                <li>DVD & Blu-ray</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-lg text-white mb-2">Film Formats</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>8mm & Super 8</li>
                <li>16mm Film</li>
                <li>35mm Slides</li>
                <li>Photo Negatives</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Our Process</h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-6">
            <li><strong>Drop-off or Pickup:</strong> Bring your media to us or schedule a pickup</li>
            <li><strong>Assessment:</strong> We evaluate the condition and provide a quote</li>
            <li><strong>Digitization:</strong> Professional conversion using high-quality equipment</li>
            <li><strong>Quality Check:</strong> We review every transfer for optimal results</li>
            <li><strong>Delivery:</strong> Receive your originals plus digital copies on USB, DVD, or cloud storage</li>
          </ol>
          
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Pricing</h3>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
            <p className="text-gray-300 mb-4">
              Our pricing is transparent and competitive, based on the format and length of your media:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong>VHS/Betamax:</strong> $20 per tape (up to 2 hours)</li>
              <li><strong>MiniDV/Digital8:</strong> $25 per tape</li>
              <li><strong>8mm Film:</strong> $0.15 per foot</li>
              <li><strong>Additional copies:</strong> $10 each</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              * Volume discounts available for 10+ items
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h4>
            <p className="text-gray-300 mb-4">
              Contact us today to discuss your digitization project and receive a custom quote.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
