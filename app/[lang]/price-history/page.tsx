'use client';

import { useState } from 'react';

const historyData = [
  { date: '15 มิ.ย. 2567', dateEn: 'Jun 15, 2567', station: 'PTT Station', fuel: 'GASOHOL 95', price: 38.45, change: +0.40, chipBg: 'bg-tertiary-fixed',       chipText: 'text-on-tertiary-fixed-variant' },
  { date: '14 มิ.ย. 2567', dateEn: 'Jun 14, 2567', station: 'Bangchak',    fuel: 'DIESEL B7',  price: 32.94, change:  0.00, chipBg: 'bg-error',               chipText: 'text-on-error'                 },
  { date: '12 มิ.ย. 2567', dateEn: 'Jun 12, 2567', station: 'PTT Station', fuel: 'E20',        price: 36.34, change: -0.20, chipBg: 'bg-on-tertiary-container', chipText: 'text-tertiary-container'       },
  { date: '10 มิ.ย. 2567', dateEn: 'Jun 10, 2567', station: 'Bangchak',    fuel: 'GASOHOL 95', price: 38.05, change: +0.60, chipBg: 'bg-tertiary-fixed',       chipText: 'text-on-tertiary-fixed-variant' },
  { date: '8 มิ.ย. 2567',  dateEn: 'Jun 8, 2567',  station: 'PTT Station', fuel: 'GASOHOL 91', price: 37.48, change:  0.00, chipBg: 'bg-tertiary-fixed',       chipText: 'text-on-tertiary-fixed-variant' },
  { date: '6 มิ.ย. 2567',  dateEn: 'Jun 6, 2567',  station: 'Bangchak',    fuel: 'E20',        price: 36.54, change: +0.20, chipBg: 'bg-on-tertiary-container', chipText: 'text-tertiary-container'       },
];

const months = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.'];
const barHeightsG95   = [60, 75, 65, 85, 90, 95];
const barHeightsDiesel = [50, 55, 58, 62, 70, 75];

