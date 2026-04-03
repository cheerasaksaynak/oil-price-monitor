'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

export default function SidebarNav({ lang }: { lang: string }) {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: `/${lang}`,               label: 'Dashboard',    icon: 'dashboard'   },
    { href: `/${lang}/price-history`, label: 'Price History', icon: 'history'     },
    { href: `/${lang}/trends`,        label: 'Trends',       icon: 'trending_up' },
  ];

  return (
    <aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 bg-slate-100 flex-col p-4 gap-2 z-40">
      {/* Brand */}
      <div className="mb-8 px-2 pt-4">
        <h1 className="text-lg font-black uppercase text-primary font-be-vietnam tracking-tighter leading-tight">
          The Fluid Authority
        </h1>
        <p className="text-xs text-outline font-medium mt-0.5">Editorial Analyst</p>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-white text-primary font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
              <span className="font-medium text-sm">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Admin badge */}
      <div className="mt-auto p-3 flex items-center gap-3 bg-surface-container-low rounded-xl">
        <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-[18px]">manage_accounts</span>
        </div>
        <div>
          <p className="text-sm font-bold text-on-surface leading-tight">Admin Access</p>
          <p className="text-[10px] text-outline">Verified Station</p>
        </div>
      </div>
    </aside>
  );
}
