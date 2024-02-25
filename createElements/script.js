updateDetails = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("finput").value;
  const lastName = document.getElementById("linput").value;
  const studentId = document.getElementById("idinput").value;
  const address = document.getElementById("aInput").value;
  const phoneNumber = document.getElementById("phoneInput").value;

  //   const headingName = document.getElementById("h-Name");
  //   const displayId = document.getElementById("s-Id");

  //   const displayAddress = document.getElementById("s-add");

  //   const displayNumber = document.getElementById("s-phone");

  const postTemplate = document.getElementById("single-post");

  const postEl = document.importNode(postTemplate.contentEditable, true);
  postEl.classList.add("single-post");

  const newBox = document.createElement("div");
  newBox.classList.add("box");
  if (
    firstName === "" ||
    lastName === "" ||
    studentId === "" ||
    address === "" ||
    phoneNumber === ""
  ) {
    alert("plese enter student detail");
    return;
  }

  newBox.innerHTML = `
                    <h1>Details</h1>
                    <h3>${firstName} ${lastName}</h3>
                    <h4>${studentId}</h4>
                    <h4>${address}</h4>
                    <h4>${phoneNumber}</h4>
                    <button class="delete-btn">Delete</button>
                    <button class="edit-btn">Edit</button>
                    
  `;

  const displayContainer = document.querySelector(".flex-container");
  displayContainer.appendChild(newBox);

  newBox.querySelector(".delete-btn").addEventListener("click", () => {
    displayContainer.removeChild(newBox);
  });

  document.getElementById("finput").value = "";
  document.getElementById("linput").value = "";
  document.getElementById("idinput").value = "";
  document.getElementById("aInput").value = "";
  document.getElementById("phoneInput").value = "";
};

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", updateDetails);

const searchInput = document.getElementById("search-Input");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const name = box.querySelector("h3").textContent.toLowerCase();
    if (name.includes(searchTerm)) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
});
