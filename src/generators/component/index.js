/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'Stateless Function (Styled)',
        'Stateless Function (Styled withTheme)',
        'ES6 Class (Pure)',
        'ES6 Class',
      ],
    },
    {
      type: 'input',
      name: 'path',
      message: 'What its path?',
      default: '/',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;
    let storiesTemplate = './component/stories.js.hbs';

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './component/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      case 'Stateless Function (Styled)': {
        componentTemplate = './component/styled.js.hbs';
        break;
      }
      case 'Stateless Function (Styled withTheme)': {
        componentTemplate = './component/styled-with-theme.js.hbs';
        storiesTemplate = './component/stories-with-theme.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{pathCase path}}/{{camelCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{pathCase path}}/{{camelCase name}}/index.stories.js',
        templateFile: storiesTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{pathCase path}}/{{camelCase name}}/index.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
