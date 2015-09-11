module.exports = function(req, res, next) {
  if (typeof req.arch === 'undefined') throw new Error('request.arch not defined. Use arch default middlewares first.');
  if (typeof req.arch.appState === 'undefined') throw new Error('request.arch.appState not defined. Use arch default middlewares first.');

  req.arch.appState.requestInfo = {
    ip: req.ip
  };

  next();
};
