//Disciplina
var disciplinaController = function($scope,$mdToast, disciplinaApi) {
  $scope.disciplina = {};

  $scope.cadastrar = function() {
    disciplinaApi.cadastrar($scope.disciplina)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Disciplina cadastrado com sucesso')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      

      delete $scope.disciplina;

      $scope.disciplina = {};

      $scope.disciplinaForm.$setPristine();
      $scope.disciplinaForm.$setUntouched();
      $scope.disciplinaForm.$setValidity();

      // Redirecionamento de página.
      $state.transitionTo('disciplinas', {reload: true, inherit: false, notify: true});

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

app.controller('DisciplinaController', disciplinaController);
