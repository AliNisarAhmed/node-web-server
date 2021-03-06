
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

hbs.registerHelper('getYear', function() {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
});

app.get('/', function(req, res) {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    // year: new Date().getFullYear(),
    welcomeMessage: "Hey, welcome to my basic website"
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    // year: new Date().getFullYear()  //removed because of helper
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs');
})

app.listen(port, function() {
  console.log(`server started on port: ${port}`);
});