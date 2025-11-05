import { QuoteForm } from 'components/quote-form';

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
                        <QuoteForm />
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