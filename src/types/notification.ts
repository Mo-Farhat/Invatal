export interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'warning' | 'success' | 'error';
    read: boolean;
    createdAt: Date;
  }
  export interface NotificationState {
    notifications: Notification[];
    unreadCount: number;
  }