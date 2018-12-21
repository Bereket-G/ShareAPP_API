'use strict';

module.exports = function(app) {
  var Container = app.models.Container;
  var containers = ['profiles', 'posts'];

  containers.forEach(function(container) {
    Container.createContainer({
      name: container,
    }, function(err, container) {
        // console.log(container, err);
    });
  });
};
