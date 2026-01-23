export function loadCss(path) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL(path, import.meta.url);
  document.head.appendChild(link);
}
