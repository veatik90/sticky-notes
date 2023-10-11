export function throttle(f: <T>(args: T) => void, delay: number) {
  let timer = 0;
  return function <T>(args: T) {
    clearTimeout(timer);
    timer = setTimeout(() => f(args), delay);
  };
}
