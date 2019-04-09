// The User schema.
import User from "../../../models/User";

export default {
  Query: {
    user: (root, args) => {

      return new Promise((resolve, reject) => {
        User.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: () => {
      return new Promise((resolve, reject) => {
        User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addUser: async (root, {data}) => {
      const newUser = new User(data);

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editUser: async (root, {data: { _id, name, email }}) => {
      return await new Promise((resolve, reject) => {
        User.findOneAndUpdate({ _id }, { $set: { name, email } }, {new: true}).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });

    },
    deleteUser: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }

};
