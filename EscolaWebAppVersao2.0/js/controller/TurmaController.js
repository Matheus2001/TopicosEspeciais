
//Turma
var turmaController = function($scope, $mdToast,turmaApi) {
  $scope.turma = {};

  $scope.cadastrar = function() {
    turmaApi.cadastrar($scope.turma)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Turma cadastrado com sucesso')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
    

      delete $scope.turma;

      $scope.turma = {};

      $scope.turmaForm.$setPristine();
      $scope.turmaForm.$setUntouched();
      $scope.turmaForm.$setValidity();

      // Redirecionamento de página.
      $state.transitionTo('turmas', {reload: true, inherit: false, notify: true});

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

app.controller('TurmaController', turmaController);
