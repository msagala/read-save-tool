angular.module('readSrvc', [])
    .service('readService', ['$http', '$q', function ($http, $q) {
        return {
            getInstitutionsErrorList: function (data) {
                var defer = $q.defer();
                var errorList = [];
                errorList.push(data[0]);
                errorList.push(data[1]);
                angular.forEach(data, function (value, key) {
                    if (key != 0 && key != 1) {
                        var insCodeLength = value['A'].length;
                        var insDescLength = value['B'].length;
                        // Institution Code (MaxLength:25)
                        if (insCodeLength >=25) {
                            data[key]['A'] = '*' + value['A'];
                        }
                        // Institution Description (MaxLength:100)
                        if (insDescLength >= 100) {
                            data[key]['B'] = '*' + value['B'];
                        }
                        // Push record if it has invalid values
                        if (insCodeLength >= 25 || insDescLength >= 100) {
                            errorList.push(data[key]);
                        }
                    }
                });
                defer.resolve(errorList);
                return defer.promise;
            },
            getDoctorsAdditionErrorList: function (data) {
                var defer = $q.defer();
                var errorList = [];
                errorList.push(data[0]);
                errorList.push(data[1]);
                angular.forEach(data, function (value, key) {
                    if (key != 0 && key != 1) {
                        var dCodeLength = value['A'].length;
                        var dLastNameLength = value['B'].length;
                        var dFirstNameLength = value['C'].length;
                        // Doctor Code (MaxLength:25)
                        if (dCodeLength >= 25) {
                            data[key]['A'] = '*' + value['A'];
                        }
                        // Doctor First Name (MaxLength:50)
                        if (dLastNameLength >= 50) {
                            data[key]['B'] = '*' + value['B'];
                        }
                        // Doctor Last Name (MaxLength:50)
                        if (dFirstNameLength >= 50) {
                            data[key]['C'] = '*' + value['C'];
                        }
                        if (dCodeLength >= 25 || dLastNameLength >= 50 || dFirstNameLength >= 50) {
                            errorList.push(data[key]);
                        }
                    }
                });
                defer.resolve(errorList);
                return defer.promise;
            }
        }
    }]);
