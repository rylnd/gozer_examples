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

  describe("scraping Google's page title", function() {
    it('should fail', function() {
      var titlePromise = page.run(function() {
        return document.title;
      });

      expect(titlePromise).to.eventually.have.string('This most certainly is not the title');
    });
  });
})
