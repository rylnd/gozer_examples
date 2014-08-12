chai = require('chai');
chai.use(require('chai-as-promised'));
expect = chai.expect;
Gozer = require('gozer');

describe('Gozer', function() {
  var gozer, page;

  before(function() {
    gozer = new Gozer({host: 'google.com'});
  })

  beforeEach(function() {
    page = gozer.visit('/');
  })

  describe('making HTML-based assertions', function() {
    it("can test a page's title", function() {
      var titlePromise = page.run(function() {
        return document.title;
      });

      return expect(titlePromise).to.eventually.equal('Google');
    });
  });
})
