import { Card } from 'components/card';

export const metadata = {
    title: 'Contact - Legacy Audio Lab',
    description: 'Get in touch with Legacy Audio Lab for professional audio digitization services. Free quotes and expert consultation available.'
};

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="mb-6">Contact Us</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    Ready to preserve your audio heritage? Contact us for a free consultation 
                    and detailed quote tailored to your specific needs.
                </p>
            </section>

            {/* Contact Information & Form */}
            <section>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="mb-8">Get in Touch</h2>
                        
                        <div className="space-y-8">
                            <ContactInfo 
                                icon="📞"
                                title="Phone"
                                info="615-390-3848"
                                description="Monday - Friday, 9 AM - 6 PM EST"
                            />
                            
                            <ContactInfo 
                                icon="✉️"
                                title="Email"
                                info="hello@legacyaudiolab.com"
                                description="We typically respond within 4 hours"
                            />
                            
                            <ContactInfo 
                                icon="📍"
                                title="Studio Address"
                                info="8445 Rolling Hills Dr. Nashville, TN 37221"
                                description="Professional facility with secure media handling"
                            />
                            
                            <ContactInfo 
                                icon="🚚"
                                title="Shipping"
                                info="We accept media shipments nationwide"
                                description="Insured shipping labels provided upon request"
                            />
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4 text-blue-200">Business Hours</h3>
                            <div className="bg-blue-800 bg-opacity-30 p-6 rounded-lg">
                                <div className="space-y-2 text-blue-100">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card title="Request a Quote">
                            <form 
                                className="space-y-6"
                                name="quote-request"
                                method="POST"
                                action="/success"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={(e) => {
                                    // Let Netlify handle the submission
                                    // Don't prevent default - let the native form submission happen
                                }}
                            >
                                <input type="hidden" name="form-name" value="quote-request" />
                                <div style={{ display: 'none' }}>
                                    <label>
                                        Don't fill this out if you're human: <input name="bot-field" />
                                    </label>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-blue-200 mb-2">
                                            First Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="firstName" 
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-blue-200 mb-2">
                                            Last Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="lastName" 
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Smith"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                                        Email Address *
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-2">
                                        Phone Number
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone"
                                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium text-blue-200 mb-2">
                                        Project Type *
                                    </label>
                                    <select 
                                        id="projectType" 
                                        name="projectType"
                                        required
                                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="">Select a project type</option>
                                        <option value="adat">ADAT Tapes</option>
                                        <option value="reel-to-reel">Reel-to-Reel</option>
                                        <option value="vinyl">Vinyl Records</option>
                                        <option value="cassette">Cassette Tapes</option>
                                        <option value="dat">DAT Tapes</option>
                                        <option value="rare">Rare/Vintage Formats</option>
                                        <option value="multiple">Multiple Formats</option>
                                        <option value="restoration">Audio Restoration</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-medium text-blue-200 mb-2">
                                        Approximate Quantity
                                    </label>
                                    <input 
                                        type="number" 
                                        id="quantity" 
                                        name="quantity"
                                        min="1"
                                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="How many items?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-blue-200 mb-2">
                                        Timeline
                                    </label>
                                    <select 
                                        id="timeline" 
                                        name="timeline"
                                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="">When do you need this completed?</option>
                                        <option value="rush">Rush (48 hours)</option>
                                        <option value="1-week">Within 1 week</option>
                                        <option value="2-weeks">Within 2 weeks</option>
                                        <option value="1-month">Within 1 month</option>
                                        <option value="flexible">Timeline flexible</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                                        Project Details
                                    </label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        rows="4"
                                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Please describe your project, media condition, and any special requirements..."
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <input 
                                        type="checkbox" 
                                        id="newsletter" 
                                        name="newsletter"
                                        className="mt-1 mr-3"
                                    />
                                    <label htmlFor="newsletter" className="text-sm text-blue-200">
                                        I'd like to receive updates about new services and audio preservation tips
                                    </label>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Send Quote Request
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section>
                <h2 className="text-center mb-12">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    <FAQItem 
                        question="How long does the digitization process take?"
                        answer="Standard projects typically take 1-2 weeks from receipt. Rush service (48 hours) is available for an additional fee. Complex restoration projects may take longer depending on the scope of work required."
                    />
                    <FAQItem 
                        question="What condition should my media be in?"
                        answer="We accept media in any condition, from pristine to severely damaged. We specialize in recovering audio from challenging sources. Our assessment will determine what's recoverable and any additional restoration needed."
                    />
                    <FAQItem 
                        question="What formats will you deliver my audio in?"
                        answer="We can deliver in any format you need: WAV, AIFF, MP3, FLAC, and more. We also provide Pro Tools, Logic, or Ableton project files upon request. Standard delivery is 48kHz/24-bit WAV files."
                    />
                    <FAQItem 
                        question="Is my media safe during the process?"
                        answer="Absolutely. We maintain strict chain-of-custody procedures, climate-controlled storage, and comprehensive insurance. Your original media is handled with archival care and returned exactly as received."
                    />
                    <FAQItem 
                        question="Do you offer shipping services?"
                        answer="Yes, we provide insured shipping labels for sending your media to us. We also offer secure return shipping with tracking and insurance coverage for your peace of mind."
                    />
                    <FAQItem 
                        question="Can you handle large archive projects?"
                        answer="Yes, we regularly work with studios, museums, and institutions on large-scale digitization projects. We offer custom workflow development, metadata standards, and volume pricing for extensive collections."
                    />
                </div>
            </section>
        </div>
    );
}

function ContactInfo({ icon, title, info, description }) {
    return (
        <div className="flex items-start space-x-4">
            <div className="text-3xl">{icon}</div>
            <div>
                <h3 className="text-lg font-bold text-blue-200">{title}</h3>
                <div className="text-white font-semibold">{info}</div>
                <div className="text-blue-300 text-sm">{description}</div>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }) {
    return (
        <div className="bg-blue-800 bg-opacity-30 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-blue-200">{question}</h3>
            <p className="text-blue-100">{answer}</p>
        </div>
    );
}