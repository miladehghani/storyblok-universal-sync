# Storyblok Universal Sync CLI

The Storyblok Universal Sync CLI is a command-line interface tool designed to sync Storyblok content to different server locations.

## Options

- `--help`: Display help information.
- `--version`: Display the version number of the CLI tool.
- `--sourceOauthToken`: The OAuth token for the source Storyblok account. This is required.
- `--targetOauthToken`: The OAuth token for the target Storyblok account. Optional.
- `--sourceSpaceId`: The Space ID of the source Storyblok space. This is required.
- `--targetSpaceId`: The Space ID of the target Storyblok space. This is required.
- `--types`: Specify the types of content to sync. Supported types include 'assets', 'components', 'folders', 'stories'. You can specify multiple types by separating them with spaces. This is required.
- `--experimental-updateUuids`: Each created story will get a new uuid from Storyblok. References between content types will fail. This feature creates a mapping and updates the reference. Could need an extra sync if referencing story is created/updated before the referenced story.

## How to Use

1. Ensure you have installed Node.js and npm on your system.
2. Install the Storyblok Universal Sync CLI globally by running:
   ```bash
   npm install -g storyblok-universal-sync
   ```
3. Use the CLI tool with the specified options to sync content between Storyblok spaces.

## Examples

Sync stories and assets from a source space to a target space:

```bash
storyblok-universal-sync --sourceOauthToken YOUR_SOURCE_TOKEN --targetOauthToken YOUR_TARGET_TOKEN --sourceSpaceId SOURCE_SPACE_ID --targetSpaceId TARGET_SPACE_ID --types stories assets
```
