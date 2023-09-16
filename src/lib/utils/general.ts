export function timeout(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export function trimSpace(value = '') {
  // trim and remove multiple tabs/spaces
  return value.trim().replaceAll(/[ \t]{2,}/g, ' ');
}
