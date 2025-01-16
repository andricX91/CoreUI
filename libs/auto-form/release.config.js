module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/exec',
      {
        prepareCmd: `npx nx run-many --target=release --all && npx -p replace-json-property rjp ./libs/*/package.json version \${nextRelease.version}`,
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    '@semantic-release/version',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
};
