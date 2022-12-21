const { Auhtor } = require('../models/author.model');
const { request, response } = require("express");

module.exports.getAllAuthor = (request, response) => {
    Auhtor.find({})
        .then((authors) => response.json(authors))
        .catch((err) => response.json(err))
}

// The method below is new
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name,
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}