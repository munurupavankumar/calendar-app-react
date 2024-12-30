export interface Notification {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
  }

export type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
};