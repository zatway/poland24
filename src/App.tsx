import React from 'react';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('loading')}</h1>
    </div>
  );
};

export default App;
