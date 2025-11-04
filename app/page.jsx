import Link from 'next/link';
import { Card } from 'components/card';

export default function Page() {
    return (
        <div className="flex flex-col gap-16 sm:gap-20">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
                    Perfect Audio <span className="text-blue-300">Restoration</span>
                </h1>
                <p className="mb-8 text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    We specialize in extracting and digitizing legacy audio formats with pristine quality, 
                    delivering tracks ready for Pro Tools, Logic, Reaper, Ableton, and Cubase/Nuendo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Get Started
                    </Link>
                    <Link href="/services" className="btn btn-lg bg-transparent border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        View Services
                    </Link>
                </div>
            </section>

            {/* Services Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard 
                        title="Format Conversion"
                        description="Professional digitization of vinyl records, cassettes, reel-to-reel tapes, and rare formats."
                        icon="🎵"
                    />
                    <ServiceCard 
                        title="Audio Restoration"
                        description="Advanced noise reduction, click removal, and audio enhancement using cutting-edge technology."
                        icon="🔧"
                    />
                    <ServiceCard 
                        title="DAW Integration"
                        description="Tracks delivered ready for Pro Tools, Logic, Reaper, Ableton, and Cubase/Nuendo with session files included."
                        icon="💻"
                    />
                </div>
            </section>

            {/* Supported Formats */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-12">Legacy Formats We Handle</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                        'Vinyl Records', 'Cassette Tapes', 'Reel-to-Reel', 'DAT Tapes',
                        '8-Track Cartridges', 'MiniDisc', 'Compact Disc', 'Wire Recordings',
                        'Dictaphone Belts', 'Wax Cylinders', 'Lacquer Discs', 'Magnetic Drums'
                    ].map((format) => (
                        <div key={format} className="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center">
                            <div className="text-sm font-medium">{format}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Legacy Audio Lab?</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <FeatureCard 
                        title="Precision Engineering"
                        description="State-of-the-art equipment and meticulous attention to detail ensure perfect extraction every time."
                    />
                    <FeatureCard 
                        title="Format Expertise"
                        description="Decades of experience handling rare and obsolete audio formats that others can't process."
                    />
                    <FeatureCard 
                        title="Professional Quality"
                        description="Studio-grade results suitable for commercial releases, archival preservation, and professional production."
                    />
                    <FeatureCard 
                        title="Custom Delivery"
                        description="Receive your audio in any format, sample rate, and bit depth to match your project requirements."
                    />
                </div>
            </section>
        </div>
    );
}

function ServiceCard({ title, description, icon }) {
    return (
        <Card title={title} className="text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <p className="text-blue-100">{description}</p>
        </Card>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div className="bg-blue-800 bg-opacity-30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-200">{title}</h3>
            <p className="text-blue-100">{description}</p>
        </div>
    );
}
