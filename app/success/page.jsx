import Link from 'next/link';

export const metadata = {
    title: 'Message Sent - Legacy Audio Lab',
    description: 'Your message has been successfully sent to Legacy Audio Lab.'
};

export default function SuccessPage() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-600 bg-opacity-20 border border-green-500 rounded-lg p-8 mb-8">
                <div className="text-6xl mb-4">✅</div>
                <h1 className="text-3xl font-bold text-green-400 mb-4">Message Sent Successfully!</h1>
                <p className="text-green-200 text-lg mb-6">
                    Thank you for contacting Legacy Audio Lab. We've received your quote request 
                    and will respond within 4 hours during business hours.
                </p>
                <div className="space-y-4">
                    <p className="text-blue-200">
                        In the meantime, feel free to explore our services or learn more about our process.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/services" 
                            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            View Our Services
                        </Link>
                        <Link 
                            href="/" 
                            className="bg-transparent border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="text-blue-200">
                <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                        <div className="text-2xl mb-2">📧</div>
                        <h3 className="font-semibold mb-1">We'll Review</h3>
                        <p>Our team will carefully review your project details and requirements.</p>
                    </div>
                    <div>
                        <div className="text-2xl mb-2">💬</div>
                        <h3 className="font-semibold mb-1">Personal Response</h3>
                        <p>You'll receive a detailed quote tailored specifically to your needs.</p>
                    </div>
                    <div>
                        <div className="text-2xl mb-2">🎵</div>
                        <h3 className="font-semibold mb-1">Start Your Project</h3>
                        <p>Once approved, we'll begin preserving your precious audio memories.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}