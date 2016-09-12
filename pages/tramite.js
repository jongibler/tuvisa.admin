angular.module('tuVisaAdmin', ['ngMaterial'])
    .controller('tramiteController', function ($scope, $http) {

        $scope.formasDePago = ["Efectivo", "Cheque", "Tarjeta"];

        $scope.tiposServicio = [
            {
                nombre: 'Canada - Visa Turista',
                precio: 3500
            },
            {
                nombre: 'China - Visa Negocios',
                precio: 500
            }
        ];

        $scope.tramite = {
            numero: 0,
            estatus: 'PENDIENTE',
            pagos: [
            ],
            servicios: [
            ],
            personas: []
        };

        $scope.calcularTotales = function (){
            var totalServicios = 0;
            $scope.tramite.servicios.forEach(function (servicio) {
            totalServicios += servicio.precio;
            }, this);
            $scope.importeTotal = totalServicios;

            var totalPagos = 0;
            $scope.tramite.pagos.forEach(function(pago) {
                totalPagos += pago.monto ? pago.monto : 0;
            }, this);
            $scope.importePagado = totalPagos;

            $scope.importeDebe = ($scope.importeTotal - $scope.importePagado);
        };
       

        $scope.quitarPago = function (index) {
            $scope.tramite.pagos.splice(index, 1);
            $scope.calcularTotales();
        };

        $scope.agregarPago = function () {
            $scope.tramite.pagos.push({});
        };

        $scope.agregarServicio = function () {
            $scope.tramite.servicios.push({});
        };

        $scope.quitarServicio = function (index) {
            $scope.tramite.servicios.splice(index, 1);
            $scope.calcularTotales();
        };

        $scope.agregarPersona = function () {
            $scope.tramite.personas.push({});
        };

        $scope.quitarPersona = function (index) {
            $scope.tramite.personas.splice(index, 1);
        };

        $scope.actualizarPrecioServicio = function (servicio) {
            var servicioDeLista = $.grep($scope.tiposServicio, function (e) { return e.nombre == servicio.tipo; })[0];
            servicio.precio = servicioDeLista.precio;
            $scope.calcularTotales();            
        };

        $scope.guardarTramite = function() {
           $http.post('/api/tramite', $scope.tramite)
            .then(function(res){
                console.log(res);
                //redirect
            },function(res) {
                console.log('Error:' + res.data);
            });
        };       

    });

