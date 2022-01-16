import { getModuleAB } from '../moduleAB';

export function getFeatureAB() {
  import(/* webpackChunkName: 'commonAsync' */'../commonAsync').then(m => m.getCommonAsync);
  return 'featureAB' + getModuleAB();
}
