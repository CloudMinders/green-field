const {User, Book, BookUsers} = require('../models/index');


const userController = {
  getUsers(req, res) {
    User.findAll()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postBookUser(req,res) {

  },
  getUserWithBooks(req, res) {
    let userId = req.params.id;
    User.findById(userId, {
      include: [
        {
          model: Book
        }
      ]
    }).then((userBookData) => {
      res.json(userBookData);
    })
    .catch((err) => {
      console.log(err);
    })

  },
  getUserBookId(req,res) {

  },
  updateBook(req, res) {

  },
  deleteBook(req, res) {

  }
};

module.exports = userController;