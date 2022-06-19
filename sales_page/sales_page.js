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
    
    let btn=document.querySelector("#but");
    btn.addEventListener("click", myfunc);
    let arr=JSON.parse(localStorage.getItem("details")) || [];
    function myfunc(event) {
        event.preventDefault();


        let image = document.querySelector("#main-box>div>div>img").src
        let text1 = document.querySelector("#main-box>div>div>img+p+h2").innerText
        let text3 = document.querySelector("#main-box>div>div>img+p+h2+p+h2").innerText    

        let obj = {
          "image":image,
          "text1":text1,
          "text3":text3        
        }

        console.log(obj)
        arr.push(obj);
        localStorage.setItem("details",JSON.stringify(arr));

        console.log("arr")
      }  
    