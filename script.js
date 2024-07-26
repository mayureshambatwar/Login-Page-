document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const formData = {
    firstName: "",
    lastName: "",
    mobNumber: "",
    username: "",
    password: "",
  };

  const errors = {};
  const url = "https://signup-backend-ashen.vercel.app/v1/auth/register";

  signupForm.addEventListener("input", (e) => {
    const { name, value } = e.target;
    formData[name] = value;

    validateField(name, value);
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e);

    if (validate()) {
      console.log(formData);
      await registerUser(url, formData);

      window.location.href = "/login.html";
    }
  });

  const registerUser = async (url, formData) => {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(data);
  };

  const validateField = (name, value) => {
    if (name === "firstName") {
      if (!value.match(/^[a-zA-Z]+$/)) {
        errors.firstName = "First name can only contain letters";
      } else {
        delete errors.firstName;
      }
    } else if (name === "lastName") {
      if (!value.match(/^[a-zA-Z]+$/)) {
        errors.lastName = "Last name can only contain letters";
      } else {
        delete errors.lastName;
      }
    } else if (name === "mobNumber") {
      if (!value.match(/^\d{10}$/)) {
        errors.mobNumber = "Mobile number must be exactly 10 digits";
      } else {
        delete errors.mobNumber;
      }
    } else if (name === "password") {
      if (
        !value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,10}$/)
      ) {
        errors.password =
          "Password must be 7-10 characters long, include at least one special character and one number";
      } else {
        delete errors.password;
      }
    }

    showErrors();
  };

  const validate = () => {
    validateField("firstName", formData.firstName);
    validateField("lastName", formData.lastName);
    validateField("mobNumber", formData.mobNumber);
    validateField("username", formData.username);
    validateField("password", formData.password);

    return Object.keys(errors).length === 0;
  };

  const showErrors = () => {
    document.getElementById("firstNameError").innerText =
      errors.firstName || "";
    document.getElementById("lastNameError").innerText = errors.lastName || "";
    document.getElementById("mobNumberError").innerText =
      errors.mobNumber || "";
    document.getElementById("passwordError").innerText = errors.password || "";
  };
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
//     const signupForm = document.getElementById('signupForm');
//     const formData = {
//         firstName: '',
//         lastName: '',
//         mobileNumber: '',
//         username: '',
//         password: ''
//     };

//     const errors = {};

//     signupForm.addEventListener('input', (e) => {
//         const { name, value } = e.target;
//         formData[name] = value;

//         validateField(name, value);
//     });

//     signupForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         console.log(e);

//         if (validate()) {
//             console.log(formData);
//             localStorage.setItem('formData', JSON.stringify(formData));
//             window.location.href = '/login.html';
//         }
//     });

//     const validateField = (name, value) => {
//         switch (name) {
//             case 'firstName':
//                 if (!value.match(/^[a-zA-Z]+$/)) {
//                     errors.firstName = 'First name can only contain letters';
//                 } else {
//                     delete errors.firstName;
//                 }
//                 break;
//             case 'lastName':
//                 if (!value.match(/^[a-zA-Z]+$/)) {
//                     errors.lastName = 'Last name can only contain letters';
//                 } else {
//                     delete errors.lastName;
//                 }
//                 break;
//             case 'mobileNumber':
//                 if (!value.match(/^\d{10}$/)) {
//                     errors.mobileNumber = 'Mobile number must be exactly 10 digits';
//                 } else {
//                     delete errors.mobileNumber;
//                 }
//                 break;
//             case 'password':
//                 if (!value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,10}$/)) {
//                     errors.password = 'Password must be 7-10 characters long, include at least one special character and one number';
//                 } else {
//                     delete errors.password;
//                 }
//                 break;
//             default:
//                 break;
//         }

//         showErrors();
//     };

//     const validate = () => {
//         validateField('firstName', formData.firstName);
//         validateField('lastName', formData.lastName);
//         validateField('mobileNumber', formData.mobileNumber);
//         validateField('username', formData.username);
//         validateField('password', formData.password);

//         return Object.keys(errors).length === 0;
//     };

//     const showErrors = () => {
//         document.getElementById('firstNameError').innerText = errors.firstName || '';
//         document.getElementById('lastNameError').innerText = errors.lastName || '';
//         document.getElementById('mobileNumberError').innerText = errors.mobileNumber || '';
//         document.getElementById('passwordError').innerText = errors.password || '';
//     };
// });

///////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
//     const signupForm = document.getElementById('signupForm');
//     const formData = {
//         firstName: '',
//         lastName: '',
//         mobileNumber: '',
//         username: '',
//         password: ''
//     };
//     const errors = {};

//     signupForm.addEventListener('input', handleInput);
//     signupForm.addEventListener('submit', handleSubmit);

//     function handleInput(event) {
//         const { name, value } = event.target;
//         formData[name] = value;
//         validateField(name, value);
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         if (validateForm()) {
//             console.log(formData);
//             localStorage.setItem('formData', JSON.stringify(formData));
//             window.location.href = '/login.html';
//         }
//     }

//     function validateField(name, value) {
//         let errorMessage = '';
//         switch (name) {
//             case 'firstName':
//             case 'lastName':
//                 errorMessage = /^[a-zA-Z]+$/.test(value) ? '' : 'Name can only contain letters';
//                 break;
//             case 'mobileNumber':
//                 errorMessage = /^\d{10}$/.test(value) ? '' : 'Mobile number must be exactly 10 digits';
//                 break;
//             case 'password':
//                 errorMessage = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,10}$/.test(value) ? '' : 'Password must be 7-10 characters, include at least one special character and one number';
//                 break;
//         }
//         errors[name] = errorMessage;
//         displayErrors();
//     }

//     function validateForm() {
//         for (const field in formData) {
//             validateField(field, formData[field]);
//         }
//         return Object.keys(errors).every(key => !errors[key]);
//     }

//     function displayErrors() {
//         document.getElementById('firstNameError').innerText = errors.firstName || '';
//         document.getElementById('lastNameError').innerText = errors.lastName || '';
//         document.getElementById('mobileNumberError').innerText = errors.mobileNumber || '';
//         document.getElementById('passwordError').innerText = errors.password || '';
//     }
// });
