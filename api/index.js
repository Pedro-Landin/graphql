const { ApolloServer } = require("apollo-server");
const { mergeTypeDefs } = require("@graphql-tools/merge")
const path = require("path")

const { userSchema, userResolvers, UsersAPI } = require("./user")
const { turmaSchema, turmaResolvers, TurmasAPI } = require("./turma")
const { matriculaSchema, matriculaResolvers, matriculasAPI} = require("./matricula")


const typeDefs = mergeTypeDefs([matriculaSchema,userSchema, turmaSchema]);
const resolvers = [userResolvers, turmaResolvers, matriculaResolvers];

const dbConfig = {
  client: "sqlite3",
  userNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, "./data/database.db")
  }
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
      turmasAPI: new TurmasAPI(dbConfig),
      matriculasAPI: new matriculasAPI(dbConfig)
    }
  }
});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
