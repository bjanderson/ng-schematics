import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { paths } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');
const options = { name: 'test-component', prefix: 'tst'};

describe('component', () => {
  it('does not create a module file when module === false', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const opts = {...options};
    const tree = await runner.runSchematic(
      'component',
      opts,
      Tree.empty()
    );

    expect(tree?.files).toEqual([
      `/${paths.componentsDir}/test/test.component.spec.ts`,
      `/${paths.componentsDir}/test/test.component.html`,
      `/${paths.componentsDir}/test/test.component.scss`,
      `/${paths.componentsDir}/test/test.component.ts`,
      `/${paths.componentsDir}/test/index.ts`,
    ]);
  });

});
