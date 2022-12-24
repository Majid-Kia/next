const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, "styles")],
    prependData: `@import "_variables.scss";
    @import "_mixins.scss";`,
  },
};
