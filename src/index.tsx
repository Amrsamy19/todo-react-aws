import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouterProvider } from './providers/route';
import { AuthProvider } from './providers/auth';
import CssBaseline from '@mui/material/CssBaseline';
import { AppThemeProvider } from './providers/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppThemeProvider>
        <CssBaseline />
        <AppRouterProvider />
      </AppThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
