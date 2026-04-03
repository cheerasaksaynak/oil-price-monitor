'use client';

import { useState } from 'react';

const fuelBentoItems = [
  {
    type: 'GASOHOL 95', price: 37.85, change: 0.00,
    chipBg: 'bg-tertiary-fixed', chipText: 'text-on-tertiary-fixed-variant',
    icon: 'local_gas_station', cardBg: 'bg-surface-container-lowest',
  },
  {
    type: 'GASOHOL 91', price: 37.48, change: 0.00,
    chipBg: 'bg-slate-200', chipText: 'text-slate-700',
    icon: 'local_gas_station', cardBg: 'bg-surface-container-lowest',
  },
  {
    type: 'E20', price: 35.74, change: 0.00,
    chipBg: 'bg-on-tertiary-container', chipText: 'text-tertiary-container',
    icon: 'eco', cardBg: 'bg-surface-container-lowest',
  },
  {
    type: 'DIESEL B7', price: 32.94, change: 0.50,
    chipBg: 'bg-error', chipText: 'text-on-error',
    icon: 'local_gas_station', cardBg: 'bg-surface-container-lowest bg-error/5',
  },
  {
    type: 'E85', price: 35.49, change: 0.00,
    chipBg: 'bg-secondary-container', chipText: 'text-on-secondary-container',
    icon: 'energy_savings_leaf', cardBg: 'bg-surface-container-lowest',
  },
];

const topChanges = [
  { label: 'DIESEL B7',   price: '32.94 ฿', change: '+0.50', up: true,  dot: 'bg-error'               },
  { label: 'GASOHOL 95',  price: '37.85 ฿', change: '0.00',  up: false, dot: 'bg-on-tertiary-container'},
  { label: 'E20',         price: '35.74 ฿', change: '0.00',  up: false, dot: 'bg-primary-container'    },
];

const historyRows = [
  { date: '23 พ.ค. 67', g95: '37.85',          diesel: '32.94',          e20: '35.74' },
  { date: '22 พ.ค. 67', g95: '37.85 (+0.4)',   diesel: '32.94 (+0.5)',   e20: '35.74', highlight: true },
  { date: '21 พ.ค. 67', g95: '37.45',          diesel: '32.44',          e20: '35.74' },
  { date: '20 พ.ค. 67', g95: '37.45',          diesel: '32.44',          e20: '35.74' },
];

type ChartView = 'DAILY' | 'MONTHLY' | 'QUARTERLY';

