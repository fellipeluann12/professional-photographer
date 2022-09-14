import nodemailer from 'nodemailer';
import { USER, PASS } from '../configs.js';
import Contact from '../models/contact.js';

export const createContact = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send({ message: 'Fields cannot be empty' });
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: USER,
      pass: PASS,
    },
  });

  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    let data = await contact.save();
    let content = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

    var mailOptions = {
      from: data.name,
      to: 'fellipeluann12@gmail.com',
      subject: `[PROFESSIONAL PHOTOGRAPHER] Contact from: ${data.name} `,
      text: content,
    };

    await smtpTransport.sendMail(mailOptions);

    smtpTransport.close();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      essage: err.message || 'Some error occurred while creating the listing.',
    });
  }
};
