export const metadata = {
    title: 'Terms of Use - Legacy Audio Lab',
    description: 'Terms of use and service agreement for Legacy Audio Lab professional audio digitization services.'
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="mb-8">Terms of Use</h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
                <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg">
                    <p className="text-blue-200 text-sm mb-0">
                        <strong>Last Updated:</strong> November 4, 2025
                    </p>
                </div>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">1. Acceptance of Terms</h2>
                    <p className="text-blue-100 mb-4">
                        By engaging Legacy Audio Lab's services, you agree to be bound by these Terms of Use. 
                        These terms constitute a legally binding agreement between you and Legacy Audio Lab 
                        regarding the digitization and restoration services we provide.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">2. Service Description</h2>
                    <p className="text-blue-100 mb-4">
                        Legacy Audio Lab provides professional audio digitization, restoration, and format 
                        conversion services for various legacy audio formats including but not limited to:
                    </p>
                    <ul className="text-blue-100 mb-4 ml-6 space-y-2">
                        <li>• Vinyl records, cassette tapes, and reel-to-reel recordings</li>
                        <li>• ADAT tapes, DAT tapes, and other digital formats</li>
                        <li>• Rare and vintage audio formats</li>
                        <li>• Audio restoration and enhancement services</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">3. Media Handling and Liability</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">Media Care</h3>
                            <p className="text-blue-100">
                                We handle all media with professional care using industry-standard equipment and procedures. 
                                However, some media may be inherently fragile or damaged, and we cannot guarantee against 
                                further deterioration during the transfer process.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">Limitation of Liability</h3>
                            <p className="text-blue-100">
                                Legacy Audio Lab's liability is limited to the replacement cost of blank media of equivalent 
                                type. We are not liable for the loss of irreplaceable recordings or sentimental value. 
                                We recommend clients retain backup copies when possible.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">4. Intellectual Property and Copyright</h2>
                    <p className="text-blue-100 mb-4">
                        Clients warrant they own or have proper authorization for all submitted media. Legacy Audio Lab 
                        does not claim ownership of client materials and will not duplicate or distribute content without 
                        explicit written permission. Clients are responsible for ensuring compliance with all applicable 
                        copyright laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">5. Pricing and Payment</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">Pricing</h3>
                            <p className="text-blue-100">
                                Pricing is based on current published rates and may be subject to change. 
                                Custom projects will receive detailed quotes before work begins.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-blue-300">Payment Terms</h3>
                            <p className="text-blue-100">
                                Payment is due upon completion of services. We accept major credit cards, 
                                bank transfers, and business checks. Outstanding balances over 30 days may 
                                incur late fees.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">6. Turnaround Time and Delivery</h2>
                    <p className="text-blue-100 mb-4">
                        Standard turnaround time is 1-2 weeks from receipt of materials. Rush services are 
                        available for additional fees. Delivery dates are estimates and may vary based on 
                        project complexity, equipment availability, and media condition.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">7. Data Storage and Retention</h2>
                    <p className="text-blue-100 mb-4">
                        Digital files are retained on our secure servers for 30 days after delivery to allow 
                        for any necessary revisions. After this period, files may be permanently deleted unless 
                        extended storage arrangements have been made.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">8. Cancellation and Refunds</h2>
                    <p className="text-blue-100 mb-4">
                        Projects may be cancelled before work begins for a full refund. Partial refunds may 
                        be available for work in progress, calculated based on completed portions. Completed 
                        work is non-refundable unless we fail to deliver services as agreed.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">9. Dispute Resolution</h2>
                    <p className="text-blue-100 mb-4">
                        Any disputes will be resolved through binding arbitration in Nashville, Tennessee, 
                        under the rules of the American Arbitration Association. These terms are governed 
                        by Tennessee state law.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">10. Contact Information</h2>
                    <p className="text-blue-100">
                        Questions about these terms should be directed to:
                        <br />
                        <strong>Legacy Audio Lab</strong>
                        <br />
                        8445 Rolling Hills Dr. Nashville, TN 37221
                        <br />
                        Phone: 615-390-3848
                        <br />
                        Email: hello@legacyaudiolab.com
                    </p>
                </section>
            </div>
        </div>
    );
}