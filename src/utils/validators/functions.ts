import {AbstractControl} from '@angular/forms';

export function equalTo(equalToControl: string, isReverse?: boolean): any {
  return (control: AbstractControl): { [key: string]: any } => {
    const parentGroup: AbstractControl = control.root;

    const parentGroupControl: AbstractControl = parentGroup.get(equalToControl);

    if (parentGroupControl) {
      const value = control.value;
      const equalToValue = parentGroupControl.value;

      if (value && equalToValue) {

        if (!isReverse) {
          if (value !== parentGroupControl.value) {
            return {
              equalTo: false
            };
          }
        } else {
          if (value === parentGroupControl.value) {
            delete parentGroupControl.errors['equalTo'];
            if (!Object.keys(parentGroupControl.errors).length) {
              parentGroupControl.setErrors(null);
            }
          }

          if (value !== parentGroupControl.value) {
            parentGroupControl.setErrors({equalTo: false});
          }
        }
      }
    }

    return null;
  };
}
