var app = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');
describe('index page', function() {

  beforeEach(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });

//   it("should have defined headless browser", function(next){
//     expect(typeof browser != "undefined").toBe(true);
//     expect(browser instanceof Browser).toBe(true);
//     next();
// });

  it('has a index page', function() {
    browser.assert.status(200);
  });
  it('displays to-do list', function() {
    browser.assert.text('body', 'Eat Breakfast');
  });
});
