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
            <body className="antialiased text-white bg-slate-800" style={{
                backgroundImage: 'url(/images/background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <div className="flex flex-col min-h-screen px-6 sm:px-12" style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.85)'
                }}>
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
