// Type definitions for The Fluid Authority app

export type FuelType = 'GASOHOL_95' | 'GASOHOL_91' | 'E20' | 'DIESEL_B7';
export type Station = 'PTT Station' | 'Bangchak';

export interface PriceEntry {
  id: string;
  date: Date;
  station: Station;
  fuelType: FuelType;
  price: number; // THB per liter
  change: number; // +/- from previous day
  changePercent: number;
  location?: string;
}

export interface FuelTypeConfig {
  id: FuelType;
  label: string;
  labelTh: string;
  color: string;
  bgColor: string;
}

export interface ChartDataPoint {
  date: string;
  gasohol95: number;
  gasohol91: number;
  e20: number;
  dieselB7: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    lastUpdated: string;
    count: number;
  };
}
