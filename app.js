let firstNameInput = document.querySelector("#new-user-first-name");
let lastNameInput = document.querySelector("#new-user-last-name");
// I added the same age input from the codeingsandbox to test
let ageInput = document.querySelector("#age");
// I added the same age input from the codeingsandbox to test
let emailInput = document.querySelector("#new-user-email");
let passWordInput = document.querySelector("#new-user-password");
let saveNewUserButton = document.querySelector("#save-new-user-button");
//Changed const to let as well as tried to put add ^^ variables ^^ to the inside of the saveButtonClicked().
const saveButtonClicked = () => {
  let user = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    // I added the same age input from the codeingsandbox to test
    age: ageInput.value,
    email: emailInput.value,
    password: passWordInput.value,
    // I added the same age input from the codeingsandbox to test
    isOver18: function () {
      if (this.age >= 18) {
        console.log("You may enter");
        return;
      }
      console.log("You are not of age to be here");
    },
    // method to determine password is greater than 4. console.log the result
    isPasswordLongEnough: function () {
      if (this.password >= 4) {
        console.log("password is good to go");
        return;
      }
      console.log("need a better password");
    },
  };
  // I added the same age input from the codeingsandbox to test
  //   user.isOver18();
  // I added the same age input from the codeingsandbox to test
  user.isPasswordLongEnough();
  user.isOver18();
};
saveNewUserButton.addEventListener("click", saveButtonClicked);

/* I also added isPasswordLongEnough method to the codingsandbox to test pw length and it worked it just isn't working here*/
