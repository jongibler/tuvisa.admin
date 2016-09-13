angular.module('tuVisaAdmin', ['ngMaterial'])
    .controller('tramiteController', function ($scope, $http, $location, $window) {

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


        var urlId = $location.absUrl().substr($location.absUrl().lastIndexOf('/') + 1);
        if (urlId.toLowerCase() == 'nuevo') {
            $scope.tramite = {
                estatus: 'PENDIENTE',
                pagos: [],
                servicios: [],
                personas: []
            };
        }
        else {
            var numeroTramite = parseInt(urlId);
            if (isNaN(numeroTramite)) {
                $window.location.href = '/tramites';
            }
            else {
                $http.get('/api/tramite/' + numeroTramite)
                    .then(function (res) {
                        if (res.data == null) {
                            $window.location.href = '/tramites';                            
                        }                            
                        $scope.tramite = res.data;                        
                        //process dates for md-datepicker (need to find a better way...)
                        $scope.tramite.fechaViajeMexico = new Date($scope.tramite.fechaViajeMexico);
                        $scope.tramite.fechaEntrega = new Date($scope.tramite.fechaEntrega);
                        $scope.tramite.pagos.forEach(function(element) {
                            element.fecha = new Date(element.fecha);
                        }, this);

                        //process for select
                        if ($scope.tramite.numFotografias) {
                            $scope.tramite.numFotografias = $scope.tramite.numFotografias.toString();
                        }
                         

                        $scope.calcularTotales();

                    }, function (res) {
                        console.log('Error:' + res.data);
                    });
            }
        }

        $scope.calcularTotales = function () {
            var totalServicios = 0;
            $scope.tramite.servicios.forEach(function (servicio) {
                totalServicios += servicio.precio;
            }, this);
            $scope.importeTotal = totalServicios;

            var totalPagos = 0;
            $scope.tramite.pagos.forEach(function (pago) {
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

        $scope.guardarTramite = function () {
            //validations
            if (!$scope.importeTotal) {
                alert('Favor de capturar por lo menos un servicio...');
                return;
            }
            if (!$scope.tramite.contacto || $scope.tramite.contacto.trim() == '') {
                alert('Favor de capturar el contacto...');
                return;
            }
            if (!$scope.tramite.fechaEntrega || isNaN(Date.parse($scope.tramite.fechaEntrega))) {
                alert('Favor de seleccionar una fecha de entrega...');
                return;
            }


            $scope.tramite.totalPagos = $scope.importePagado;
            $scope.tramite.totalCosto = $scope.importeTotal;
            $scope.tramite.totalDebe = $scope.importeTotal - $scope.importePagado;            

            $http.post('/api/tramite', $scope.tramite)
                .then(function (res) {                    
                   $window.location.href ="/tramites";
                }, function (res) {
                    console.log('Error:' + res.data);
                });
        };

    });

