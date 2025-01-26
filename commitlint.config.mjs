const config = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^([a-z]+)?\s*\((.+?)\): (.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'build',
        'docs',
        'feat',
        'evol',
        'fix',
        'style',
        'refactor',
        'test',
        'ci',
        'revert',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
  },
};

export default config;
