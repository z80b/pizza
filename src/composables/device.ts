export const useDevice = () => {
  let windowWidth = window.innerWidth;

  const throttle = (callback: Function, delay: number) => {
    let wait = false;
    return (...args: any) => {
      if (wait) {
          return;
      }
      callback(...args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay);
    }
  };

  window.addEventListener('resize', (event: Event) => {
    console.log('useDevice', event);
  });
};