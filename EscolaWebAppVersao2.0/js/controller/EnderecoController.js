//Endereco
var enderecoController = function($scope,$mdToast, enderecoApi) {
  $scope.endereco = {};

  $scope.cadastrar = function() {
    enderecoApi.cadastrar($scope.endereco)
      .then(function(response) {
        var toast = $mdToast.simple()
          .textContent('Endereço cadastrado com sucesso')
          .position('left ')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      

      delete $scope.endereco;

      $scope.endereco = {};

      $scope.enderecoForm.$setPristine();
      $scope.enderecoForm.$setUntouched();
      $scope.enderecoForm.$setValidity();

      // Redirecionamento de página.
      $state.transitionTo('enderecos', {reload: true, inherit: false, notify: true});

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

app.controller('EnderecoController', enderecoController);
