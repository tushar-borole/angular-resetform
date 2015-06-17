angular.module('angular-resetform').directive('resetForm', function ($parse, $compile) {
    return {
        require: ['^form', 'ngModel'],
        link: function (scope, elm, attr, formCtrl) {

            formCtrl[0].$resetFormData = function () {

                $parse(attr.ngModel).assign(scope, formCtrl[1].initialValue);
            };
            scope.$watch(attr.ngModel, function (value) {
                console.log(formCtrl[0])
                if (formCtrl[1].$pristine) {
                    formCtrl[1].initialValue = value;
                }
            });


        }
    }
});