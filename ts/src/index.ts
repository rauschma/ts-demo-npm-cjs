import endsWith from 'lodash/endsWith';

export function removeSuffix(str: string, suffix: string) {
  if (!endsWith(str, suffix)) {
    throw new Error(`${JSON.stringify(suffix)} is not a suffix of ${JSON.stringify(str)}`);
  }
  return str.slice(0, -suffix.length);
}