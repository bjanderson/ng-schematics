import { camelize, capitalize, classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  schematic,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { paths } from '../utils';
import * as fileExtensions from '../utils/file-extensions';

const stringUtils = {
  camelize,
  capitalize,
  classify,
  dasherize,
};

export default function (options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    options = setupOptions(options);
    options.datasource = options.name.replace('-table', '');
    const dataSourceOptions = { ...options };
    dataSourceOptions.name = dataSourceOptions.datasoource;

    const rules = [createFiles(options), addDataSource(dataSourceOptions)];

    return chain(rules)(tree, context);
  };
}

function setupOptions(options: any): any {
  try {
    const re = /-?table$/i;
    const name = options.name.replace(re, '').trim();

    if (name === '') {
      throw new Error(
        `Invalid component name: ${options.name}. Name it something other than "Table"`
      );
    } else {
      options.name = name + '-table';
    }
  } catch (err) {
    throw new Error(`Invalid component name: ${options.name}`);
  }

  return options;
}

function createFiles(options: any): Rule {
  return mergeWith(
    apply(url('./files'), [
      template({
        ...fileExtensions,
        ...options,
        ...stringUtils,
      }),
      move(`${paths.componentsDir}/${dasherize(options.name)}`),
    ])
  );
}

function addDataSource(options: any): Rule {
  options.isServerSide = true;
  return schematic('data-source', options);
}
