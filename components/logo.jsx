export function Logo({ className = "", size = "default" }) {
    const sizes = {
        small: "h-8",
        default: "h-12",
        large: "h-16"
    };

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* SVG Logo Icon */}
            <svg 
                className={`${sizes[size]} w-auto`} 
                viewBox="0 0 120 60" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Vintage reel-to-reel tape */}
                <circle cx="20" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="20" cy="30" r="3" fill="currentColor"/>
                
                <circle cx="60" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="60" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="60" cy="30" r="3" fill="currentColor"/>
                
                {/* Tape path */}
                <path d="M35 25 L45 25" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M35 30 L45 30" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M35 35 L45 35" stroke="currentColor" strokeWidth="1.5"/>
                
                {/* Digital waveform */}
                <g transform="translate(75, 30)">
                    <path d="M0 0 L3 -8 L6 12 L9 -15 L12 18 L15 -12 L18 8 L21 -5 L24 0" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeLinecap="round"/>
                </g>
                
                {/* Arrow showing conversion */}
                <path d="M65 25 L70 30 L65 35" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"/>
            </svg>
            
            {/* Text Logo */}
            <div className="flex flex-col">
                <div className="font-bold text-xl tracking-tight leading-none">
                    LEGACY
                </div>
                <div className="font-light text-sm tracking-widest leading-none opacity-90">
                    AUDIO LAB
                </div>
            </div>
        </div>
    );
}