import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateTime = (date: string) => {
  const d = new Date(date)
  return d.toLocaleString()
}

export const fromSnackCaseToNormal = (snackCaseString: string) => {
  const words = snackCaseString.split('_');
  const normalString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return normalString;
}
