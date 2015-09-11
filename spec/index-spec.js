var middleware = require('../index');

describe("request middleware", function() {
  it("puts the ip address in appState", function(done) {
    var request = {
      appState: {},
      ip: '127.0.0.1'
    };

    middleware(request, null, function() {
      expect(request.appState.requestInfo.ip).toBe(request.ip);
      done();
    });
  });

  it("creates an appState object when none provided", function(done) {
    var request = {
      ip: '127.0.0.1'
    };

    middleware(request, null, function() {
      expect(request.appState).toBeDefined();
      done();
    })
  });
});
