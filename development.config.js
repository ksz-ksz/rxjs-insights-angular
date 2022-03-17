const AliasPlugin = require("enhanced-resolve/lib/AliasPlugin")
const path = require("path");

function resolveRxjsMajorVersion() {
  const rxjsPackage = require('rxjs/package.json');
  return rxjsPackage.version.split('.')[0];
}

function resolvePackagePath(pkg, missingPackageMessage = `Could not resolve package ${pkg}`) {
  try {
    const mainPath = require.resolve(pkg);
    const mainPathSegments = mainPath.split(path.sep);
    const indexOfNodeModules = mainPathSegments.indexOf('node_modules');
    return path.join(...mainPathSegments.slice(0, indexOfNodeModules), 'node_modules', pkg);
  } catch (e) {
    throw new Error(missingPackageMessage);
  }
}

class RxjsInsightsPlugin extends AliasPlugin {
  constructor() {
    const rxjsMajorVersion = resolveRxjsMajorVersion();
    const missingPackageMessage = `It seems that you are using RxJS v${rxjsMajorVersion}. Please, install the @rxjs-insights/rxjs${rxjsMajorVersion} package.`
    const options = [
      {onlyModule: true, name: '@rxjs-insights/rxjs-install', alias: resolvePackagePath(`@rxjs-insights/rxjs${rxjsMajorVersion}`, missingPackageMessage)},
      {onlyModule: true, name: 'rxjs', alias: resolvePackagePath(`@rxjs-insights/rxjs${rxjsMajorVersion}/rxjs`, missingPackageMessage)},
      {onlyModule: true, name: 'rxjs/operators', alias: resolvePackagePath(`@rxjs-insights/rxjs${rxjsMajorVersion}/rxjs/operators`, missingPackageMessage)},
      {onlyModule: true, name: '@rxjs-insights/rxjs-alias', alias: resolvePackagePath('rxjs')},
      {onlyModule: true, name: '@rxjs-insights/rxjs-alias/operators', alias: resolvePackagePath('rxjs/operators')},
    ]
    super('described-resolve', options, 'resolve');
  }
}

module.exports = {
    resolve: {
      plugins: [
        new RxjsInsightsPlugin()
      ]
    }
}
