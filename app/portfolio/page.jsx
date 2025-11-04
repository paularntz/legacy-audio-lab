import { Card } from 'components/card';

export const metadata = {
    title: 'Portfolio - Legacy Audio Lab',
    description: 'Explore our portfolio of professional audio digitization projects, from Grammy-winning masters to precious family recordings.'
};

export default function PortfolioPage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="mb-6">Our Portfolio</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    From Grammy-winning master recordings to cherished family moments, 
                    we've helped preserve thousands of hours of audio heritage with 
                    meticulous care and professional results.
                </p>
            </section>

            {/* Featured Projects */}
            <section>
                <h2 className="text-center mb-12">Featured Projects</h2>
                <div className="space-y-12">
                    
                    <FeaturedProject 
                        title="Grammy-Winning Jazz Archive Restoration"
                        category="Professional Studio"
                        challenge="A collection of 1960s jazz recordings on deteriorating 2-inch multitrack tape, including unreleased sessions from legendary artists."
                        solution="Custom baking process to stabilize tape, followed by transfer using restored Studer A800 24-track machine. Advanced spectral repair removed dropout artifacts while preserving the natural tape saturation."
                        result="Successfully recovered 47 songs across 23 reels, including 8 previously lost master takes. The restored recordings were used for a Grammy-winning reissue album."
                        formats={["2-inch 24-track tape", "½-inch stereo masters", "Lacquer reference discs"]}
                        deliverables={["96kHz/24-bit WAV files", "Pro Tools HDX sessions", "Archival documentation", "DDP masters for pressing"]}
                    />

                    <FeaturedProject 
                        title="Broadcast Archive Digitization"
                        category="Museum & Institution"
                        challenge="Radio station's complete archive spanning 40 years: 15,000+ items including live performances, interviews, and commercials on various obsolete formats."
                        solution="Developed custom workflow for batch processing multiple formats. Created metadata standards and cataloging system. Restored playback equipment for rare cartridge formats."
                        result="Complete digital archive with searchable metadata, enabling public access to historical broadcasts for the first time in decades."
                        formats={["Cart machines", "Reel-to-reel (various speeds)", "DAT tapes", "Vinyl transcription discs", "Wire recordings"]}
                        deliverables={["BWF-compliant files", "Metadata database", "Public access platform", "Preservation copies"]}
                    />

                    <FeaturedProject 
                        title="Family Heritage Collection"
                        category="Personal Archive"
                        challenge="Four generations of family recordings spanning 80 years, including damaged cylinders, warped vinyl, and deteriorating tape formats."
                        solution="Gentle restoration techniques preserving historical character. Custom playback solutions for Edison cylinders. Careful speed correction for home recordings."
                        result="Precious family voices and music preserved for future generations, including great-grandfather's WWI-era cylinder recordings."
                        formats={["Edison wax cylinders", "Home-recorded vinyl", "Cassette tapes", "Reel-to-reel home recordings", "Dictaphone belts"]}
                        deliverables={["Digital family archive", "Enhanced listening copies", "Historical documentation", "Custom USB presentation"]}
                    />

                    <FeaturedProject 
                        title="Indie Label Master Tape Recovery"
                        category="Record Label"
                        challenge="Water-damaged master tapes from a flooded studio containing unreleased albums from emerging artists. Tape had severe mold contamination."
                        solution="Specialized cleaning and restoration protocol developed for mold-contaminated media. Multiple transfer attempts to capture best possible audio from compromised sections."
                        result="Recovered 85% of the masters in releasable quality, enabling the label to complete their artists' albums and maintain their release schedule."
                        formats={["½-inch analog masters", "ADAT tapes", "DAT safety copies"]}
                        deliverables={["Restored master files", "Ableton Live projects", "Damage assessment reports", "Archival storage recommendations"]}
                    />

                </div>
            </section>

            {/* Client Testimonials */}
            <section>
                <h2 className="text-center mb-12">Client Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    
                    <TestimonialCard 
                        quote="Legacy Audio Lab saved our Grammy project. When everyone else said the tapes were too damaged, they found a way. The quality exceeded our expectations - you can't tell these were nearly 60-year-old tapes."
                        author="Maria Santos"
                        title="Producer, Blue Note Records"
                        project="Jazz Archive Restoration"
                    />

                    <TestimonialCard 
                        quote="Professional, meticulous, and incredibly knowledgeable. They handled our priceless family recordings like they were their own treasures. The results brought tears to our eyes."
                        author="Robert Chen"
                        title="Family Archive Client"
                        project="4-Generation Family Collection"
                    />

                    <TestimonialCard 
                        quote="Their expertise with vintage formats is unmatched. We've sent them everything from wire recordings to ADAT tapes - they always find a way to extract perfect audio."
                        author="Dr. Jennifer Walsh"
                        title="Curator, National Music Archives"
                        project="Institutional Archive Project"
                    />

                    <TestimonialCard 
                        quote="When our studio flooded, we thought we'd lost years of work. Legacy Audio Lab's water damage restoration process saved our entire catalog. They're miracle workers."
                        author="David Kim"
                        title="Owner, Velocity Records"
                        project="Flood Damage Recovery"
                    />

                </div>
            </section>

            {/* Project Statistics */}
            <section>
                <h2 className="text-center mb-12">Impact by the Numbers</h2>
                <div className="bg-blue-800 bg-opacity-30 p-8 rounded-lg">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <ProjectStat 
                            number="50,000+"
                            label="Hours Digitized"
                            description="Equivalent to 25 years of continuous audio"
                        />
                        <ProjectStat 
                            number="500+"
                            label="Projects Completed"
                            description="From individual tapes to complete archives"
                        />
                        <ProjectStat 
                            number="95%"
                            label="Recovery Rate"
                            description="Even from severely damaged media"
                        />
                        <ProjectStat 
                            number="200+"
                            label="Format Types"
                            description="Including many obsolete formats"
                        />
                    </div>
                </div>
            </section>

            {/* Format Expertise Showcase */}
            <section>
                <h2 className="text-center mb-12">Format Expertise</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    
                    <FormatCategory 
                        title="Professional Studio Formats"
                        description="Master tape formats used in professional recording studios"
                        formats={[
                            "2-inch 24-track tape",
                            "ADAT 8-track digital",
                            "½-inch stereo masters", 
                            "¼-inch mono/stereo",
                            "DAT professional",
                            "DTRS (DA-88/98)"
                        ]}
                        expertise="99.8% success rate"
                    />

                    <FormatCategory 
                        title="Broadcast & Radio"
                        description="Formats used in radio and television broadcasting"
                        formats={[
                            "Cart machines (various)",
                            "Transcription discs",
                            "Wire recordings",
                            "Broadcast reel-to-reel",
                            "Betacam SP audio",
                            "U-matic audio tracks"
                        ]}
                        expertise="Specialized playback equipment"
                    />

                    <FormatCategory 
                        title="Consumer & Rare"
                        description="Home recording and obsolete consumer formats"
                        formats={[
                            "Vinyl records (all speeds)",
                            "Cassette tapes",
                            "8-track cartridges",
                            "Edison cylinders",
                            "Dictaphone belts",
                            "Lacquer home recordings"
                        ]}
                        expertise="Custom restoration techniques"
                    />

                </div>
            </section>
        </div>
    );
}

