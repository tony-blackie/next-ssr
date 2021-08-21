const routes = require("next-routes");

module.exports = routes().add("/portfolio", "/portfolios/:id");
// .add('portfolios', '/portfolios')
