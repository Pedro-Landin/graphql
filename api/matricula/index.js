const matriculaSchema = require('./schema/matricula.graphql');
const matriculaResolvers = require('./resolvers/matriculaResolvers')
const matriculasAPI = require('./datasource/matricula')

module.exports = {
  matriculaSchema,
  matriculaResolvers,
  matriculasAPI
};