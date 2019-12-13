//Campus
var campusController = function($scope,$mdToast, campusApi) {
  $scope.campus = {};

  $scope.cadastrar = function() {
    campusApi.cadastrar($scope.campus)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Campus cadastrado com sucesso')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast)


      delete $scope.campus;

      $scope.campus = {};
      $scope.campusForm.$setUntouched();
      $scope.campusForm.$setPristine();

      $scope.campusForm.$setValidity();

      // Redirecionamento de página.
      $state.transitionTo('campi', {reload: true, inherit: false, notify: true});

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

app.controller('CampusController', campusController);
