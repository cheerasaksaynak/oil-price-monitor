import type { FuelTypeConfig } from '@/types';

export const FUEL_TYPES: FuelTypeConfig[] = [
  {
    id: 'GASOHOL_95',
    label: 'Gasohol 95',
    labelTh: 'แก๊สโซฮอล์ 95',
    color: 'on-tertiary-fixed-variant',
    bgColor: 'tertiary-fixed',
  },
  {
    id: 'GASOHOL_91',
    label: 'Gasohol 91',
    labelTh: 'แก๊สโซฮอล์ 91',
    color: 'on-tertiary-fixed-variant',
    bgColor: 'tertiary-fixed',
  },
  {
    id: 'E20',
    label: 'E20',
    labelTh: 'E20',
    color: 'on-tertiary',
    bgColor: 'on-tertiary-container',
  },
  {
    id: 'DIESEL_B7',
    label: 'Diesel B7',
    labelTh: 'ดีเซล B7',
    color: 'on-error',
    bgColor: 'error',
  },
];

export const STATIONS = [
  'PTT Station',
  'Bangchak',
] as const;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
