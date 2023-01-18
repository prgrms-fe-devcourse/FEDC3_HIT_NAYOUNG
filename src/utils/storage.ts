const getLocalStorage = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
};

const setLocalStorage = (key: string, value: string) => {
  try {
    return localStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

const removeLocalStorage = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };
