angular.module('app', ['ui.bootstrap','gumga.info'])
  .controller('Ctrl', function () {
    var ctrl = this
    ctrl.example = function() {
      alert('Função executada')
    }
  })
