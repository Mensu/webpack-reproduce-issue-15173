import { getModuleAB } from './moduleAB';
import { getModuleA } from './moduleA';

console.log({
  getModuleAB,
  getModuleA,
  // featureAAndHelper: featureA/index.js + featureA/helper.js
  getFeatureAIndex: () => import(/* webpackChunkName: 'featureAAndHelper' */ './featureA').then(m => m.getFeatureA),
  getFeatureAHelper: () => import(/* webpackChunkName: 'featureAAndHelper' */ './featureA/helper').then(m => m.getFeatureAHelper),
  // featureAOnly: featureA/index.js
  getFeatureAOnly: () => import(/* webpackChunkName: 'featureAOnly' */ './featureA').then(m => m.getFeatureA),
  // featureAB: shared by entryA and entryB
  getFeatureAB: () => import(/* webpackChunkName: 'featureAB' */ './featureAB').then(m => m.getFeatureAB),
});
