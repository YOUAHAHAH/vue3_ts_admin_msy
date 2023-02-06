function debounceRef(value: string, delay = 1000) {
  let timer: number | NodeJS.Timeout | undefined;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(val) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = val;
          trigger();
        }, delay);
      },
    };
  });
}

export default debounceRef;
