const express = require('express');

class HomeController {
    getHome = (req, res) => {
        res.render('home');
    };
}
module.exports = new HomeController();