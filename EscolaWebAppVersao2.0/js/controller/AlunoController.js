var alunoController = function($scope, $mdToast, alunoApi,$state) {
  $scope.aluno = {};

  $scope.cadastrar = function() {

     let aluno = angular.copy($scope.aluno);

    // converter formato da data: brazilian -> american
    var data = moment(aluno.nascimento, ("dd-mm-aaaa"));
    aluno.nascimento = data.format("YYYY-MM-DD");
    alunoApi.cadastrar($scope.aluno)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Aluno cadastrado com sucesso.')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);

        delete $scope.aluno;

        $scope.aluno = {};

        $scope.alunoForm.$setPristine();
        $scope.alunoForm.$setUntouched();
        $scope.alunoForm.$setValidity();

        // Redirecionamento de página.
        $state.transitionTo('alunos', {reload: true, inherit: false, notify: true});

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

app.controller('AlunoController', alunoController);
