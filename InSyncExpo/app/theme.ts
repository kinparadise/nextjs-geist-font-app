import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#10B981', // Join Button Background
    background: '#FFFFFF', // Top Bar Background
    card: '#FFFFFF', // Top Bar Background
    text: '#111827', // Top Bar Text
    border: '#E5E7EB', // Top Bar Border
    notification: '#10B981', // Active Mic/Video Icons
    chatSender: '#E0F2FE', // Chat Bubbles Sender
    chatReceiver: '#F3F4F6', // Chat Bubbles Receiver
    mutedIcon: '#9CA3AF', // Muted State Icons
    mutedBackground: '#F3F4F6', // Muted State Background
    leaveCallBackground: '#EF4444', // Leave Call Background
    leaveCallText: '#FFFFFF', // Leave Call Text
    joinButtonText: '#FFFFFF', // Join Button Text
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#10B981',
    background: '#111827',
    card: '#1F2937',
    text: '#F9FAFB',
    border: '#374151',
    notification: '#10B981',
    chatSender: '#0E7490',
    chatReceiver: '#374151',
    mutedIcon: '#6B7280',
    mutedBackground: '#374151',
    leaveCallBackground: '#B91C1C',
    leaveCallText: '#F9FAFB',
    joinButtonText: '#F9FAFB',
  },
};
