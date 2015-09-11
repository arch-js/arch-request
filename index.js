module.exports = function(req, res, next) {
  req.appState = req.appState || {};

  req.appState.requestInfo = {
    ip: req.ip
  };

  next();
};
