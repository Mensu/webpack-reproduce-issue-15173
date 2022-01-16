import { getModuleAB } from './moduleAB';

console.log({
  getModuleAB,
  getFeatureAB: () => import(/* webpackChunkName: 'featureAB' */ './featureAB').then(m => m.getFeatureAB),
});
