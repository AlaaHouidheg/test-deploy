const express = require("express");

const router = express.Router();
const Contact = require("../models/Contact");

//post a contact
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);

    if (!req.body.title) {
      res.send({ msg: "title is required" });
      return;
    }
    const response = await newContact.save();
    res.send({ response: response, msg: "saved" });
  } catch (error) {
    res.send("connot save it");
    console.log(error);
  }
});

//get all contacts

router.get("/", async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ result: result, msg: "getting users s_uccessfully" });
  } catch (error) {
    res.send({ message: "cannot get contacts" });
  }
});

//get contact by id

router.get("/:id", async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ result: result, msg: "getting users s_uccessfully" });
  } catch (error) {
    res.send({ message: "cannot get the contact" });
  }
});
//delete contact by id

router.delete("/:id", async (req, res) => {
  try {
    const result = await Contact.findOneAndRemove({ _id: req.params.id });
    res.send({ msg: "deleted" });
  } catch (error) {
    res.send({ message: "cannot delete the conctact" });
  }
});
//update contact by id

router.put("/:id", async (req, res) => {
  try {
    const result = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ respond: result, msg: "updated" });
  } catch (error) {
    res.send({ message: "cannot update the conctact" });
  }
});

module.exports = router;