export default function DashboardPage({ params }: { params: { lang: string } }) {
  const isEnglish = params.lang === 'en';
  const [chartView, setChartView] = useState<ChartView>('DAILY');

  return (
    <div className="px-6 lg:px-8 pb-12 pt-6 max-w-7xl mx-auto space-y-8">

      {/* ── Hero + Top Price Changes ── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hero gradient */}
        <div className="md:col-span-2 editorial-hero-gradient rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium tracking-widest uppercase opacity-80">
                {isEnglish ? 'Daily Fuel Price Status' : 'สถานะราคาน้ำมันประจำวัน'}
              </span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] backdrop-blur-sm font-be-vietnam font-bold">
                LIVE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-be-vietnam tracking-tighter leading-none mb-4">
              {isEnglish ? "Today's Oil Prices" : 'ราคาน้ำมันวันนี้'}
            </h1>
            <p className="text-base font-ibm-plex-thai opacity-90 max-w-md leading-relaxed">
              {isEnglish
                ? 'In-depth analysis of Thai oil market movements, May 24, 2024 (B.E. 2567)'
                : 'วิเคราะห์เจาะลึกความเคลื่อนไหวตลาดน้ำมันไทย ประจำวันที่ 24 พฤษภาคม 2567'}
            </p>
          </div>
          <div className="relative z-10 flex items-end justify-between mt-6">
            <div>
              <p className="text-sm font-medium opacity-70">
                {isEnglish ? 'Updated at 05:00 AM' : 'อัพเดทล่าสุดเมื่อ 05:00 น.'}
              </p>
              <div className="flex gap-4 mt-2">
                <div className="flex flex-col">
                  <span className="text-xs uppercase opacity-60">PTT</span>
                  <span className="font-bold text-sm">{isEnglish ? 'Stable' : 'เสถียร'}</span>
                </div>
                <div className="flex flex-col border-l border-white/20 pl-4">
                  <span className="text-xs uppercase opacity-60">Bangchak</span>
                  <span className="font-bold text-sm">{isEnglish ? 'Stable' : 'เสถียร'}</span>
                </div>
              </div>
            </div>
            <button className="hidden sm:flex bg-white text-primary px-5 py-2.5 rounded-lg font-bold font-be-vietnam text-sm items-center gap-2 hover:bg-surface-container transition-colors shadow-lg">
              <span className="material-symbols-outlined text-lg">download</span>
              FULL REPORT
            </button>
          </div>
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-container/30 rounded-full blur-2xl -mr-10 -mb-10 pointer-events-none" />
        </div>

        {/* Top Price Changes card */}
        <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col">
          <h3 className="text-base font-bold font-be-vietnam text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            Top Price Changes
          </h3>
          <div className="space-y-3 flex-1">
            {topChanges.map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-3">
                  <span className={`w-1.5 h-6 ${item.dot} rounded-full`} />
                  <div>
                    <p className="text-[10px] font-bold text-outline">{item.label}</p>
                    <p className="font-bold text-primary text-sm">{item.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold flex items-center justify-end text-sm gap-0.5 ${item.up ? 'text-error' : 'text-outline'}`}>
                    {item.change}
                    <span className="material-symbols-outlined text-[16px]">
                      {item.up ? 'trending_up' : 'remove'}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full text-center text-xs font-bold text-primary hover:underline transition-all">
            {isEnglish ? 'VIEW ALL HISTORICAL DATA' : 'ดูข้อมูลทั้งหมด →'}
          </button>
        </div>
      </section>

      {/* ── Fuel Price Bento Grid ── */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {fuelBentoItems.map((item) => (
          <div
            key={item.type}
            className={`${item.cardBg} p-5 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl duration-300 cursor-default`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`${item.chipBg} ${item.chipText} px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight`}>
                {item.type}
              </span>
              <span className="material-symbols-outlined text-slate-300 text-lg">{item.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold font-be-vietnam text-primary">{item.price.toFixed(2)}</span>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-outline">THB/L</span>
                {item.change > 0 ? (
                  <span className="text-[10px] font-bold text-error ml-auto flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
                    {item.change.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-outline ml-auto flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">horizontal_rule</span>
                    0.00
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Chart Section ── */}
      <section className="bg-surface-container-lowest rounded-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold font-be-vietnam tracking-tight text-primary">
              {isEnglish ? 'Price Trend Comparison' : 'กราฟเปรียบเทียบแนวโน้ม'}
            </h2>
            <p className="text-slate-500 text-sm font-ibm-plex-thai mt-1">
              {isEnglish ? 'Price Trends & Comparative Analysis' : 'Price Trends & Comparative Analysis'}
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 bg-surface-container rounded-lg self-start">
            {(['DAILY', 'MONTHLY', 'QUARTERLY'] as ChartView[]).map((v) => (
              <button
                key={v}
                onClick={() => setChartView(v)}
                className={`px-4 py-1.5 text-xs font-bold font-be-vietnam rounded-md transition-all ${
                  chartView === v
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* SVG chart simulation */}
        <div className="relative h-[360px] w-full bg-slate-50/50 rounded-lg overflow-hidden border border-slate-100/50">
          <div className="absolute inset-0 flex items-end px-12 pb-12 gap-8">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-rows-4 px-12 py-8 pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-t border-slate-100" />
              ))}
            </div>
            {/* Y-axis labels */}
            <div className="absolute left-2 top-8 bottom-12 flex flex-col justify-between pointer-events-none">
              {['40', '38', '36', '34', '32'].map((v) => (
                <span key={v} className="text-[10px] text-slate-400 font-bold">{v}</span>
              ))}
            </div>
            {/* Chart lines */}
            <svg className="absolute inset-0 w-full h-full px-12 py-12 overflow-visible" preserveAspectRatio="none">
              {/* Gasohol 95 */}
              <path d="M 0 240 Q 120 230,240 260 T 480 200 T 720 220 T 960 160" fill="none" stroke="#003d7c" strokeWidth="2.5" strokeLinecap="round" />
              {/* Diesel B7 */}
              <path d="M 0 290 Q 120 270,240 300 T 480 250 T 720 270 T 960 210" fill="none" stroke="#ba1a1a" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" opacity="0.7" />
              {/* E20 */}
              <path d="M 0 200 Q 120 185,240 215 T 480 160 T 720 180 T 960 120" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            </svg>
            {/* Date labels */}
            <div className="absolute bottom-3 left-12 right-12 flex justify-between text-[10px] font-bold text-slate-400 font-be-vietnam">
              {['15 MAY','16 MAY','17 MAY','18 MAY','19 MAY','20 MAY','21 MAY','22 MAY','23 MAY','TODAY'].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>

          {/* Floating tooltip */}
          <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-lg p-3 border border-slate-100 z-10 w-44">
            <p className="text-[10px] font-bold text-slate-400 mb-2 font-be-vietnam">MAY 22, 2024</p>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">Gasohol 95</span>
                <span className="text-xs font-bold text-primary">37.85 ฿</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">Diesel B7</span>
                <span className="text-xs font-bold text-error">32.94 ฿</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart legend */}
        <div className="flex gap-6 mt-4 mb-2">
          {[
            { color: 'bg-primary', label: 'Gasohol 95' },
            { color: 'bg-error',   label: 'Diesel B7'  },
            { color: 'bg-on-tertiary-container', label: 'E20' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${l.color}`} />
              <span className="text-[10px] font-bold text-outline uppercase">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-primary">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Volatility Score</p>
            <p className="text-xl font-bold text-primary mt-1">
              {isEnglish ? 'Low' : 'ต่ำ'}{' '}
              <span className="text-sm font-normal text-slate-400 ml-1">±0.2%</span>
            </p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-error">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Peak Price (30D)</p>
            <p className="text-xl font-bold text-primary mt-1">
              38.25 ฿{' '}
              <span className="text-sm font-normal text-slate-400 ml-1">Gasohol 95</span>
            </p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-on-tertiary-container">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Average Margin</p>
            <p className="text-xl font-bold text-primary mt-1">
              2.45 ฿{' '}
              <span className="text-sm font-normal text-slate-400 ml-1">Global Index</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 5-Day Table + Market Insight ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Price history table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-be-vietnam text-primary">
              {isEnglish ? 'Price History (Last 5 Days)' : 'ประวัติราคา (5 วันล่าสุด)'}
            </h3>
            <a href={`/${params.lang}/price-history`} className="text-xs font-bold text-primary-container hover:underline">
              VIEW ALL
            </a>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left font-ibm-plex-thai">
              <thead>
                <tr className="bg-surface-container-low text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                  <th className="px-5 py-4">{isEnglish ? 'Date' : 'วันที่'}</th>
                  <th className="px-5 py-4">GAS 95</th>
                  <th className="px-5 py-4">DIESEL B7</th>
                  <th className="px-5 py-4">E20</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {historyRows.map((row) => (
                  <tr key={row.date} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 text-sm font-medium">{row.date}</td>
                    <td className={`px-5 py-4 text-sm ${row.highlight ? 'text-error font-bold' : ''}`}>{row.g95}</td>
                    <td className={`px-5 py-4 text-sm ${row.highlight ? 'text-error font-bold' : ''}`}>{row.diesel}</td>
                    <td className="px-5 py-4 text-sm">{row.e20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Insight card */}
        <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">Market Insight</span>
            <h3 className="text-2xl font-bold font-be-vietnam text-primary mb-5 leading-tight">
              {isEnglish
                ? 'How does the diesel price adjustment affect the transport sector?'
                : 'การปรับราคาน้ำมันดีเซลส่งผลต่อภาคขนส่งอย่างไร?'}
            </h3>
            <p className="text-on-surface-variant font-ibm-plex-thai leading-relaxed text-sm">
              {isEnglish
                ? 'Following the Diesel B7 price increase 2 days ago (+0.50 THB), transportation costs have risen by an average of 1.2% for medium-sized operators. We recommend closely monitoring global crude oil market conditions.'
                : 'จากการปรับขึ้นราคาดีเซล B7 เมื่อ 2 วันที่ผ่านมา (+0.50 บาท) พบว่าต้นทุนการขนส่งเพิ่มขึ้นเฉลี่ย 1.2% สำหรับผู้ประกอบการขนาดกลาง แนะนำให้ติดตามสถานการณ์ราคาน้ำมันดิบในตลาดโลกอย่างใกล้ชิด'}
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <p className="text-xs font-bold text-primary font-be-vietnam">
              {isEnglish ? 'Read by 1,240+ Professionals' : 'อ่านโดยผู้เชี่ยวชาญกว่า 1,240 คน'}
            </p>
          </div>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          notifications_active
        </span>
      </button>
    </div>
  );
}