export default function PriceHistoryPage({ params }: { params: { lang: string } }) {
  const isEnglish = params.lang === 'en';

  const [filters, setFilters] = useState({
    gasohol95: true,
    gasohol91: true,
    e20: false,
    dieselB7: true,
  });
  const [provider, setProvider] = useState('all');
  const [dateFrom, setDateFrom] = useState('2024-01-01');
  const [dateTo,   setDateTo]   = useState('2024-06-15');

  const toggleFuel = (key: keyof typeof filters) =>
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="px-6 lg:px-8 pb-12 pt-6 max-w-7xl mx-auto">

      {/* ── Hero Header ── */}
      <section className="mb-8">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-black text-on-surface tracking-tighter font-be-vietnam mb-1">
              {isEnglish ? 'Price History' : 'ประวัติราคาย้อนหลัง'}
            </h2>
            <p className="text-on-surface-variant font-medium text-sm">
              {isEnglish
                ? 'Historical pricing data and market analytics for Thai fuel stations.'
                : 'ข้อมูลราคาย้อนหลังและการวิเคราะห์ตลาดน้ำมันในประเทศไทย'}
            </p>
          </div>
          <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">download</span>
            {isEnglish ? 'Export CSV' : 'ส่งออกข้อมูล (CSV)'}
          </button>
        </div>
      </section>

      {/* ── Main Grid: 9 cols + 3 cols filter ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ── Left: Chart + Table ── */}
        <div className="lg:col-span-9 space-y-8">

          {/* 6-month bar chart */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm overflow-hidden">
            <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {isEnglish ? '6-Month Price Trend' : 'แนวโน้มราคา 6 เดือนล่าสุด'}
                </h3>
                <p className="text-xs text-outline">
                  {isEnglish ? 'Average monthly price comparison (THB/L)' : 'เปรียบเทียบราคาเฉลี่ยต่อเดือน (บาท/ลิตร)'}
                </p>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase text-outline">Gasohol 95</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error" />
                  <span className="text-[10px] font-bold uppercase text-outline">Diesel B7</span>
                </div>
              </div>
            </div>

            {/* Bar chart */}
            <div className="h-56 flex items-end justify-between gap-3 relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="border-t border-outline-variant/20 w-full" />
                ))}
              </div>
              {months.map((m, i) => (
                <div key={m} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 h-full">
                    <div
                      className={`w-4 rounded-t-sm transition-all duration-300 ${
                        i === months.length - 1 ? 'bg-primary' : 'bg-primary-container/40 hover:bg-primary'
                      }`}
                      style={{ height: `${barHeightsG95[i]}%` }}
                    />
                    <div
                      className={`w-4 rounded-t-sm transition-all duration-300 ${
                        i === months.length - 1 ? 'bg-error' : 'bg-error/40 hover:bg-error'
                      }`}
                      style={{ height: `${barHeightsDiesel[i]}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-outline">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price history table */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm">
            <div className="px-6 py-4 flex justify-between items-center bg-surface-container-low/30 rounded-t-xl">
              <h3 className="font-bold text-on-surface">
                {isEnglish ? 'Price History Table' : 'ตารางราคาย้อนหลัง'}
              </h3>
              <span className="text-xs text-outline">
                {isEnglish ? 'Showing 6 of 150 records' : 'แสดง 6 จาก 150 รายการ'}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    {[
                      isEnglish ? 'Date'      : 'วันที่',
                      isEnglish ? 'Provider'  : 'ผู้ให้บริการ',
                      isEnglish ? 'Fuel Type' : 'ประเภทเชื้อเพลิง',
                      isEnglish ? 'Price (THB/L)' : 'ราคา (บาท/ลิตร)',
                      isEnglish ? 'Change'    : 'เปลี่ยนแปลง',
                    ].map((h, i) => (
                      <th
                        key={h}
                        className={`px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest ${
                          i >= 3 ? 'text-right' : ''
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4 text-sm font-medium font-ibm-plex-thai">
                        {isEnglish ? row.dateEn : row.date}
                      </td>
                      <td className="px-6 py-4 text-sm">{row.station}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.chipBg} ${row.chipText}`}>
                          {row.fuel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-right">{row.price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right">
                        {row.change > 0 && (
                          <span className="text-xs font-bold text-error flex items-center justify-end gap-0.5">
                            <span className="material-symbols-outlined text-xs">arrow_upward</span>
                            +{row.change.toFixed(2)}
                          </span>
                        )}
                        {row.change < 0 && (
                          <span className="text-xs font-bold text-primary flex items-center justify-end gap-0.5">
                            <span className="material-symbols-outlined text-xs">arrow_downward</span>
                            {row.change.toFixed(2)}
                          </span>
                        )}
                        {row.change === 0 && (
                          <span className="text-xs font-bold text-outline">0.00</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 flex justify-center">
              <button className="text-primary text-xs font-bold hover:underline">
                {isEnglish ? 'Load more data' : 'ดูข้อมูลเพิ่มเติม'}
              </button>
            </div>
          </div>
        </div>

        {/* ── Right: Filters + Insight ── */}
        <aside className="lg:col-span-3 space-y-6">
          {/* Filter panel */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-sm font-black uppercase text-on-surface tracking-widest mb-6">
              {isEnglish ? 'Filters' : 'ตัวกรองข้อมูล'}
            </h4>

            {/* Fuel type */}
            <div className="mb-7">
              <label className="text-xs font-bold text-outline block mb-3 uppercase">
                {isEnglish ? 'Fuel Type' : 'ประเภทเชื้อเพลิง'}
              </label>
              <div className="space-y-2.5">
                {([
                  { key: 'gasohol95', label: 'Gasohol 95' },
                  { key: 'gasohol91', label: 'Gasohol 91' },
                  { key: 'e20',       label: 'E20'        },
                  { key: 'dieselB7',  label: 'Diesel B7'  },
                ] as const).map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters[key]}
                      onChange={() => toggleFuel(key)}
                      className="rounded-sm border-outline-variant text-primary focus:ring-primary h-4 w-4"
                    />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Provider */}
            <div className="mb-7">
              <label className="text-xs font-bold text-outline block mb-3 uppercase">
                {isEnglish ? 'Provider' : 'ผู้ให้บริการ'}
              </label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="all">{isEnglish ? 'All Providers' : 'ทุกผู้ให้บริการ'}</option>
                <option value="ptt">PTT Station</option>
                <option value="bangchak">Bangchak</option>
              </select>
            </div>

            {/* Date range */}
            <div className="mb-7">
              <label className="text-xs font-bold text-outline block mb-3 uppercase">
                {isEnglish ? 'Date Range' : 'ช่วงเวลา'}
              </label>
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] text-outline font-bold">{isEnglish ? 'FROM' : 'จากวันที่'}</span>
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="w-full mt-1 bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-outline font-bold">{isEnglish ? 'TO' : 'ถึงวันที่'}</span>
                  <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="w-full mt-1 bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-container transition-all shadow-sm">
              {isEnglish ? 'Apply Filters' : 'ใช้ตัวกรองข้อมูล'}
            </button>
          </div>

          {/* Market Insight card */}
          <div className="bg-primary p-6 rounded-xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">
                {isEnglish ? 'Weekly Analysis' : 'บทวิเคราะห์ประจำสัปดาห์'}
              </h4>
              <p className="text-sm font-medium leading-relaxed mb-4 font-ibm-plex-thai">
                {isEnglish
                  ? 'Global oil prices are trending upward. Thai domestic prices may rise within 48 hours.'
                  : 'แนวโน้มราคาน้ำมันโลกมีทิศทางขาขึ้น คาดการณ์ราคาน้ำมันในประเทศอาจมีการปรับตัวสูงขึ้นในอีก 48 ชม.'}
              </p>
              <a href="#" className="text-xs font-bold underline underline-offset-4">
                {isEnglish ? 'Read full analysis' : 'อ่านบทวิเคราะห์ฉบับเต็ม'}
              </a>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-8xl">insights</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
