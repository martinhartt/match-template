var expect = require('chai').expect;
var matchTemplate = require('../index');
describe('match template', function() {
  describe('#matchTemplate()', function () {
    it('It should filter out falsy properties in template', function () {
      var template = {
        id: true,
        name: true,
        location: {
          town: true,
        }
      };

      var object = {
        id: 5,
        name: 'Tom',
        surname: 'Smith',
        isMember: false,
        location: {
          town: 'Manchester, UK',
          address: '32 Baker Street',
          postcode: 'M25 HA2',
        },
      };

      var filteredObject = matchTemplate(object, template);

      expect(filteredObject).to.deep.eql({
        id: 5,
        name: 'Tom',
        location: {
          town: 'Manchester, UK',
        },
      });
    });

    it('It should output empty object when template is empty', function () {
      var template = {};

      var object = {
        id: 5,
        name: 'Tom',
        surname: 'Smith',
        isMember: false,
        location: {
          town: 'Manchester, UK',
          address: '32 Baker Street',
          postcode: 'M25 HA2',
        },
      };

      var filteredObject = matchTemplate(object, template);

      expect(filteredObject).to.deep.eql({});
    });

    it('It should not include nested objects if their property is falsy', function () {
      var template = {
        id: true,
        name: true,
        surname: true,
        isMember: false,
        location: false,
      };

      var object = {
        id: 5,
        name: 'Tom',
        surname: 'Smith',
        isMember: false,
        location: {
          town: 'Manchester, UK',
          address: '32 Baker Street',
          postcode: 'M25 HA2',
        },
      };

      var filteredObject = matchTemplate(object, template);

      expect(filteredObject).to.not.have.property('location');
    });
  });
});
