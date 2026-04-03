import "../globals.css";
import SidebarNav from "./SidebarNav";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'th' }];
}

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = params;
  const isEnglish = lang === 'en';

  return (
    <div className="min-h-screen bg-surface">
      {/* Left Sidebar – Desktop */}
      <SidebarNav lang={lang} />

      {/* Top Header – glassmorphism, offset by sidebar on desktop */}
      <header className="fixed top-0 right-0 left-0 lg:left-64 z-50 bg-white/80 backdrop-blur-[20px] flex items-center justify-between px-6 lg:px-8 py-3 shadow-sm">
        {/* Mobile brand */}
        <span className="lg:hidden text-base font-black uppercase text-primary font-be-vietnam tracking-tighter">
          The Fluid Authority
        </span>

        {/* Desktop search */}
        <div className="hidden lg:flex relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder={isEnglish ? "Search fuel price data..." : "ค้นหาข้อมูลราคาย้อนหลัง..."}
            className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 border-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex gap-2">
            <button className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors">
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <button className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors">
              <span className="material-symbols-outlined">schedule</span>
            </button>
          </div>
          <a
            href={`/${isEnglish ? 'th' : 'en'}`}
            className="px-3 py-1 text-xs font-inter font-semibold text-on-surface-variant hover:text-primary border border-outline-variant rounded-full transition-colors"
          >
            {isEnglish ? 'ไทย' : 'EN'}
          </a>
        </div>
      </header>

      {/* Page content – push down below header, push right of sidebar */}
      <div className="lg:ml-64 pt-[60px] min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="py-8 bg-slate-100">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-ibm-plex-thai leading-6 text-slate-500">
                © 2024 The Fluid Authority. Data sourced from PTT &amp; Bangchak.
              </p>
              <div className="flex gap-4">
                <a className="text-xs text-slate-500 hover:text-primary transition-colors" href="#">PTT Station</a>
                <a className="text-xs text-slate-500 hover:text-primary transition-colors" href="#">Bangchak Corporation</a>
              </div>
            </div>
            <div className="flex flex-wrap md:justify-end gap-6 items-center">
              <a className="text-xs text-blue-800 underline hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="text-xs text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
