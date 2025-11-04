import { Card } from 'components/card';

export const metadata = {
    title: 'Services - Professional Audio Digitization',
    description: 'Professional digitization services for all legacy audio formats. Competitive pricing, studio-grade quality, and fast turnaround times.'
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section>
                <h1 className="mb-6 text-center">Our Services</h1>
                <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
                    Professional audio digitization with studio-grade equipment and competitive pricing. 
                    All transfers include noise reduction and professional mastering.
                </p>
            </section>

            {/* Pricing Table */}
            <section>
                <h2 className="text-center mb-12">Transparent Pricing</h2>
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Professional Multi-Track */}
                        <PricingCard 
                            title="Professional Multi-Track"
                            popular={true}
                            formats={[
                                "ADAT Tapes (8-track)",
                                "Reel-to-Reel (4/8/16/24-track)",
                                "DAT Tapes",
                                "DTRS (DA-88/98)"
                            ]}
                            pricing={{
                                perTape: "$45",
                                details: "Up to 60 minutes per tape"
                            }}
                            features={[
                                "Professional noise reduction",
                                "Individual track isolation", 
                                "Multi-format delivery",
                                "Pro Tools, Logic, Reaper, Ableton & Cubase session files",
                                "48kHz/24-bit quality"
                            ]}
                        />

                        {/* Stereo Formats */}
                        <PricingCard 
                            title="Stereo Audio"
                            formats={[
                                "Vinyl Records (33/45/78 RPM)",
                                "Cassette Tapes", 
                                "Compact Cassette",
                                "MiniDisc"
                            ]}
                            pricing={{
                                perTape: "$25",
                                details: "Up to 90 minutes"
                            }}
                            features={[
                                "Click & pop removal",
                                "Wow & flutter correction",
                                "Speed correction",
                                "Multiple output formats",
                                "44.1kHz/16-bit or higher"
                            ]}
                        />

                        {/* Rare & Vintage */}
                        <PricingCard 
                            title="Rare & Vintage"
                            formats={[
                                "Wire Recordings",
                                "Wax Cylinders",
                                "Lacquer Discs",
                                "8-Track Cartridges",
                                "Dictaphone Belts"
                            ]}
                            pricing={{
                                perItem: "$75",
                                details: "Custom quote for condition"
                            }}
                            features={[
                                "Specialized equipment",
                                "Conservation handling",
                                "Historical preservation",
                                "Custom transfer methods",
                                "Archival documentation"
                            ]}
                        />
                    </div>

                    {/* Volume Discounts */}
                    <div className="mt-12 bg-blue-800 bg-opacity-30 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-center mb-6">Volume Discounts Available</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-blue-300">10+ Items</div>
                                <div className="text-lg">15% Discount</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-300">25+ Items</div>
                                <div className="text-lg">25% Discount</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-300">50+ Items</div>
                                <div className="text-lg">35% Discount</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section>
                <h2 className="text-center mb-12">Additional Services</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ServiceCard 
                        title="Audio Restoration"
                        price="Starting at $50/hour"
                        description="Advanced noise reduction, click removal, speed correction, and audio enhancement using professional software and techniques."
                        features={["iZotope RX Professional", "Manual editing", "Custom processing", "A/B comparisons"]}
                    />
                    <ServiceCard 
                        title="Mastering & Enhancement" 
                        price="$75/song"
                        description="Professional mastering to bring your restored audio to modern standards while preserving the original character."
                        features={["EQ & dynamics processing", "Stereo imaging", "Level optimization", "Multiple format delivery"]}
                    />
                    <ServiceCard 
                        title="Rush Service"
                        price="+100% of base price"
                        description="Need your audio quickly? Our rush service guarantees 48-hour turnaround for most formats."
                        features={["48-hour guarantee", "Priority processing", "Status updates", "Express shipping included"]}
                    />
                    <ServiceCard 
                        title="Archive Consultation"
                        price="$150/hour"
                        description="Professional consultation for large archives, museums, and institutions with specialized preservation needs."
                        features={["Custom workflows", "Metadata standards", "Storage recommendations", "Training included"]}
                    />
                </div>
            </section>

            {/* Process */}
            <section>
                <h2 className="text-center mb-12">Our Process</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    <ProcessStep 
                        number="1"
                        title="Assessment"
                        description="We carefully evaluate your media and provide a detailed quote with timeline."
                    />
                    <ProcessStep 
                        number="2" 
                        title="Transfer"
                        description="Professional digitization using calibrated equipment and optimal playback conditions."
                    />
                    <ProcessStep 
                        number="3"
                        title="Processing"
                        description="Audio restoration, noise reduction, and enhancement tailored to each format."
                    />
                    <ProcessStep 
                        number="4"
                        title="Delivery"
                        description="Files delivered in your preferred format with detailed documentation."
                    />
                </div>
            </section>
        </div>
    );
}

function PricingCard({ title, popular = false, formats, pricing, features }) {
    return (
        <div className={`relative bg-blue-800 bg-opacity-30 p-6 rounded-lg ${popular ? 'ring-2 ring-blue-400' : ''}`}>
            {popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                    </span>
                </div>
            )}
            <h3 className="text-xl font-bold mb-4 text-blue-200">{title}</h3>
            
            <div className="mb-6">
                <div className="text-3xl font-bold text-white">{pricing.perTape || pricing.perItem}</div>
                <div className="text-blue-200 text-sm">{pricing.details}</div>
            </div>

            <div className="mb-6">
                <h4 className="font-semibold mb-2 text-blue-200">Formats:</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                    {formats.map((format, index) => (
                        <li key={index}>• {format}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-semibold mb-2 text-blue-200">Includes:</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                    {features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ServiceCard({ title, price, description, features }) {
    return (
        <Card title={title}>
            <div className="mb-4">
                <div className="text-xl font-bold text-blue-300">{price}</div>
            </div>
            <p className="text-blue-100 mb-4">{description}</p>
            <ul className="text-sm text-blue-200 space-y-1">
                {features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                ))}
            </ul>
        </Card>
    );
}

function ProcessStep({ number, title, description }) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{number}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-200">{title}</h3>
            <p className="text-blue-100 text-sm">{description}</p>
        </div>
    );
}