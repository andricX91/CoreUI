module.exports = {
  branches: ['main'],
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      { type: 'RELEASE', section: 'Features' },
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'chore', section: 'Chores' },
      { type: 'docs', hidden: true },
      { type: 'style', hidden: true },
      { type: 'refactor', section: 'Refactoring' },
      { type: 'perf', hidden: true },
      { type: 'test', hidden: true },
    ],
  },
  releaseRules: [
    { type: 'refactor', release: 'patch' },
    { type: 'RELEASE', release: 'patch' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `./CHANGELOG.md`,
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          process.platform === 'win32'
            ? 'set VERSION=${nextRelease.version} && npx nx run-many -t release && npx -p replace-json-property rjp ./libs/auto-form/package.json version %VERSION%'
            : 'VERSION=${nextRelease.version} npx nx run-many -t release && npx -p replace-json-property rjp ./libs/auto-form/package.json version ${nextRelease.version}',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [`libs/**/package.json`, `package.json`, `CHANGELOG.md`],
        message:
          'chore(release): -v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
