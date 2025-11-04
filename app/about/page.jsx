import { Card } from 'components/card';

export const metadata = {
    title: 'About - Legacy Audio Lab',
    description: 'Learn about Legacy Audio Lab\'s expertise in professional audio digitization, our team, and our commitment to preserving your precious recordings.'
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="mb-6">About Legacy Audio Lab</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    Founded on a passion for preserving audio history, Legacy Audio Lab combines decades of 
                    engineering expertise with cutting-edge technology to rescue your irreplaceable recordings.
                </p>
            </section>

            {/* Our Story */}
            <section>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="mb-6">Our Story</h2>
                        <div className="space-y-4 text-blue-100">
                            <p>
                                Legacy Audio Lab was born from a simple realization: countless hours of irreplaceable 
                                audio sit trapped on aging media formats, slowly degrading with each passing day. 
                                As professional audio engineers and restoration specialists, we couldn't stand by 
                                and watch history fade away.
                            </p>
                            <p>
                                What started as a mission to preserve family recordings has grown into a specialized 
                                service trusted by recording studios, museums, broadcasters, and families worldwide. 
                                We've rescued everything from Grammy-winning master tapes to cherished family 
                                conversations, treating each project with the same meticulous care.
                            </p>
                            <p>
                                Today, we operate state-of-the-art facilities equipped with vintage and modern 
                                playback equipment, ensuring we can handle any format that comes through our doors. 
                                Our team combines traditional craftsmanship with digital precision to achieve 
                                results that exceed expectations.
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-800 bg-opacity-30 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6 text-blue-200">By the Numbers</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <Statistic number="15+" label="Years Experience" />
                            <Statistic number="50,000+" label="Hours Digitized" />
                            <Statistic number="200+" label="Format Types" />
                            <Statistic number="99.8%" label="Success Rate" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="text-center">
                <h2 className="mb-8">Our Mission</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <MissionCard 
                            icon="🎯"
                            title="Precision"
                            description="Every transfer is executed with scientific precision, using calibrated equipment and documented processes to ensure accuracy."
                        />
                        <MissionCard 
                            icon="🔬"
                            title="Innovation"
                            description="We continuously invest in new technology and techniques to tackle challenging formats that others consider impossible."
                        />
                        <MissionCard 
                            icon="🛡️"
                            title="Preservation"
                            description="Beyond digitization, we're committed to helping preserve audio heritage for future generations to discover and enjoy."
                        />
                    </div>
                </div>
            </section>

            {/* Equipment & Technology */}
            <section>
                <h2 className="text-center mb-12">Our Equipment & Technology</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card title="Vintage Equipment">
                        <ul className="space-y-2 text-blue-100">
                            <li>• Studer A800 & A820 reel-to-reel decks</li>
                            <li>• Technics SP-15 & Garrard 301 turntables</li>
                            <li>• Nakamichi Dragon cassette deck</li>
                            <li>• ADAT XT20 & Alesis M20 machines</li>
                            <li>• Custom-built wire recorder playback systems</li>
                            <li>• Restored Edison cylinder players</li>
                        </ul>
                    </Card>
                    <Card title="Modern Processing">
                        <ul className="space-y-2 text-blue-100">
                            <li>• RME ADI-2 Pro & Lynx Aurora converters</li>
                            <li>• iZotope RX Advanced audio repair suite</li>
                            <li>• Pro Tools HDX & Logic Pro X systems</li>
                            <li>• Custom MATLAB processing algorithms</li>
                            <li>• Pristine Classical XR restoration tools</li>
                            <li>• Archival-grade digital storage systems</li>
                        </ul>
                    </Card>
                </div>
            </section>
        </div>
    );
}

function Statistic({ number, label }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">{number}</div>
            <div className="text-sm text-blue-200">{label}</div>
        </div>
    );
}

function MissionCard({ icon, title, description }) {
    return (
        <div className="bg-blue-800 bg-opacity-30 p-6 rounded-lg">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-3 text-blue-200">{title}</h3>
            <p className="text-blue-100">{description}</p>
        </div>
    );
}