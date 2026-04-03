import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date to Thai Buddhist calendar
 * @param date - Date to format
 * @returns Formatted Thai date string
 */
export function formatThaiDate(date: Date): string {
  const buddhistYear = date.getFullYear() + 543;
  const thaiMonths = [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
    'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
  ];
  
  return `${date.getDate()} ${thaiMonths[date.getMonth()]} ${buddhistYear}`;
}

/**
 * Format price with 2 decimal places
 */
export function formatPrice(price: number): string {
  return price.toFixed(2);
}

/**
 * Format price change with sign and color
 */
export function formatPriceChange(change: number): {
  text: string;
  color: string;
} {
  if (change > 0) {
    return { text: `+${change.toFixed(2)}`, color: 'text-error' };
  } else if (change < 0) {
    return { text: change.toFixed(2), color: 'text-primary' };
  }
  return { text: '0.00', color: 'text-on-surface-variant' };
}
