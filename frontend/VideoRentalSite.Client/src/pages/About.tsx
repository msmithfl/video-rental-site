export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#202020] rounded-lg shadow-2xl backdrop-blur-sm p-8">
        <h3 className="text-2xl font-bold text-white mb-2">Popup location</h3>
        <p className="text-lg text-gray-300 mb-6">TBD</p>
        <h3 className="text-2xl font-bold text-white mb-2">Rental Hours</h3>
        <p className="text-lg text-gray-300 mb-6">TBD</p>

        <h3 className="text-2xl font-bold text-white mb-2">Pricing</h3>
        <p className="text-lg text-gray-300">Free sign up with I.D. and credit/debit card</p>
        <p className="text-lg text-gray-300 mb-6">All titles - $5 for 7-day rental</p>
        
        <h3 className="text-2xl font-bold text-white mb-2">Return box locations & Hours</h3>
        <p className="text-lg text-gray-300">TBD</p>
        <div className="prose prose-blue max-w-none">
          <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-2">Get in Touch</h4>
            <p className="text-gray-300">
              Have questions or want to request a specific title? We'd love to hear from you!
            </p>
            <p className="text-blue-400 font-medium mt-2">
              Email: info@wilhelmsvideo.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
