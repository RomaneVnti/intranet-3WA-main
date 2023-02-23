module.exports = function (req, res, next) {
  if (req.user && req.user.isAdmin === true) {
    return next();
  }

  return res.send(403, { error: 'Accès refusé. Seul les administrateurs peuvent accèder à cette ressource'});
}
