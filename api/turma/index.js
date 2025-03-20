const turmaSchema = require("./schema/turma.graphql");
const turmaResolvers = require("./resolvers/turmaResolvers");
const turmasAPI = require("./datasource/turma");

module.exports = { turmaSchema, turmaResolvers, turmasAPI };