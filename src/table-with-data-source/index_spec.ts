import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { paths } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');

describe('table', () => {
  it('generates the module file by default', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner.runSchematicAsync(
      'table',
      { name: 'test-table', prefix: 'tst' },
      Tree.empty()
    ).toPromise();

    expect(tree.files).toEqual([
      `/${paths.componentsDir}/test-table/test-table.component.spec.ts`,
      `/${paths.componentsDir}/test-table/test-table.component.html`,
      `/${paths.componentsDir}/test-table/test-table.component.scss`,
      `/${paths.componentsDir}/test-table/test-table.component.ts`,
      `/${paths.componentsDir}/test-table/test-table.module.ts`,
      `/${paths.componentsDir}/test-table/index.ts`,
    ]);
  });

  it('generates the module file when route is true', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner.runSchematicAsync(
      'table',
      { name: 'test-table', prefix: 'tst', route: true },
      Tree.empty()
    ).toPromise();

    expect(tree.files).toEqual([
      `/${paths.componentsDir}/test-table/test-table.component.spec.ts`,
      `/${paths.componentsDir}/test-table/test-table.component.html`,
      `/${paths.componentsDir}/test-table/test-table.component.scss`,
      `/${paths.componentsDir}/test-table/test-table.component.ts`,
      `/${paths.componentsDir}/test-table/test-table.module.ts`,
      `/${paths.componentsDir}/test-table/index.ts`,
    ]);
  });
});
