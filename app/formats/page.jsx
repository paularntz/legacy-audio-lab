import { Card } from 'components/card';

export const metadata = {
    title: 'Supported Formats - Legacy Audio Lab',
    description: 'Complete guide to all audio formats we digitize, from professional studio tapes to rare vintage recordings. Expert handling of 200+ format types.'
};

export default function FormatsPage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="mb-6">Supported Audio Formats</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    We specialize in digitizing over 200 different audio formats, from current 
                    professional standards to the rarest vintage recordings. If it plays audio, 
                    we can likely transfer it.
                </p>
            </section>

            {/* Format Categories */}
            <section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <FormatCategory 
                        title="Professional Multi-Track"
                        description="Studio recording formats used for professional music production"
                        icon="🎙️"
                        formats={[
                            { name: "ADAT (S-VHS)", specs: "8-track, 16/20/24-bit" },
                            { name: "ADAT XT/XT20", specs: "Type II S-VHS, 20/24-bit" },
                            { name: "2-inch 24-track", specs: "15/30 IPS, Dolby SR/A" },
                            { name: "1-inch 8/16-track", specs: "15/30 IPS, various brands" },
                            { name: "½-inch 4-track", specs: "15/30 IPS, Teac/Tascam" },
                            { name: "DTRS (DA-88/98)", specs: "Hi8, 16/20/24-bit" },
                            { name: "Modular Digital Multitrack", specs: "Various proprietary formats" }
                        ]}
                        pricing="$45 per tape (up to 60 min)"
                    />

                    <FormatCategory 
                        title="Professional Stereo Masters"
                        description="High-quality stereo formats used for mastering and archival"
                        icon="🎚️"
                        formats={[
                            { name: "½-inch Stereo", specs: "15/30 IPS, NAB/IEC EQ" },
                            { name: "¼-inch Stereo", specs: "7.5/15/30 IPS" },
                            { name: "DAT (Digital Audio Tape)", specs: "48kHz/16-bit, professional" },
                            { name: "PCM-F1/Beta/VHS", specs: "Sony digital format" },
                            { name: "DCC (Digital Compact Cassette)", specs: "Philips format" },
                            { name: "R-DAT", specs: "Rotary head digital" },
                            { name: "Nagra IV-S", specs: "Portable professional" }
                        ]}
                        pricing="$35 per tape"
                    />

                    <FormatCategory 
                        title="Vinyl & Disc Formats"
                        description="All speeds and sizes of vinyl records and specialty discs"
                        icon="💿"
                        formats={[
                            { name: "LP Records", specs: "33⅓ RPM, 12-inch" },
                            { name: "45 RPM Singles", specs: "7-inch, large/small hole" },
                            { name: "78 RPM Records", specs: "Various sizes, shellac/vinyl" },
                            { name: "16⅔ RPM", specs: "Transcription/talking books" },
                            { name: "Lacquer Discs", specs: "Acetate, various sizes" },
                            { name: "Transcription Discs", specs: "Radio broadcast, 16-inch" },
                            { name: "Flexi Discs", specs: "Flexible plastic records" }
                        ]}
                        pricing="$25 per side"
                    />

                    <FormatCategory 
                        title="Consumer Tape Formats"
                        description="Home recording and consumer audio tape formats"
                        icon="📼"
                        formats={[
                            { name: "Compact Cassette", specs: "Normal/CrO₂/Metal, various lengths" },
                            { name: "8-Track Cartridge", specs: "Stereo, endless loop" },
                            { name: "Reel-to-Reel Home", specs: "¼-inch, 1⅞-15 IPS" },
                            { name: "Microcassette", specs: "Dictation quality" },
                            { name: "Mini Cassette", specs: "Philips format" },
                            { name: "Elcaset", specs: "Sony ¼-inch cassette" },
                            { name: "Playtape", specs: "2-track, endless loop" }
                        ]}
                        pricing="$25 per tape"
                    />

                    <FormatCategory 
                        title="Digital Formats"
                        description="Early digital audio formats and memory media"
                        icon="💾"
                        formats={[
                            { name: "MiniDisc", specs: "ATRAC compression" },
                            { name: "Compact Disc", specs: "Red Book audio" },
                            { name: "CD-R/CD-RW", specs: "Burned discs" },
                            { name: "DVD-Audio", specs: "High-resolution audio" },
                            { name: "SACD", specs: "Super Audio CD, DSD" },
                            { name: "Memory Cards", specs: "CF, SD, various formats" },
                            { name: "Hard Drives", specs: "Audio files recovery" }
                        ]}
                        pricing="$25 per disc/media"
                    />

                    <FormatCategory 
                        title="Rare & Vintage Formats"
                        description="Historical and obsolete audio recording formats"
                        icon="🏛️"
                        formats={[
                            { name: "Edison Cylinders", specs: "Wax, Blue Amberol" },
                            { name: "Wire Recordings", specs: "Magnetic wire, various speeds" },
                            { name: "Dictaphone Belts", specs: "Magnetic belt dictation" },
                            { name: "SoundScriber Discs", specs: "Vertical cut discs" },
                            { name: "Gray Audograph", specs: "Plastic disc dictation" },
                            { name: "Tefifon Cartridges", specs: "Endless tape cartridge" },
                            { name: "RCA Sound Tape", specs: "Early magnetic tape" }
                        ]}
                        pricing="$75+ per item (condition dependent)"
                    />

                </div>
            </section>

            {/* Condition Assessment */}
            <section>
                <h2 className="text-center mb-12">Media Condition Assessment</h2>
                <div className="max-w-5xl mx-auto">
                    <p className="text-blue-100 text-center mb-8">
                        We accept media in any condition. Our assessment determines the best transfer approach 
                        and any restoration needed to achieve optimal results.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                        <ConditionCard 
                            level="Excellent"
                            description="Well-stored media with minimal wear"
                            characteristics={["No visible damage", "Proper storage history", "Original packaging"]}
                            approach="Standard transfer protocols"
                            color="text-green-400"
                        />
                        
                        <ConditionCard 
                            level="Good"
                            description="Minor wear but fully playable"
                            characteristics={["Light scratches/dust", "Some oxide shedding", "Minor deformation"]}
                            approach="Careful cleaning and setup"
                            color="text-blue-400"
                        />
                        
                        <ConditionCard 
                            level="Fair"
                            description="Moderate damage requiring restoration"
                            characteristics={["Visible wear patterns", "Some dropouts", "Storage damage"]}
                            approach="Advanced restoration techniques"
                            color="text-yellow-400"
                        />
                        
                        <ConditionCard 
                            level="Poor"
                            description="Severe damage, specialized recovery needed"
                            characteristics={["Major physical damage", "Mold contamination", "Breakage/warping"]}
                            approach="Custom recovery methods"
                            color="text-red-400"
                        />
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section>
                <h2 className="text-center mb-12">Technical Specifications</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    
                    <Card title="Standard Delivery Formats">
                        <div className="space-y-4">
                            <TechSpec 
                                format="Broadcast Wave (BWF)"
                                specs="48kHz/24-bit, metadata embedded"
                                use="Professional archival standard"
                            />
                            <TechSpec 
                                format="WAV (PCM)"
                                specs="44.1-192kHz, 16/24/32-bit"
                                use="Universal compatibility"
                            />
                            <TechSpec 
                                format="AIFF"
                                specs="Mac-native, same quality as WAV"
                                use="Apple ecosystem workflow"
                            />
                            <TechSpec 
                                format="FLAC"
                                specs="Lossless compression, ~50% size"
                                use="Efficient archival storage"
                            />
                        </div>
                    </Card>

                    <Card title="Advanced Options">
                        <div className="space-y-4">
                            <TechSpec 
                                format="Pro Tools Sessions"
                                specs="Multi-track projects with edits"
                                use="Professional post-production"
                            />
                            <TechSpec 
                                format="Logic Pro Projects"
                                specs="Apple DAW native format"
                                use="Mac-based production workflow"
                            />
                            <TechSpec 
                                format="Ableton Live Sets"
                                specs="Session view with markers"
                                use="Electronic music production"
                            />
                            <TechSpec 
                                format="DDP Masters"
                                specs="Disc Description Protocol"
                                use="CD/vinyl mastering preparation"
                            />
                        </div>
                    </Card>

                </div>
            </section>

            {/* Equipment Showcase */}
            <section>
                <h2 className="text-center mb-12">Our Playback Equipment</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <EquipmentCard 
                        category="Tape Machines"
                        equipment={[
                            "Studer A800/A820 Multitrack",
                            "Ampex ATR-102 Stereo",
                            "Nagra IV-S Portable",
                            "Revox A77/B77",
                            "Technics RS-1500/1700"
                        ]}
                        specialty="Meticulously maintained and calibrated"
                    />
                    
                    <EquipmentCard 
                        category="Turntables"
                        equipment={[
                            "Technics SP-15 Direct Drive",
                            "Garrard 301/401",
                            "EMT 927/948",
                            "Thorens TD-124",
                            "Custom 78 RPM systems"
                        ]}
                        specialty="Variable speed control for pitch correction"
                    />
                    
                    <EquipmentCard 
                        category="Digital Systems"
                        equipment={[
                            "ADAT XT/XT20",
                            "Tascam DA-88/98",
                            "Sony PCM-F1",
                            "Panasonic SV-3700 DAT",
                            "Nakamichi Dragon"
                        ]}
                        specialty="Maintained with OEM parts"
                    />

                </div>
            </section>

            {/* Pricing Summary */}
            <section>
                <h2 className="text-center mb-12">Format Pricing Summary</h2>
                <div className="bg-blue-800 bg-opacity-30 p-8 rounded-lg max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PricingSummary 
                            category="Multi-Track Professional"
                            price="$45"
                            unit="per tape"
                            includes="ADAT, Reel-to-Reel, DTRS"
                        />
                        <PricingSummary 
                            category="Stereo Masters"
                            price="$35"
                            unit="per tape"
                            includes="DAT, ½-inch, ¼-inch"
                        />
                        <PricingSummary 
                            category="Consumer Formats"
                            price="$25"
                            unit="per item"
                            includes="Cassette, Vinyl, MiniDisc"
                        />
                        <PricingSummary 
                            category="Rare & Vintage"
                            price="$75+"
                            unit="per item"
                            includes="Cylinders, Wire, Custom work"
                        />
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-blue-200 text-sm">
                            Volume discounts available • Rush service (+100%) • Free condition assessment
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FormatCategory({ title, description, icon, formats, pricing }) {
    return (
        <Card>
            <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{icon}</span>
                <div>
                    <h3 className="text-xl font-bold text-blue-200">{title}</h3>
                    <p className="text-blue-300 text-sm">{description}</p>
                </div>
            </div>
            
            <div className="space-y-2 mb-4">
                {formats.map((format, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-3">
                        <div className="font-semibold text-blue-100 text-sm">{format.name}</div>
                        <div className="text-blue-300 text-xs">{format.specs}</div>
                    </div>
                ))}
            </div>
            
            <div className="border-t border-blue-600 pt-3">
                <div className="text-blue-200 font-semibold text-sm">Starting at {pricing}</div>
            </div>
        </Card>
    );
}

