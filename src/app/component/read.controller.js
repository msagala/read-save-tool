angular.module('readCtrl', [])
    .controller('readController', ['$scope', 'readService', function ($scope, readService) {

        $scope.myFunction = function (workbook) {
            var counter = 1;
            for (var sheetName in workbook.Sheets) {

                if (counter == 1) {
                    var institutionJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
                        header: "A"
                    });
                    var errorRows = [];
                    readService.getInstitutionsErrorList(institutionJson)
                        .then(function (errorList) {
                            // Invalid value length will have '*' on it.
                            $scope.institutions = errorList;
                        });
                }

                if (counter == 2) {
                    var mdAdditionJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
                        header: "A"
                    });
                    var errorRows = [];
                    readService.getDoctorsAdditionErrorList(mdAdditionJson)
                        .then(function (errorList) {
                            // Invalid value length will have '*' on it.
                            $scope.mdAdditions = errorList;
                        });
                }

                if (counter == 3) {
                    var mdUniverseJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
                        header: "A"
                    });
                    $scope.mdUniverses = mdUniverseJson;
                }

                counter++;
            }
            $scope.$apply();
        }

    }]);
