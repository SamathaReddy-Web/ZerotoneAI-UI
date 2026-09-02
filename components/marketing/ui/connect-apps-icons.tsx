import type { IconProps } from '@/components/marketing/ui/floating-icons-hero-section';

// Real, recognizable brand marks (simplified where a trademark's full detail
// doesn't survive a 32px icon, but colors and silhouettes match the real thing).

const IconGoogle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9999 12.24C21.9999 11.4933 21.9333 10.76 21.8066 10.0533H12.3333V14.16H17.9533C17.7333 15.3467 17.0133 16.3733 15.9666 17.08V19.68H19.5266C21.1933 18.16 21.9999 15.4533 21.9999 12.24Z" fill="#4285F4"/>
    <path d="M12.3333 22C15.2333 22 17.6866 21.0533 19.5266 19.68L15.9666 17.08C15.0199 17.7333 13.7933 18.16 12.3333 18.16C9.52659 18.16 7.14659 16.28 6.27992 13.84H2.59326V16.5133C4.38659 20.0267 8.05992 22 12.3333 22Z" fill="#34A853"/>
    <path d="M6.2799 13.84C6.07324 13.2267 5.9599 12.58 5.9599 11.92C5.9599 11.26 6.07324 10.6133 6.2799 10L2.59326 7.32667C1.86659 8.78667 1.45326 10.32 1.45326 11.92C1.45326 13.52 1.86659 15.0533 2.59326 16.5133L6.2799 13.84Z" fill="#FBBC05"/>
    <path d="M12.3333 5.68C13.8933 5.68 15.3133 6.22667 16.3866 7.24L19.6 4.02667C17.68 2.29333 15.2266 1.33333 12.3333 1.33333C8.05992 1.33333 4.38659 3.97333 2.59326 7.32667L6.27992 10C7.14659 7.56 9.52659 5.68 12.3333 5.68Z" fill="#EA4335"/>
  </svg>
);

const IconGmail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16v.01L12 13 4 6.01V6z" fill="#EA4335" />
    <path d="M2 6.5V18a2 2 0 0 0 2 2h.5V8.3L2 6.5z" fill="#FBBC05" />
    <path d="M22 6.5L19.5 8.3V20H20a2 2 0 0 0 2-2V6.5z" fill="#34A853" />
    <path d="M4.5 8.3L12 14l7.5-5.7V20h-15V8.3z" fill="#4285F4" />
  </svg>
);

const IconMicrosoft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4 2H2v9.4h9.4V2Z" fill="#F25022"/>
    <path d="M22 2h-9.4v9.4H22V2Z" fill="#7FBA00"/>
    <path d="M11.4 12.6H2V22h9.4V12.6Z" fill="#00A4EF"/>
    <path d="M22 12.6h-9.4V22H22V12.6Z" fill="#FFB900"/>
  </svg>
);

const IconOutlook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#0A2767" />
    <path d="M22 6.5L13 12l9 5.5V6.5z" fill="#0364B8" />
    <rect x="2" y="4" width="11.5" height="16" fill="#0078D4" />
    <circle cx="7.2" cy="12" r="3.4" fill="#fff" />
    <circle cx="7.2" cy="12" r="2.2" fill="#0078D4" />
  </svg>
);

const IconQuickBooks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#2CA01C" />
    <path d="M9.2 7.6v8.8a4.4 4.4 0 1 1 0-8.8z" fill="#fff" />
    <path d="M14.8 7.6v8.8a4.4 4.4 0 1 0 0-8.8z" fill="#fff" />
    <rect x="8.5" y="15.6" width="1.4" height="2.8" fill="#fff" />
    <rect x="14.1" y="5.6" width="1.4" height="2.8" fill="#fff" />
  </svg>
);

