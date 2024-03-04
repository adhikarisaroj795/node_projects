const express = require('express');
const bcrypt = require('bcrypt');
const db = require(../db);

exports.register = async (req, res) => {
  const { name, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(name, hashedPassword, email);



   const insertUserQuery = 'INSERT INTO users (name, email, password, salt)';
};
