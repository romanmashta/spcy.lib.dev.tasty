import _ from 'lodash';
import { addSerializer, toMatchSpecificSnapshot } from 'jest-specific-snapshot';
import * as path from 'path';

const SNAPSHOT_ROOT = '__snapshots__';

addSerializer({
  test: object => _.isObject(object),
  print: object => JSON.stringify(object, undefined, 2)
});

function toMatchTastyShot(received: any, testName: string, type?: string) {
  const snapshotFile = type
    ? path.join(SNAPSHOT_ROOT, testName, `${type}.shot`)
    : path.join(SNAPSHOT_ROOT, `${testName}.shot`);
  return toMatchSpecificSnapshot.apply(this, [received, snapshotFile]);
}

expect.extend({ toMatchTastyShot });

export { toMatchTastyShot };
