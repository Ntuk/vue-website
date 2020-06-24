const Contact = require('../models/contact');

exports.getContacts = function(req, res) {

  Contact.find({})
    .populate('contact')
    .exec(function(errors, contacts) {
    if (errors) {
      return res.status(422).send(errors);
    }
    return res.json(contacts);
  })
}

exports.createContact = function (req, res) {
  const contactData = req.body;
  const contact = new Contact(contactData);

    contact.save((createdContact) => {
      if (createdContact) {
        return res.json(createdContact)
      } else (errors) => {
        return res.status(422).send(errors);
      }
    })
}

