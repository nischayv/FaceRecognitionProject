(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("homeController", homeController);

    homeController.$inject = ['AuthService', '$location', '$http'];


    function homeController(AuthService, $location, $http) {
        var vm = this;
        vm.classes = "";

        var user = AuthService.currentUser();
        getAllClasses();

        function getAllClasses() {
            return $http({
                method: 'POST',
                url: '/api/getclasses',
                data: {username: user}
            })
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                vm.classes = response.data;
                return response;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }

    }

})();
