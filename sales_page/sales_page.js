function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    }
    function filter1Function() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput1");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown1");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
    
    function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    }
    function filter2Function() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput2");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown2");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
    
    function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    }
    function filter3Function() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput3");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown3");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
    
    function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
    }
    function filter4Function() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput4");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown4");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
    
    let btn=document.querySelector("#main-box>div>div>button");
    btn.addEventListener("click", myfunc);
    let arr=[];
    function myfunc(event) {
        event.preventDefault();
        let obj={};
        obj.imag=document.querySelector("#main-box>div>div>img");
        obj.text1=document.querySelector("#main-box>div>div>img+p");
        obj.text2=document.querySelector("#main-box>div>div>h2");
        obj.text2=document.querySelector("#main-box>div>div>h2+p");
        obj.price=document.querySelector("#main-box>div>div>h2");
        arr.push(obj);
        console.log(arr);
    
        localStorage.setItem("details", JSON.stringify(arr));
    }