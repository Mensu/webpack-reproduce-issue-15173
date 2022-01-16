import { getModuleAB } from '../moduleAB';

export function getCommonAsync() {
  return 'commonAsync' + getModuleAB();
}