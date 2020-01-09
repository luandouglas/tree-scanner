import Realm from 'realm';
import specie from './specie';
import coordinates from './coordinates';
import tree from './tree';
export default function getRealm() {
  return Realm.open({
    schema: [specie, coordinates, tree],
    schemaVersion: 3,
  });
}
