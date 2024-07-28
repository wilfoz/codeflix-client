export const getAppSettings = (): Promise<{
  theme: string;
  language: string;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: 'dark', language: 'en' });
    }, 1000); // Simulating async call to fetch settings
  });
};
