var middleware = require('../index');

describe("request middleware", function() {
  it("puts the ip address in appState", function(done) {
    var request = {
      arch: {
        appState: {}
      },
      ip: '127.0.0.1'
    };

    middleware(request, null, function() {
      expect(request.arch.appState.requestInfo.ip).toBe(request.ip);
      done();
    });
  });

  it("throws when arch not defined", function(done) {
    var request = {
      ip: '127.0.0.1'
    };

    try {
      middleware(request, null, fail);
    } catch (e) {
      expect(e.message).toEqual('request.arch not defined. Use arch default middlewares first.')
      done();
    }
  });

  it("throws when arch.appState not defined", function(done) {
    var request = {
      arch: {},
      ip: '127.0.0.1'
    };

    try {
      middleware(request, null, fail);
    } catch (e) {
      expect(e.message).toEqual('request.arch.appState not defined. Use arch default middlewares first.')
      done();
    }
  });
});
