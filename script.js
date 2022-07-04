window.addEventListener("load", function () {
    const form = document.getElementById("needs-validation");
  
    function submitFormHandler(e) {
      form.classList.add("submitted");
      const formFields = [
        form.firstname,
        form.lastname,
        form.email,
        form.password,
        form.button,
      ];
      if (formFields.some(isFormFieldNotValid)) {
        e.preventDefault();
      }
    }
  
    function isFormFieldNotValid(formField) {
      return !formField.checkValidity();
    }
  
    form.addEventListener("submit", submitFormHandler, false);
  });