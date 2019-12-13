var campiController = function($scope, $mdToast, campusApi) {

  $scope.campi = [];

  $scope.listar = function() {
    console.log("Listando")
    campusApi.listar()
      .then(function(response) {
        $scope.campi = response.data;
      })
      .catch(function(error) {

      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      campusApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.campi = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.nome = "";
    $scope.campi = [];
  };

}

app.controller('CampiController', campiController);
