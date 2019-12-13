//Escola
var escolaController = function($scope,$mdToast, escolaApi) {
  $scope.escola = {};

  $scope.cadastrar = function() {
    escolaApi.cadastrar($scope.escola)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Escola cadastrado com sucesso')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      

      delete $scope.escola;

      $scope.escola = {};

      $scope.escolaForm.$setPristine();
      $scope.escolaForm.$setUntouched();
      $scope.escolaForm.$setValidity();

      // Redirecionamento de página.
      $state.transitionTo('escolas', {reload: true, inherit: false, notify: true});

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

app.controller('EscolaController', escolaController);
