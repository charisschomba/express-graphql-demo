export default `
 type User {
 _id: ID!
 name: String!
 email: String!
 }
 
 type Query{
  user(_id: ID!): User 
  users:[User]
 }
 
 type Mutation{
  addUser(data: newUser): User
  editUser(data: editData): User!
  deleteUser(_id: ID!): User
 }
 
  input newUser{
  name: String!
  email: String!
 }
 
 input editData{
  _id: String!
  name: String
  email: String
 }
`;