'use client';

import { useState } from 'react';

type Period = 'DAILY' | 'MONTHLY' | 'QUARTERLY';

const comparativeData = [
  { fuel: 'GASOHOL 95', chipBg: 'bg-tertiary-fixed', chipText: 'text-on-tertiary-fixed-variant', current: 37.85, prev: 37.45, high: 38.25, low: 36.95, avg: 37.62, vol: 'Low'   },
  { fuel: 'GASOHOL 91', chipBg: 'bg-slate-200',       chipText: 'text-slate-700',               current: 37.48, prev: 37.08, high: 37.88, low: 36.48, avg: 37.25, vol: 'Low'   },
  { fuel: 'E20',        chipBg: 'bg-on-tertiary-container', chipText: 'text-tertiary-container', current: 35.74, prev: 35.54, high: 36.54, low: 34.94, avg: 35.60, vol: 'Med'   },
  { fuel: 'DIESEL B7',  chipBg: 'bg-error',            chipText: 'text-on-error',               current: 32.94, prev: 32.44, high: 33.14, low: 31.94, avg: 32.61, vol: 'High'  },
  { fuel: 'E85',        chipBg: 'bg-secondary-container', chipText: 'text-on-secondary-container', current: 35.49, prev: 35.29, high: 36.09, low: 34.89, avg: 35.35, vol: 'Low'},
];

const volColor = { Low: 'text-primary', Med: 'text-on-tertiary-container', High: 'text-error' } as const;

