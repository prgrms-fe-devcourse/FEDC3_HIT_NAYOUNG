const getLocalStorage = (key: string) => {
  try {
    localStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
};

const setLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };
