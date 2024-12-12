// Toggle Dropdown Visibility
function toggleDropdown(dropdownId) {
  document.getElementById(dropdownId).classList.toggle("show");
}

// Generic Filter Function for Dropdowns
function filterDropdown(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const filter = input.value.toUpperCase();
  const dropdown = document.getElementById(dropdownId);
  const links = dropdown.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
    const txtValue = links[i].textContent || links[i].innerText;
    links[i].style.display = txtValue.toUpperCase().includes(filter)
      ? ""
      : "none";
  }
}

// Event Listeners for Dropdown Toggles
["myDropdown1", "myDropdown2", "myDropdown3", "myDropdown4"].forEach(
  (id, index) => {
    const btnId = `btn${index + 1}`;
    const btn = document.querySelector(`#${btnId}`);
    if (btn) btn.addEventListener("click", () => toggleDropdown(id));
  }
);

// Event Listeners for Filtering Inputs
["myInput1", "myInput2", "myInput3", "myInput4"].forEach((inputId, index) => {
  const btnInput = document.getElementById(inputId);
  if (btnInput) {
    btnInput.addEventListener("input", () =>
      filterDropdown(inputId, `myDropdown${index + 1}`)
    );
  }
});

// Save Data to Local Storage on Button Click
document.querySelector("#but").addEventListener("click", saveDetails);

let detailsArr = JSON.parse(localStorage.getItem("details")) || [];

function saveDetails(event) {
  event.preventDefault();

  try {
    const imageSrc = document.querySelector("#main-box > div > div > img").src;
    const text1 = document.querySelector(
      "#main-box > div > div > img + p + h2"
    ).innerText;
    const text3 = document.querySelector(
      "#main-box > div > div > img + p + h2 + p + h2"
    ).innerText;

    const obj = { image: imageSrc, text1, text3 };

    detailsArr.push(obj);
    localStorage.setItem("details", JSON.stringify(detailsArr));

    console.log("Details saved:", obj);
  } catch (error) {
    console.error("Error saving details to localStorage:", error);
  }
}
// Toggle dropdown visibility
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("active");
}

// Filter dropdown links
function filterDropdown(id) {
  const input = document.querySelector(`#${id} input`);
  const filter = input.value.toLowerCase();
  const links = document.querySelectorAll(`#${id} a`);
  links.forEach((link) => {
    const text = link.textContent.toLowerCase();
    link.style.display = text.includes(filter) ? "" : "none";
  });
}
