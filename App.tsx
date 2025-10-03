import React from 'react';
import { SettingsProvider } from './contexts/SettingsContext';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <Layout />
    </SettingsProvider>
  );
};

export default App;