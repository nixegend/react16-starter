import { schema } from 'normalizr';
import entityTypes from '../constants/entity-types';

const baseEntitySchemas = Object.keys(entityTypes).reduce((prevObj, key) => {
  prevObj[entityTypes[key]] = new schema.Entity(entityTypes[key]); // eslint-disable-line

  return prevObj;
}, {});

const entitiesSchema = new schema.Array(baseEntitySchemas, input => input.type);

export default entitiesSchema;
