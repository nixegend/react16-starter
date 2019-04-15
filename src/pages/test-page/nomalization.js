/* eslint-disable */
import { createSelector } from 'reselect';

import { normalize, schema } from 'normalizr';
import { baseEntityTypes } from '../../common/constants/entities-types';

const baseEntitySchemas = {};

for (const type in baseEntityTypes) {
  baseEntitySchemas[baseEntityTypes[type]] = new schema.Entity(
    baseEntityTypes[type]
  );
}

const entitiesSchema = new schema.Array(
  baseEntitySchemas,
  (input, parent, key) => input.type
);

const data = [
  { id: 'rrrr', name: 'event23', type: 'events' },
  { id: 'dddd', name: 'news45', type: 'news' }
];

const news = [
  { id: '1111', name: 'news111', type: 'news' },
  { id: '2222', name: 'news222', type: 'news' },
  { id: '3333', name: 'news333', type: 'news' }
];
const events = [
  { id: 'wwww', name: 'event1', type: 'events' },
  { id: 'ssss', name: 'event2', type: 'events' },
  { id: 'qqqq', name: 'event3', type: 'events' }
];

const normalizedData = normalize(data, entitiesSchema);

// console.log(baseEntitySchemas);
// console.log(normalizedData);
// console.log('=================================');

// const stateEntities = {
//   entities: {
//     'rrrr': { id: 'rrrr', name: 'event23', type: 'events' },
//     '1111': { id: '1111', name: 'news111', type: 'news' },
//     'wwww': { id: 'wwww', name: 'event1', type: 'events' },
//   },
// };

// const makeGetEntitiesByIds = () => createSelector(
// arg1 = state
// arg2 = related items ids
// (state) => state.baseEntities,
// (state, ids) => { console.log(state); return ids; },
// (allEntities, ids) => ids.map(idObject => allEntities[idObject.schema][idObject.id]),
// );

// const getEntitiesByIds = makeGetEntitiesByIds();

// console.log(getEntitiesByIds(stateEntities));

// const schema = { entities: {}, pages: {}, arrayOf: {} };

// for (const type of entityTypes.BASE_ENTITY_TYPES) {
//   schema.entities[type] = new Schema(type);
// }

// console.clear();

// for (const type of Object.keys(entityTypes.ENTITY_TYPES_WITH_DEPENDENCIES)) {
//   for (let i = 0; i < Object.keys(entityTypes.ENTITY_TYPES_WITH_DEPENDENCIES[type]).length; ++i) {
//     const { dependency, entities } = entityTypes.ENTITY_TYPES_WITH_DEPENDENCIES[type][i];

//     let relatedEntitySchema;
//     if (dependency.isUnion) {
//       const relatedEntityTypes = {};
//       for (const relatedEntityType of entities) {
//         relatedEntityTypes[relatedEntityType] = schema.entities[relatedEntityType];
//       }
//       relatedEntitySchema = unionOf(relatedEntityTypes, { schemaAttribute: 'type' });
//     } else {
//       relatedEntitySchema = schema.entities[entities];
//     }
//     if (dependency.isArray) {
//       relatedEntitySchema = arrayOf(relatedEntitySchema);
//     }

//     schema.entities[type].define({
//       [dependency.name]: relatedEntitySchema,
//     });
//   }
// }

// for (const type of Object.keys(entityTypes.PAGE_ENTITY_TYPES)) {
//   const pageEntityTypes = {};
//   for (const pageEntityType of entityTypes.PAGE_ENTITY_TYPES[type]) {
//     pageEntityTypes[pageEntityType] = schema.entities[pageEntityType];
//   }
//   schema.pages[type] = arrayOf(unionOf(pageEntityTypes, { schemaAttribute: 'type' }));
// }

// console.clear();

// const socialNetwork = new Schema('socialNetworks', {
//   assignEntity: (obj, key, val) => {
//     if (key === 'clients') {
//       obj.clientsIds = val;
//       if ('clients' in obj) {
//         delete obj.clients;
//       }
//     } else {
//       obj[key] = val;
//     }
//   },
// });

// const client = new Schema('clients');

// socialNetwork.define({
//   clients: arrayOf(client),
// });

// const socialFeedsSchema = arrayOf(socialNetwork);

// const input = {
//   id: 1,
//   title: 'Some Article',
//   collections: [{
//     id: 1,
//     title: 'Awesome Writing',
//   }, {
//     id: 7,
//     title: 'Even Awesomer',
//   }]
// };

// const originalData = [
//   {
//     id: '1',
//     name: 'Facebook',
//     urlPart: 'facebook',
//     clients: [
//       { id: '12', name: 'mavericbysigma', tokenlifetime: '' },
//     ],
//   },
//   {
//     id: '2',
//     name: 'Instagram',
//     urlPart: 'instagram',
//     clients: [
//       { id: '13', name: 'mavericbysigma', tokenlifetime: '' },
//       { id: '14', name: 'sigma_ab', tokenlifetime: '' },
//     ],
//   },
//   {
//     id: '3',
//     name: 'Linkedin',
//     urlPart: 'linkedin',
//     clients: [
//       { id: '15', name: 'mavericbysigma', tokenlifetime: '' },
//       { id: '16', name: 'sigma_ab', tokenlifetime: '' },
//     ],
//   },
//   {
//     id: '4',
//     name: 'Twitter',
//     urlPart: 'twitter',
//     clients: [
//       { id: '17', name: 'mavericbysigma', tokenlifetime: '' },
//       { id: '18', name: 'sigma_ab', tokenlifetime: '' },
//     ],
//   },
// ];

// const normalizedData = normalize(originalData, arrayOf(socialNetwork));

// console.log(originalData);
