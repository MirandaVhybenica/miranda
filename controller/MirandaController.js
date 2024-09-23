const ph = {
    nom: (req, res) => {
        res.render('index'); 
        console.log('helloworld'); 
    },
    about: (req, res) => {
        res.render('pages/about');
    },
    home: (req, res) => {
        res.render('pages/home');
    },
    shop: (req, res) => {
        res.render('pages/shop');
    },
    contact: (req, res) => {
        res.render('pages/contact');
    }
    
}
module.exports = ph