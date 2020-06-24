const Contact = require('../models/contact');

exports.getContacts = function(req, res) {
  Contact.find({})
      .populate('name -_id -email -message')
      .exec((errors, contacts) => {
    if (errors) {
      return res.status(422).send(errors);
    }
    return res.json(contacts);
  });
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

  // const contact = new Contact({
  //   name : req.body.name,
  //   email : req.body.email,
  //   message : req.body.message
  // })

  // contact.save( (errors, createdContact) => {
  //   if (errors) {
  //     return res.status(422).send(errors);
  //   } else {
  //     return res.status(422).send({message: 'Message is getting saved!'});
  //   }
  // })



  // const lockId = req.query.lockId;

  // if (!lock.isBusy(lockId)) {
  //   lock.acquire(lockId, function(done) {
  //   const contactData = req.body;
  //   const contact = new Contact(contactData);
  //   contact.author = req.user;

  //   contact.save((errors, createdContact) => {
  //     setTimeout(() => done(), 5000);

  //     if (errors) {
  //       return res.status(422).send(errors);
  //     }

  //     return res.json(createdContact);
  //   });
  //   }, function(errors, ret) {
  //       errors && console.error(errors)
  //   });
  // } else {
  //   return res.status(422).send({message: 'Message is getting saved!'});
  // }
// }

