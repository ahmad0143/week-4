import Contact from '../Models/ContactModel.js';

const postData = async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message,
    });

    const newcontact = await contact.save();
    res.status(200).json({ newcontact, message: 'Data posted successfullty' });
  } catch (error) {
    throw new Error({ error: 'Error posting data' });
  }
};

export { postData };
