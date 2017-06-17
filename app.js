// Crear módulo de angular
angular.module('miApp', []);

// Llamar a un módulo de angular
angular.module('miApp').controller('MiControlador', MiControlador);

function MiControlador($scope) {
  // Código que define el controller
  // Todo lo que hace el controller
  console.log('Se cargó mi controlador. Todo está funcionando bien');
  $scope.mensaje = '';

  // $scope.listaCompras = ['Yogurt', 'Panes', 'Leche Pura Vida', 'Coca Cola', 'Inka Kola'];

  $scope.listaCompras = [
    {
      nombre: 'Yogurt',
      urlImagen: 'http://biotrendies.com/wp-content/uploads/2015/06/Yogurt-natural.jpg',
      prioritario: true
    },
    {
      nombre: 'Panes',
      urlImagen: 'http://www.deollaysarten.com/wp-content/uploads/2014/11/panes.jpg',
      prioritario: true
    },
    {
      nombre: 'Pura Vida',
      urlImagen: 'https://img.elcomercio.pe/files/listing_ec_flujo_xx/uploads/2017/06/02/5931d634dfb81.jpeg',
      prioritario: false
    },
    {
      nombre: 'Coca Cola',
      urlImagen: 'https://img.elcomercio.pe/files/listing_ec_flujo_xx/uploads/2017/06/02/5931d634dfb81.jpeg',
      prioritario: true
    }
  ];
}