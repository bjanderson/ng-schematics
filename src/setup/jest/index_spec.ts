import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { paths } from '../../utils';

const collectionPath = path.join(__dirname, '../../collection.json');

describe('setup-jest', () => {
  it('generates the expected jest config file', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner.runSchematicAsync('setup-jest', {}, Tree.empty()).toPromise();

    expect(tree.files).toEqual([paths.jestConf]);
  });
});
