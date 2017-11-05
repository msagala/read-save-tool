angular.module('readDirective', [])
    .directive('readFile', function () {
        return {
            scope: {
                "myDirectiveFn": "="
            },
            link: function ($scope, $elm, $attrs) {
                $elm.on('change', function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var bstr = e.target.result;
                        var workbook = XLSX.read(bstr, {
                            type: 'binary'
                        });
                        $scope.myDirectiveFn(workbook);
                    };
                    reader.readAsBinaryString(changeEvent.target.files[0]);
                });
            }
        };
    });
