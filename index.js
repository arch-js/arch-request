module.exports = function(req, res, next) {
  req.appState.requestInfo = {
    ip: req.ip
  };

  next();
};
