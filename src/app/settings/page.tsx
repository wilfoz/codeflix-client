import React from 'react';
import { getAppSettings } from '../lib/settings';

export async function page() {
  const { theme, language } = await getAppSettings();
  return (
    <div>
      <h1>Settings page</h1>
      <div className='border border-dashed border-red-50 p-4'>
        <p>Theme: {theme}</p>
        <p>Language: {language}</p>
      </div>
    </div>
  );
}
