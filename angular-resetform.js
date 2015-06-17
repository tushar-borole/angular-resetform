angular.module('angular-resetform',[]).directive('resetForm', function ($parse, $compile) {
    return {
        require: ['^form', 'ngModel'],
        link: function (scope, elm, attr, formCtrl) {

            var resetFormValue = angular.isDefined(attr.resetFormValue);
            var resetFormClear = angular.isDefined(attr.resetFormClear);


            formCtrl[0].$resetFormData = function () {
                if (resetFormValue) { // to set value on form rest
                    $parse(attr.ngModel).assign(scope, attr.resetFormValue);

                } else {

                    $parse(attr.ngModel).assign(scope, formCtrl[1].initialValue);
                }



            };
            scope.$watch(attr.ngModel, function (value) {



                if (formCtrl[1].$pristine) { //if form is touched or not


                    formCtrl[1].initialValue = value;


                    if (resetFormClear) { // clear value on reset
                        formCtrl[1].initialValue = '';
                    }



                }


            });


        }
    }
});