function FeaturedProject({ title, category, challenge, solution, result, formats, deliverables }) {
    return (
        <div className="bg-blue-800 bg-opacity-30 p-8 rounded-lg">
            <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-blue-200">{title}</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {category}
                    </span>
                </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Challenge</h4>
                        <p className="text-blue-100">{challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
                        <p className="text-blue-100">{solution}</p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Result</h4>
                        <p className="text-blue-100">{result}</p>
                    </div>
                </div>
                
                <div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Formats Handled</h4>
                        <ul className="text-blue-100 space-y-1">
                            {formats.map((format, index) => (
                                <li key={index}>• {format}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Deliverables</h4>
                        <ul className="text-blue-100 space-y-1">
                            {deliverables.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ quote, author, title, project }) {
    return (
        <Card>
            <blockquote className="text-blue-100 italic mb-4">
                "{quote}"
            </blockquote>
            <div className="border-t border-blue-600 pt-4">
                <div className="font-semibold text-blue-200">{author}</div>
                <div className="text-blue-300 text-sm">{title}</div>
                <div className="text-blue-400 text-xs">{project}</div>
            </div>
        </Card>
    );
}

function ProjectStat({ number, label, description }) {
    return (
        <div>
            <div className="text-4xl font-bold text-blue-300 mb-2">{number}</div>
            <div className="text-lg font-semibold text-blue-200 mb-1">{label}</div>
            <div className="text-sm text-blue-100">{description}</div>
        </div>
    );
}

function FormatCategory({ title, description, formats, expertise }) {
    return (
        <Card title={title}>
            <p className="text-blue-200 text-sm mb-4">{description}</p>
            <ul className="text-blue-100 text-sm space-y-1 mb-4">
                {formats.map((format, index) => (
                    <li key={index}>• {format}</li>
                ))}
            </ul>
            <div className="border-t border-blue-600 pt-3">
                <div className="text-blue-300 font-semibold text-sm">{expertise}</div>
            </div>
        </Card>
    );
}