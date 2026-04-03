'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    const lang = navigator.language.startsWith('en') ? 'en' : 'th';
    const base = window.location.pathname.replace(/\/$/, '');
    window.location.replace(`${base}/${lang}/`);
  }, []);

  return <p style={{ fontFamily: 'sans-serif', padding: '2rem' }}>Redirecting…</p>;
}
