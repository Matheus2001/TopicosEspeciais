//Turno
var turnoController = function($scope, $mdToast, turnoApi) {

  $scope.turno = {};

  $scope.cadastrar = function() {

    let turno = angular.copy($scope.turno);

    turnoApi.cadastrar(turno)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('Turno cadastrado com sucesso.')
            .position('left ')
            .action('OK')
            .hideDelay(6000);
        $mdToast.show(toast);



      delete $scope.turno;

      $scope.turno = {};

      $scope.turnoForm.$setPristine();
      $scope.turnoForm.$setUntouched();
      $scope.turnoForm.$setValidity();

      // Redirecionamento de página.
      $state.transitionTo('turnos', {reload: true, inherit: false, notify: true});

    })
      .catch(function(error) {
        var toast = $mdToast.simple()
            .textContent('Ocorreu algum problema no envio de dados')
            .position('left ')
            .action('OK')
            .hideDelay(6000);
        $mdToast.show(toast);

      });

  }
}

app.controller('TurnoController', turnoController);
