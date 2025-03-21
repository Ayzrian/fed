import { defaultLintersConfig, defaultTestsConfig } from '../constants';
import {
  Config, Linters, NodeJsVersions, ProjectTypes, Tests,
} from '../typedefs';

export const getDefaultConfig = (
  projectType = ProjectTypes.None,
): Config => ({
  projectType,
  homepage: '',
  nodejsMajorVersion: NodeJsVersions.v14,
  linters: {
    ...getDefaultLintersConfig(projectType),
  },
  tests: {
    ...getDefaultTestsConfig(projectType),
  },
});

function getDefaultLintersConfig(projectType: ProjectTypes): Linters {
  switch (projectType) {
    case ProjectTypes.Layout:
      return defaultLintersConfig;
    case ProjectTypes.LayoutDOM:
      return {
        ...defaultLintersConfig,
        bem: false,
      };
    case ProjectTypes.Javascript:
      return {
        ...defaultLintersConfig,
        bem: false,
      };
    case ProjectTypes.Typescript:
      return {
        ...defaultLintersConfig,
        bem: false,
      };
    case ProjectTypes.React:
      return {
        ...defaultLintersConfig,
        bem: false,
      };
    case ProjectTypes.ReactTypescript:
      return {
        ...defaultLintersConfig,
        bem: false,
      };
    case ProjectTypes.None:
    default:
      return defaultLintersConfig;
  }
}

function getDefaultTestsConfig(projectType: ProjectTypes): Tests {
  switch (projectType) {
    case ProjectTypes.Layout:
      return {
        ...defaultTestsConfig,
        jest: true,
        backstop: true,
      };
    case ProjectTypes.LayoutDOM:
      return {
        ...defaultTestsConfig,
        cypress: true,
      };
    case ProjectTypes.Javascript:
      return {
        ...defaultTestsConfig,
        jest: true,
      };
    case ProjectTypes.Typescript:
      return {
        ...defaultTestsConfig,
        jest: true,
      };
    case ProjectTypes.React:
      return {
        ...defaultTestsConfig,
        cypress: true,
      };
    case ProjectTypes.ReactTypescript:
      return {
        ...defaultTestsConfig,
        cypress: true,
      };
    case ProjectTypes.None:
    default:
      return defaultTestsConfig;
  }
}
