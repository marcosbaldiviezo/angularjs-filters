angular.module('mainModule', [])
    .filter('removeHtml', function() {
        return function(texto) {
            return String(texto).replace(/<[^>]+>/gm, '');
        }
    })
    .controller('FiltersController', function($scope) {
        $scope.mi_html = '<p>Hola mundo</p>';

        $scope.my_object = {};
        $scope.my_object.title = 'titulo';
        $scope.my_object.body = 'cuerpo';

        $scope.costo = 2;
    })