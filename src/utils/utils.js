export const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((wrapped, f) => f(wrapped), comp);
};

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
}
