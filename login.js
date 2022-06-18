document.getElementById("loginBtn").addEventListener("click", startLogin)

function startLogin(){
    let email = document.getElementById("loginEmailVal").value
    let password = document.getElementById("loginPassVal").value
    if(email === "" || password === ""){
        alert("Invalid Email or Password")
    }
    else{
        let input = {
            email: email,
            password: password
        }
    
        fetch(`https://bath-and-body-mock-server.herokuapp.com/users`).then(response => response.json()).then(data => verifyLogin(data, input)).catch(error => console.log(error))
    
        function verifyLogin(data, input){
            const info = data.find(user => (user.email === input.email && user.password === input.password))
            if(info === undefined){
                alert("Invalid Email or Password")
            }
            else{
                setToLS(info)
            }
        }
    }
}

function setToLS(info){
    let fname = info.Fname
    let lname = info.Lname
    let city = info.city
    let email = info.email
    let password = info.password
    let phone = info.phone
    let state = info.state
    let street = info.street
    let zipcode = info.zipcode

    let userDetails = {}
    userDetails.fname = fname
    userDetails.lname = lname
    userDetails.city = city
    userDetails.email = email
    userDetails.password = password
    userDetails.phone = phone
    userDetails.state = state
    userDetails.street = street
    userDetails.zipcode = zipcode

    localStorage.setItem("user", JSON.stringify(userDetails))

    window.location.href="/index.html"
}

document.getElementById("createAccount").addEventListener("click", function(){
    window.location.href = "signup.html"
})

//============================================nav-bar code starts here==================================================
let drop_1 = document.getElementById('nav-dropdown0');
let drop_2 = document.getElementById('nav-dropdown1');
let drop_3 = document.getElementById('nav-dropdown2');
let drop_4 = document.getElementById('nav-dropdown3');
let category = document.getElementsByClassName('category');
let sub_cat_drop = document.getElementsByClassName('nav-sub-dropdown');
let sub_cat_sub_el = document.getElementsByClassName('sub-category');


var dropdowns = document.getElementsByClassName('drop')
drop_1.addEventListener('mouseover',function(){
    dropdowns[0].classList.toggle("open-dropdown")
})

drop_1.addEventListener('mouseout',function(){
    dropdowns[0].classList.toggle("open-dropdown")
})

// drop_1.addEventListener('click',function(){
//     dropdowns[0].classList.toggle("open-dropdown")
// })



drop_2.addEventListener('mouseover',function(){
    dropdowns[1].classList.toggle("open-dropdown")
})

drop_2.addEventListener('mouseout',function(){
    dropdowns[1].classList.toggle("open-dropdown")
})

drop_3.addEventListener('mouseover',function(){
    dropdowns[2].classList.toggle("open-dropdown")
})

drop_3.addEventListener('mouseout',function(){
    dropdowns[2].classList.toggle("open-dropdown")
})

drop_4.addEventListener('mouseover',function(){
    dropdowns[3].classList.toggle("open-dropdown")
})

drop_4.addEventListener('mouseout',function(){
    dropdowns[3].classList.toggle("open-dropdown")
})

for(var i=0;i<sub_cat_drop.length;i++){
    sub_cat_drop[i].addEventListener('mouseover',(event)=>{
    //    console.log(sub_cat_sub_el[3])
       event.target.childNodes[1].classList.toggle("open-sub-category")
            var a = event.target.parentNode.classList;
  
    })
    sub_cat_drop[i].addEventListener('mouseleave',()=>{
        //    console.log(sub_cat_sub_el[3])
            event.target.childNodes[1].classList.toggle("open-sub-category")

    })
}

//Mobile Nav slide
let burger = document.getElementsByClassName('burger');
let navbar = document.getElementsByClassName('nav-links');
let close = document.getElementById('close-btn')
let nav = document.querySelector('nav');

burger[0].addEventListener('click',()=>{
      navbar[0].classList.toggle('open-nav');
      document.body.style.background = 'rgba(0,0,0,0.4)';
      nav.classList.toggle('pos');
      nav.style.overflowY = 'scroll';
})

close.addEventListener('click',()=>{
    navbar[0].classList.toggle('open-nav')
    nav.classList.toggle('pos');
    document.body.style.background = 'none';
    //   nav.style.overflowY = 'scroll';
})