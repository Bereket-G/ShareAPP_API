'use strict';

module.exports = function(User) {
  User.afterRemote('login', (context, remoteMethodOutput, next) => {
    User.findOne({
      where: {
        id: remoteMethodOutput.userId,
      },
    },
    function(err, user) {
      remoteMethodOutput.user = user;
      next();
    }
  );
  });
};
