export interface messageInfo {
    message: string;
    title: 'Success' | 'Info' | 'Warning' | 'Error';
    severity: 'success' | 'info' | 'warning' | 'error';
}