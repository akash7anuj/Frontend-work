let form = document.getElementById("myform")

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let password = document.getElementById("password").value;


    let obj = {
        name,
        email,
        phonenumber,
        password
    }

    // console.log(obj);

    localStorage.setItem("userInformation", JSON.stringify(obj));
}
)

let show = document.getElementById("show")

show.addEventListener("click",()=>{
    let userInformation = localStorage.getItem("userInformation");
    userInformation = JSON.parse(userInformation);  

    // console.log(userInformation);

    let userInformationDiv = document.getElementById("showData");
    userInformationDiv.innerHTML = `
    <p><strong>Name:</strong> ${userInformation.name}</p>
    <p><strong>Email:</strong> ${userInformation.email}</p>
    <p><strong>Phone Number:</strong> ${userInformation.phonenumber}</p>
    <p><strong>Password:</strong> ${userInformation.password}</p>
    `
})