export default function TrendsPage({ params }: { params: { lang: string } }) {
  const isEnglish = params.lang === 'en';
  const [period, setPeriod] = useState<Period>('DAILY');

  return (
    <div className="px-6 lg:px-8 pb-12 pt-6 max-w-7xl mx-auto space-y-8">

      {/* ── Hero Header ── */}
      <section>
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-black text-on-surface tracking-tighter font-be-vietnam mb-1">
              {isEnglish ? 'Trends & Analytics' : 'แนวโน้มและการวิเคราะห์'}
            </h2>
            <p className="text-on-surface-variant font-medium text-sm">
              {isEnglish
                ? 'Comparative analysis and market insights for Thai fuel prices.'
                : 'การวิเคราะห์เปรียบเทียบและข้อมูลเชิงลึกของตลาดน้ำมันไทย'}
            </p>
          </div>
          <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">image</span>
            {isEnglish ? 'Export Chart' : 'ส่งออกกราฟ'}
          </button>
        </div>
      </section>

      {/* ── KPI Cards Row ── */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: isEnglish ? 'Volatility Score' : 'ความผันผวน', value: 'Low', sub: '±0.2%',        accent: 'border-primary',                icon: 'ssid_chart'    },
          { label: isEnglish ? 'Peak Price (30D)' : 'ราคาสูงสุด 30 วัน',  value: '38.25 ฿', sub: 'Gasohol 95', accent: 'border-error',                  icon: 'trending_up'   },
          { label: isEnglish ? 'Average Margin'   : 'ส่วนต่างเฉลี่ย',   value: '2.45 ฿',  sub: 'vs Global',  accent: 'border-on-tertiary-container',  icon: 'finance_mode'  },
          { label: isEnglish ? 'Days Monitored'   : 'วันที่ติดตาม',    value: '180',     sub: 'Since Jan 2024', accent: 'border-secondary',           icon: 'calendar_month'},
        ].map((kpi) => (
          <div key={kpi.label} className={`p-5 bg-surface-container-lowest rounded-xl border-l-4 ${kpi.accent} shadow-sm`}>
            <div className="flex items-start justify-between mb-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">{kpi.label}</p>
              <span className="material-symbols-outlined text-slate-300 text-lg">{kpi.icon}</span>
            </div>
            <p className="text-2xl font-bold text-primary mt-1">{kpi.value}</p>
            <p className="text-xs text-outline mt-0.5">{kpi.sub}</p>
          </div>
        ))}
      </section>

      {/* ── Main Chart ── */}
      <section className="bg-surface-container-lowest rounded-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-be-vietnam tracking-tight text-primary">
              {isEnglish ? 'Multi-Fuel Price Comparison' : 'เปรียบเทียบราคาหลายเชื้อเพลิง'}
            </h3>
            <p className="text-slate-500 text-sm mt-1 font-ibm-plex-thai">
              {isEnglish ? 'Hover over the chart to see exact values' : 'วางเมาส์บนกราฟเพื่อดูค่าที่ชัดเจน'}
            </p>
          </div>
          {/* Period toggle */}
          <div className="flex items-center gap-1 p-1 bg-surface-container rounded-lg self-start">
            {(['DAILY', 'MONTHLY', 'QUARTERLY'] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-1.5 text-xs font-bold font-be-vietnam rounded-md transition-all ${
                  period === p ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-primary'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Chart legend */}
        <div className="flex flex-wrap gap-5 mb-6">
          {[
            { color: 'bg-primary',                label: 'Gasohol 95', dash: false },
            { color: 'bg-slate-400',              label: 'Gasohol 91', dash: true  },
            { color: 'bg-on-tertiary-container',  label: 'E20',        dash: false },
            { color: 'bg-error',                  label: 'Diesel B7',  dash: true  },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <span className={`w-6 h-0.5 ${l.color} ${l.dash ? 'border-dashed border-t-2 border-current bg-transparent' : ''} inline-block`}
                style={l.dash ? { background: 'none', borderTop: '2px dashed currentColor' } : {}}
              />
              <span className="text-[10px] font-bold text-outline uppercase">{l.label}</span>
            </div>
          ))}
        </div>

        {/* SVG multi-line chart */}
        <div className="relative h-[400px] w-full bg-slate-50/50 rounded-lg overflow-hidden border border-slate-100/50">
          <div className="absolute inset-0">
            {/* Grid */}
            <div className="absolute inset-0 grid grid-rows-5 px-14 py-10 pointer-events-none">
              {[40, 38, 36, 34, 32].map((v) => (
                <div key={v} className="border-t border-slate-100 flex items-start">
                  <span className="text-[10px] text-slate-400 font-bold -mt-1.5 -ml-10 w-8 text-right">{v}</span>
                </div>
              ))}
            </div>

            {/* Chart lines */}
            <svg className="absolute inset-0 w-full h-full px-14 py-10 overflow-visible" preserveAspectRatio="none">
              {/* Gasohol 95 – primary, solid */}
              <path d="M 0 220 C 100 210,200 240,300 200 S 500 170,600 150 S 800 180,900 130" fill="none" stroke="#003d7c" strokeWidth="2.5" strokeLinecap="round" />
              {/* Gasohol 91 – slate, dashed */}
              <path d="M 0 240 C 100 230,200 260,300 220 S 500 195,600 175 S 800 200,900 150" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
              {/* E20 – amber, solid */}
              <path d="M 0 180 C 100 165,200 195,300 160 S 500 140,600 115 S 800 145,900 100" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" />
              {/* Diesel B7 – error, dashed */}
              <path d="M 0 290 C 100 275,200 305,300 270 S 500 245,600 225 S 800 255,900 210" fill="none" stroke="#ba1a1a" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
              {/* Data points */}
              {[[0,220],[300,200],[600,150],[900,130]].map(([x,y]) => (
                <circle key={`${x}-${y}`} cx={`${(x/900)*100}%`} cy={y} r="4" fill="#003d7c" />
              ))}
            </svg>

            {/* X-axis labels */}
            <div className="absolute bottom-3 left-14 right-4 flex justify-between text-[10px] font-bold text-slate-400 font-be-vietnam">
              {period === 'DAILY' && ['MAY 15','MAY 16','MAY 17','MAY 18','MAY 19','MAY 20','MAY 21','MAY 22','MAY 23','TODAY'].map((d) => (
                <span key={d}>{d}</span>
              ))}
              {period === 'MONTHLY' && ['JAN','FEB','MAR','APR','MAY','JUN'].map((d) => (
                <span key={d}>{d}</span>
              ))}
              {period === 'QUARTERLY' && ['Q1 2023','Q2 2023','Q3 2023','Q4 2023','Q1 2024','Q2 2024'].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Floating tooltip */}
            <div className="absolute top-[30%] left-[55%] bg-white shadow-2xl rounded-lg p-4 border border-slate-100 z-10 w-52">
              <p className="text-[10px] font-bold text-slate-400 mb-2 font-be-vietnam">MAY 22, 2024</p>
              <div className="space-y-1.5">
                {[
                  { label: 'Gasohol 95', val: '37.85 ฿', color: 'text-primary' },
                  { label: 'Gasohol 91', val: '37.48 ฿', color: 'text-slate-500' },
                  { label: 'E20',        val: '35.74 ฿', color: 'text-on-tertiary-container' },
                  { label: 'Diesel B7',  val: '32.94 ฿', color: 'text-error' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">{t.label}</span>
                    <span className={`text-xs font-bold ${t.color}`}>{t.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparative Analysis Table ── */}
      <section>
        <h3 className="text-xl font-bold font-be-vietnam text-primary mb-4">
          {isEnglish ? 'Comparative Analysis' : 'ตารางเปรียบเทียบ'}
        </h3>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                  {[
                    isEnglish ? 'Fuel Type'    : 'ประเภท',
                    isEnglish ? 'Current'       : 'ปัจจุบัน',
                    isEnglish ? 'Prev. Day'     : 'วันก่อน',
                    isEnglish ? '30D High'      : 'สูงสุด 30 วัน',
                    isEnglish ? '30D Low'       : 'ต่ำสุด 30 วัน',
                    isEnglish ? '30D Average'   : 'เฉลี่ย 30 วัน',
                    isEnglish ? 'Volatility'    : 'ความผันผวน',
                  ].map((h, i) => (
                    <th key={h} className={`px-6 py-4 ${i >= 1 ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparativeData.map((row) => {
                  const change = row.current - row.prev;
                  return (
                    <tr key={row.fuel} className="hover:bg-surface-container-low transition-colors border-t border-slate-50">
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.chipBg} ${row.chipText}`}>
                          {row.fuel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-right">{row.current.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-right">
                        <span className={change > 0 ? 'text-error font-bold' : change < 0 ? 'text-primary font-bold' : 'text-outline'}>
                          {change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right">{row.high.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-right">{row.low.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-right">{row.avg.toFixed(2)}</td>
                      <td className={`px-6 py-4 text-sm font-bold text-right ${volColor[row.vol as keyof typeof volColor]}`}>{row.vol}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Global Index Comparison ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary p-8 rounded-xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">
              {isEnglish ? 'Global Index Comparison' : 'เปรียบเทียบดัชนีโลก'}
            </span>
            <p className="text-4xl font-black font-be-vietnam mt-3 mb-1">$82.40</p>
            <p className="text-sm opacity-80 mb-4">Brent Crude (USD/bbl)</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              <span className="text-sm font-bold">+1.20 (+1.48%) {isEnglish ? 'today' : 'วันนี้'}</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">public</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-outline">
              {isEnglish ? 'Price Prediction Insight' : 'การคาดการณ์ราคา'}
            </span>
            <h4 className="text-2xl font-bold font-be-vietnam text-primary mt-3 mb-4 leading-tight">
              {isEnglish
                ? 'Prices may rise within 48–72 hours based on global crude movement.'
                : 'คาดการณ์ราคาน้ำมันในประเทศอาจปรับตัวขึ้นภายใน 48–72 ชม. ตามทิศทางน้ำมันดิบโลก'}
            </h4>
            <p className="text-sm text-on-surface-variant font-ibm-plex-thai leading-relaxed">
              {isEnglish
                ? 'The Brent crude surge above $82 puts upward pressure on Thai retail fuel. PTT typically adjusts within 2–3 business days of a sustained crude shift.'
                : 'การพุ่งขึ้นของ Brent เกิน $82 สร้างแรงกดดันให้ราคาปลีกน้ำมันไทยปรับขึ้น โดย ปตท. มักปรับราคาภายใน 2–3 วันทำการหลังจากน้ำมันดิบเปลี่ยนแปลงอย่างต่อเนื่อง'}
            </p>
          </div>
          <a href="#" className="mt-6 text-xs font-bold text-primary hover:underline">
            {isEnglish ? 'Read full analysis →' : 'อ่านบทวิเคราะห์ฉบับเต็ม →'}
          </a>
        </div>
      </section>

    </div>
  );
}
