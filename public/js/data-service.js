(function () {
    angular
        .module("Morph")
        .factory('dataService', dataService);

    function dataService(LoginService, $window, $cookies, $q) {
        return {
            viewUser: viewUser,
            registerUser: registerUser,
            getImages: getImages
        };
        
        function getImages() {
            return $q(function(resolve) {
                resolve(["../img/slideimg_1.jpg", "../img/slideimg_2.jpg", "../img/slideimg_3.jpg"]);
            });
        }
        
        function viewUser(loginData) {
            LoginService.get({email: loginData.email, pass: loginData.pass}, function (data) {
                if (!data.email) {
                    return loginData.emailAlert = 'doesn\'t exists';
                }
                loginData.emailAlert = '';

                if (data.pass !== loginData.pass) {
                    return loginData.passAlert = 'doesn\'t match';
                }
                loginData.passAlert = '';
                if (loginData.checked) {
                    $cookies.putObject('user', {
                        email: loginData.email,
                        pass: loginData.pass,
                        user: data.user
                    });
                }
                $window.location.href = '/' + data.user;
            });
        }

        function registerUser(loginDataObj, alertsObj) {
            LoginService.get({email: loginDataObj.email}, function(data) {
                if (data.email) {
                    return alertsObj.emailAlert = 'already registered';
                }
                alertsObj.emailAlert = '';
            });
            LoginService.get({user: loginDataObj.name}, function(data) {
                if (data.user) {
                    return alertsObj.nameAlert = 'already exists';
                }
                alertsObj.nameAlert = '';
            });
            if (loginDataObj.pass !== alertsObj.pass_2) {
                return alertsObj.passAlert = 'doesn\'t match';
            }
            alertsObj.passAlert = '';
            user = new LoginService();
            user.$save(loginDataObj);
            $window.location.href = '/' + loginDataObj.name;
        }
    }
})();