const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" fill="#2C2C2C"/>
    <path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5V7z" fill="#0ACF83"/>
    <path d="M12 12a5 5 0 0 1-5-5 5 5 0 0 1 5-5v10z" fill="#A259FF"/>
    <path d="M12 17a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5z" fill="#F24E1E"/>
    <path d="M7 12a5 5 0 0 1 5 5v-5H7z" fill="#FF7262"/>
  </svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-black" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const IconSlack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#36C5F0"/><path d="M9 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#2EB67D"/><path d="M14 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" fill="#ECB22E"/><path d="M15.5 15a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="#E01E5A"/><path d="M10 14h4v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5V14Z" fill="#E01E5A"/><path d="M8.5 14a1.5 1.5 0 0 0 1.5 1.5h1.5v-1a1.5 1.5 0 0 0-1.5-1.5H8.5v1Z" fill="#ECB22E"/><path d="M15.5 10a1.5 1.5 0 0 0-1.5-1.5H12.5v4a1.5 1.5 0 0 0 1.5 1.5h1.5v-4Z" fill="#36C5F0"/><path d="M14 8.5a1.5 1.5 0 0 0-1.5-1.5h-1v4a1.5 1.5 0 0 0 1.5 1.5h1v-4Z" fill="#2EB67D"/>
  </svg>
);

const IconNotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-black" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.111 5.889h3.222v10.222h-3.222V7.889zm-4.333 0h3.222v10.222H7.778V7.889z"/>
  </svg>
);

const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#635BFF"/><path d="M6 7H18V9H6V7Z" fill="white"/><path d="M6 11H18V13H6V11Z" fill="white"/><path d="M6 15H14V17H6V15Z" fill="white"/>
  </svg>
);

const IconDropbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8l-6 4 6 4 6-4-6-4z" fill="#0061FF"/><path d="M6 12l6 4 6-4-6-4-6 4z" fill="#007BFF"/><path d="M12 16l6-4-6-4-6 4 6 4z" fill="#4DA3FF"/><path d="M18 12l-6-4-6 4 6 4 6-4z" fill="#0061FF"/>
  </svg>
);

const IconZoom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="4" fill="#2D8CFF" />
    <rect x="5" y="9" width="10" height="6" rx="1.5" fill="#fff" />
    <path d="M16.5 10.2l3-1.7v7l-3-1.7v-3.6z" fill="#fff" />
  </svg>
);

const IconLinear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="linear-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5E5CE6" /><stop offset="100%" stopColor="#2C2C2C" /></linearGradient></defs><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4 9h8v2H8v-2z" fill="url(#linear-grad)"/>
  </svg>
);

const IconDocuSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FFCC22" />
    <path d="M7 15V9h3.2c1.9 0 3 1.1 3 2.9 0 1.9-1.2 3.1-3.1 3.1H7zm2-1.6h1c.9 0 1.4-.5 1.4-1.5s-.5-1.4-1.4-1.4H9v2.9z" fill="#111" />
    <path d="M15 15l2-6h1.4l-2.6 6H15z" fill="#111" />
  </svg>
);

// Positioned in a ring around the edges of the panel, leaving the center
// band clear for a title/subtitle to sit among them without collisions.
export const connectAppsIcons: IconProps[] = [
  { id: 1, icon: IconGoogle, className: 'top-[6%] left-[8%]' },
  { id: 2, icon: IconGmail, className: 'top-[6%] right-[8%]' },
  { id: 3, icon: IconFigma, className: 'top-[6%] left-[32%]' },
  { id: 4, icon: IconStripe, className: 'top-[6%] right-[32%]' },
  { id: 5, icon: IconMicrosoft, className: 'top-[30%] left-[4%]' },
  { id: 6, icon: IconOutlook, className: 'top-[30%] right-[4%]' },
  { id: 7, icon: IconSlack, className: 'top-[50%] left-[2%]' },
  { id: 8, icon: IconGitHub, className: 'top-[50%] right-[2%]' },
  { id: 9, icon: IconLinear, className: 'top-[70%] left-[4%]' },
  { id: 10, icon: IconDocuSign, className: 'top-[70%] right-[4%]' },
  { id: 11, icon: IconQuickBooks, className: 'bottom-[6%] left-[8%]' },
  { id: 12, icon: IconDropbox, className: 'bottom-[6%] right-[8%]' },
  { id: 13, icon: IconZoom, className: 'bottom-[6%] left-[32%]' },
  { id: 14, icon: IconNotion, className: 'bottom-[6%] right-[32%]' },
];
