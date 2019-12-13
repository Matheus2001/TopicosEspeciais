//Curso
var cursoController = function($scope,$mdToast, cursoApi) {
  $scope.curso = {};

  $scope.cadastrar = function() {
    cursoApi.cadastrar($scope.curso)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Curso cadastrado com sucesso')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);


      delete $scope.curso;

      $scope.curso = {};

      $scope.cursoForm.$setPristine();
      $scope.cursoForm.$setUntouched();
      $scope.cursoForm.$setValidity();

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

app.controller('CursoController', cursoController);
