const express = require('express')
const hbs = require('hbs')

const app = express()

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`))

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())
hbs.registerHelper('screamIt', (text, number) => `${text.toUpperCase()} ${number * 2}`)

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Welcome to this interesting place'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page'
    })
})

app.get('/help', (req, res) => {
    res.render('help.hbs', {
        pageTitle: 'Help page'
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Internal server error'
    })
})

app.listen(3000, () => console.log('Server is up on port 3000'))