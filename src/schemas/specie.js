const Specie = {
  name: 'Specie',
  primaryKey: 'id',
  properties: {
    id: 'int',
    registredBy: 'string?',
    specie: 'string',
    description: 'string?',
    typePruning: 'string',
    latitude: 'float?',
    longitude: 'float?',
    date: 'string',
    // address: 'string'
  },
};
export default Specie;