function ConditionCard({ level, description, characteristics, approach, color }) {
    return (
        <div className="bg-blue-800 bg-opacity-30 p-6 rounded-lg text-center">
            <h3 className={`text-lg font-bold mb-2 ${color}`}>{level}</h3>
            <p className="text-blue-200 text-sm mb-4">{description}</p>
            <div className="mb-4">
                <div className="text-xs font-semibold text-blue-300 mb-2">Typical Issues:</div>
                <ul className="text-xs text-blue-100 space-y-1">
                    {characteristics.map((char, index) => (
                        <li key={index}>• {char}</li>
                    ))}
                </ul>
            </div>
            <div className="border-t border-blue-600 pt-3">
                <div className="text-xs font-semibold text-blue-200">{approach}</div>
            </div>
        </div>
    );
}

function TechSpec({ format, specs, use }) {
    return (
        <div className="border-l-2 border-blue-600 pl-4">
            <div className="font-semibold text-blue-200">{format}</div>
            <div className="text-blue-300 text-sm">{specs}</div>
            <div className="text-blue-400 text-xs italic">{use}</div>
        </div>
    );
}

function EquipmentCard({ category, equipment, specialty }) {
    return (
        <Card title={category}>
            <ul className="space-y-2 text-blue-100 text-sm mb-4">
                {equipment.map((item, index) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
            <div className="border-t border-blue-600 pt-3">
                <div className="text-blue-300 text-xs italic">{specialty}</div>
            </div>
        </Card>
    );
}

function PricingSummary({ category, price, unit, includes }) {
    return (
        <div className="text-center">
            <h3 className="font-bold text-blue-200 mb-2">{category}</h3>
            <div className="text-2xl font-bold text-blue-300">{price}</div>
            <div className="text-blue-400 text-sm">{unit}</div>
            <div className="text-blue-100 text-xs mt-2">{includes}</div>
        </div>
    );
}