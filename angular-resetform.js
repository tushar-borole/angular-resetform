angular.module('angular-resetform').directive('resetForm', function ($parse, $compile) {
    return {
        require: ['^form', 'ngModel'],
        link: function (scope, elm, attr, formCtrl) {


            formCtrl[0].$resetFormData = function () {
                if (angular.isDefined(attr.resetFormValue)) { // to set value on form rest
                    $parse(attr.ngModel).assign(scope, formCtrl[1].initialValue);
                } else {
                    $parse(attr.ngModel).assign(scope, attr.resetFormValue);

                }



            };
            scope.$watch(attr.ngModel, function (value) {



                if (formCtrl[1].$pristine) { //if form is touched or not


                    formCtrl[1].initialValue = value;


                    if (angular.isDefined(attr.resetFormClear)) { // clear value on reset
                        formCtrl[1].initialValue = '';
                    }



                }


            });


        }
    }
});