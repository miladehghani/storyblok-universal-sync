const yargs = require("yargs");
const Sync = require("./src/sync");
const StoryblokClient = require("storyblok-js-client");

const argv = yargs
  .option("sourceOauthToken", {
    description: "Source oauthToken",
    type: "string",
    demandOption: true,
  })
  .option("targetOauthToken", {
    description: "Target oauthToken",
    type: "string",
    demandOption: false,
  })
  .option("sourceSpaceId", {
    description: "Source Space ID",
    type: "string",
    demandOption: true,
  })
  .option("targetSpaceId", {
    description: "Target Space ID",
    type: "string",
    demandOption: true,
  })
  .option("types", {
    description:
      "Types to sync including, 'assets', 'components', 'folders', 'stories' use space separated for multiple types",
    type: "array",
    demandOption: true,
  }).argv;

const {
  sourceOauthToken,
  targetOauthToken,
  sourceSpaceId,
  targetSpaceId,
  types,
} = argv;

const sourceClient = new StoryblokClient({
  oauthToken: sourceOauthToken,
});
const targetClient = new StoryblokClient({
  oauthToken: targetOauthToken || sourceOauthToken,
});

Sync(types, {
  sourceSpaceId: sourceSpaceId,
  targetSpaceId: targetSpaceId,
  sourceClient: sourceClient,
  targetClient: targetClient,
});
