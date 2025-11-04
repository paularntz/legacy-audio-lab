import Link from 'next/link';
import { Logo } from './logo';

export function Footer() {
    return (
        <footer className="pt-24 pb-12 sm:pt-32 sm:pb-16 border-t border-slate-600 mt-16">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <Logo size="small" />
                        </div>
                        <p className="text-blue-200 text-sm mb-4 max-w-md">
                            Professional audio digitization and restoration services. 
                            Preserving your audio heritage with precision and care.
                        </p>
                        <div className="text-sm text-blue-300 space-y-1">
                            <div>8445 Rolling Hills Dr.</div>
                            <div>Nashville, TN 37221</div>
                            <div>615-390-3848</div>
                            <div>hello@legacyaudiolab.com</div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-blue-200 mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-blue-300">
                            <li><Link href="/services" className="hover:text-white transition-colors">Audio Digitization</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">ADAT Transfer</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Vinyl Restoration</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Tape Conversion</Link></li>
                            <li><Link href="/formats" className="hover:text-white transition-colors">All Formats</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-blue-200 mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-blue-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-600 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-blue-300 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Legacy Audio Lab. All rights reserved.
                    </div>
                    <div className="text-sm text-blue-400">
                        Professional audio digitization • Nashville, TN
                    </div>
                </div>
            </div>
        </footer>
    );
}
