import { getFeatureAImpl } from './impl';
import { getModuleAB } from '../moduleAB';

export function getFeatureA() {
  import(/* webpackChunkName: 'commonAsync' */'../commonAsync').then(m => m.getCommonAsync);
  return 'featureA' + getFeatureAImpl() + getModuleAB();
}
