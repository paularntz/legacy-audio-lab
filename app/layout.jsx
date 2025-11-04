import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Legacy Audio Lab',
        default: 'Legacy Audio Lab - Professional Audio Digitization & Restoration'
    },
    description: 'Professional digitization and restoration of legacy audio formats. We extract pristine audio from vinyl, tape, and rare formats, delivering tracks ready for Pro Tools, Logic, Reaper, Ableton, and Cubase/Nuendo.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
