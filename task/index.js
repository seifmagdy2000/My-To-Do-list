
let userList = [];
class User {
    constructor(Fname, Lname, Mname, DOB, Email, password) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.Mname = Mname;
        this.Email = Email;
        this.DOB = DOB;
        this.password = password;
    }

    addUser(user) {
        userList.push(user);
    }
}

function validate() {
    let storedUserData = JSON.parse(localStorage.getItem('userList'))
    flag=0;
    console.log(storedUserData)
    var V_Email = document.getElementById("Email").value;
    var V_Password = document.getElementById("Password").value;
    for (i = 0; i < storedUserData.length; i++) {
        if (V_Email == storedUserData[i].email && V_Password == storedUserData[i].password) {
            localStorage.setItem("uuid", `${V_Email}`)
            window.location.replace('./MyList.html')
            flag=1;
        }     
    }
    if (flag==0)
    {
    document.querySelector(".alert").classList.add('active');
    document.querySelector(".alert").innerHTML = 'Wrong email or password';
    }

}
function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}
function allnumeric(inputtxt) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.match(numbers)) {
        return true;
    }
    else {
        return false;
    }
}
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

function Registration() {

    var flag = 0;
    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;
    var flag4 = 0;
    var flag5 = 0;
    var R_Fname = document.getElementById("Fname").value;
    if (allLetter(R_Fname) === false || R_Fname === '') {
        flag = 1;
        console.log(flag)
    }
    console.log(R_Fname);
    var R_Mname = document.getElementById("Mname").value;
    if (allLetter(R_Mname) === false || R_Mname === '')
        flag1 = 1;
    var R_Lname = document.getElementById("Lname").value;
    if (allLetter(R_Lname) === false || R_Lname === '')
        flag2 = 1;
    var R_DOB = document.getElementById("DOB").value;
    if (allnumeric(R_DOB) === false || R_DOB === '')
        flag3 = 1;
    var R_Email = document.getElementById("Email_1").value;

    if (ValidateEmail(R_Email) === false || R_Email === '')
        flag4 = 1;
    var R_Password = document.getElementById("Password_1").value;
    if (R_Password.length < 8)
        flag5 = 1;
    if (flag === 1 || flag1 === 1 || flag2 === 1 || flag3 === 1 || flag4 === 1 || flag5 === 1) {
        var msg = 'invalid input in the following sections: ';
        if (flag === 1) {
            let msg1 = 'first name, ';
            msg += msg1;
        }
        if (flag1 === 1) {
            let msg1 = 'Middle name, ';
            msg += msg1;
        }
        if (flag2 === 1) {
            let msg1 = 'Last name, ';
            msg += msg1;
        }
        if (flag3 === 1) {
            let msg1 = 'DOB, ';
            msg += msg1;
        }
        if (flag4 === 1) {
            let msg1 = 'Email, ';
            msg += msg1;
        }
        if (flag5 === 1) {
            let msg1 = 'Password ';
            msg += msg1;
        }
        console.log(document.querySelector(".alert"));
        document.querySelector(".alert").classList.add('active');
        document.querySelector(".alert").innerHTML = msg;
    }
    else {
        const userData = {
            firstName: R_Fname,
            middleName: R_Mname,
            lastName: R_Lname,
            dob: R_DOB,
            email: R_Email,
            password: R_Password,

        }
        if(JSON.parse(localStorage.getItem("userList")) != null){
            console.log("lol")
            userList = JSON.parse(localStorage.getItem("userList"));
        }
        userList.push(userData);
        console.log(userList);
        localStorage.setItem('userList', JSON.stringify(userList));
        alert("account is created");
        window.location.replace('./index.html')

    }

}


// user list

