//Professor
var professorController = function($scope,$mdToast, professorApi) {
  $scope.professor = {};

  $scope.cadastrar = function() {
    professorApi.cadastrar($scope.professor)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Professor cadastrado com sucesso')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
    

      delete $scope.professor;

      $scope.professor = {};

      $scope.professorForm.$setPristine();
      $scope.professorForm.$setUntouched();
      $scope.professorForm.$setValidity();

      // Redirecionamento de página.
      $state.transitionTo('professores', {reload: true, inherit: false, notify: true});

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

app.controller('ProfessorController', professorController);
