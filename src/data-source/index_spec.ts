import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { paths } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');

describe('data-source', () => {
  it('generates the expected data-source files', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematic('data-source', { name: 'test-data-source' }, Tree.empty());

    expect(tree.files).toEqual([
      `/${paths.dataSourcesDir}/index.ts`,
      `/${paths.dataSourcesDir}/test/test.data-source.spec.ts`,
      `/${paths.dataSourcesDir}/test/test.data-source.ts`,
      `/${paths.dataSourcesDir}/test/index.ts`,
    ]);
  });
});
