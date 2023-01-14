// YYYY-MM-DD
export const formatDate = (date: string) => {
  return new Date(+new Date(date) + 3240 * 10000).toISOString().split('T').shift();
};

// YYYY-MM-DD hh:mm:ss
export const formatDateTime = (dateTime: string) => {
  return new Date(+new Date(dateTime) + 3240 * 10000)
    .toISOString()
    .replace('T', ' ')
    .replace(/\..*/, '');
};
