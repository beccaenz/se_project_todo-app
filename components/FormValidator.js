class FormValidator {
  constructor(settings, formEl) {
    //use???
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  //add all other methods from validate
  /////////////////////////////////////////////////////////

  _showInputError = (inputElement, errorMessage) {
    const errorElement = this._formEl(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(InputElement);
    }
  }

  //removed inputList
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  ///change???

  /////////////////////////??

  _toggleButtonState = (inputList, buttonElement, settings) => {
    if (this._hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );

    //todo - make seteventlisteners work and methods
    //   const buttonElement = formElement.querySelector(
    //     settings.submitButtonSelector,
    //   );

//     toggleButtonState(inputList, buttonElement, settings);

//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener("input", () => {
//         this._checkInputValidity(inputElement);
//         //   toggleButtonState(inputList, buttonElement, settings);
//       });
//     });
//   }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => evt.preventDefault());
    
    this._setEventListeners();
  }
}

resetValidation(inputList, buttonElement, settings){

    this._inputList = Array.form(this._formEl.querySelectorAll(this._inputSelector));
    this._inputList.forEach((input) => this._hideInputError(input));
    this._buttonElement = this._formEl.querySelector(this._submitButtonSelector);
toggleButtonState(inputList, buttonElement, settings);
}

export default FormValidator;

///working

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
//   const todo = generateTodo(values);
//   todosList.append(todo);
//   closeModal(addTodoPopup);
// });



// initialTodos.forEach((item) => {
//   const todo = generateTodo(item);
//   todosList.append(todo);
// });

// const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
// newTodoValidator.enableValidation();