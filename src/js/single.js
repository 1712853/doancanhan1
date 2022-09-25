function styleColor(element, color) {
  for (let i = 0; i < element.length; i++) {
    element[i].style.color = color;
    element[i].style.opacity = "1";
  }
}
function styleColorArr(element, color) {
  for (let i = 0; i < element.length; i++) {
    element[i].style.color = color;
    element[i].style.opacity = "1";
  }
}
function styleBgColor(element, bgColor) {
  element.style.backgroundColor = bgColor;
}
function styleBgColorArr(element, bgColor) {
  for (let i = 0; i < element.length; i++) {
    element[i].style.backgroundColor = bgColor;
  }
}
function borderArr(element, val) {
  for (let i = 0; i < element.length; i++) {
    element[i].style.border = val;
  }
}

function themeWhite() {
  document.body.style.setProperty("--main-color-1", "#fb4386");
  document.body.style.setProperty("--grey1", "#929292");
  let single = document.getElementById("single");
  styleBgColor(single, "white");
  let contact = document.getElementById("contact");
  styleBgColor(contact, "#282b34");
  let h3 = document.getElementsByTagName("h3");
  styleColorArr(h3, "black");
  let h3Contact = document.querySelectorAll(".contact__container_top h3");
  styleColorArr(h3Contact, "#fff");
  let p = document.getElementsByTagName("p");
  styleColorArr(p, "black");
  let pContact1 = document.querySelectorAll(".contact__container_top p");
  styleColorArr(pContact1, "#b1b4b9");
  let pContact2 = document.querySelectorAll(
    ".contact__container_bottom .flexbox .item div p"
  );
  styleColorArr(pContact2, "#bfbfbf");
  let pContact3 = document.querySelectorAll(".contact__container footer p");
  styleColorArr(pContact3, "#999");
  let a1 = document.querySelectorAll(
    ".single__container_flexbox .single__left .post ul li a"
  );
  styleColorArr(a1, "#6c757d");
  let aComment = document.querySelectorAll(
    ".single__container_flexbox .single__left .comment__item_content ul li a"
  );
  for (let i = 0; i < aComment.length; i++) {
    aComment[i].addEventListener("mouseover", function () {
      aComment[i].style.color = "black";
    });
    aComment[i].addEventListener("mouseout", function () {
      aComment[i].style.color = "var(--main-color-1)";
    });
  }
  let aCategories = document.querySelectorAll(
    ".single__container_flexbox .single__right .categories ul li a"
  );
  for (let i = 0; i < aCategories.length; i++) {
    aCategories[i].addEventListener("mouseover", function () {
      aCategories[i].style.color = "black";
    });
    aCategories[i].addEventListener("mouseout", function () {
      aCategories[i].style.color = "var(--grey1)";
    });
  }
  let aBlog1 = document.querySelectorAll(
    ".single__container_flexbox .single__right .blog__container_item .link"
  );
  styleColorArr(aBlog1, "#929292");
  let aBlog2 = document.querySelectorAll(
    ".single__container_flexbox .single__right .blog__container_item .note a"
  );
  for (let i = 0; i < aBlog2.length; i++) {
    aBlog2[i].addEventListener("mouseover", function () {
      aBlog2[i].style.color = "black";
    });
    aBlog2[i].addEventListener("mouseout", function () {
      aBlog2[i].style.color = "var(--main-color-1)";
    });
  }
  let aContact = document.querySelectorAll(
    ".contact__container_bottom .flexbox .item div a"
  );
  styleColorArr(aContact, "#bfbfbf");
}

function themeblack() {
  document.body.style.setProperty(
    "--main-color-1",
    "rgba(254, 157, 38, 0.973)"
  );
  document.body.style.setProperty("--grey1", "#e58148");
  let single = document.getElementById("single");
  styleBgColor(single, "#1c1c20");
  let contact = document.getElementById("contact");
  styleBgColor(contact, "#111");
  let h3 = document.getElementsByTagName("h3");
  styleColorArr(h3, "#fe9d26f8");
  let p = document.getElementsByTagName("p");
  styleColorArr(p, "white");
  let a1 = document.querySelectorAll(
    ".single__container_flexbox .single__left .post ul li a"
  );
  styleColorArr(a1, "#d9d9d9");
  let aComment = document.querySelectorAll(
    ".single__container_flexbox .single__left .comment__item_content ul li a"
  );
  for (let i = 0; i < aComment.length; i++) {
    aComment[i].addEventListener("mouseover", function () {
      aComment[i].style.color = "white";
    });
    aComment[i].addEventListener("mouseout", function () {
      aComment[i].style.color = "var(--main-color-1)";
    });
  }

  let aCategories = document.querySelectorAll(
    ".single__container_flexbox .single__right .categories ul li a"
  );
  for (let i = 0; i < aCategories.length; i++) {
    aCategories[i].addEventListener("mouseover", function () {
      aCategories[i].style.color = "white";
    });
    aCategories[i].addEventListener("mouseout", function () {
      aCategories[i].style.color = "var(--grey1)";
    });
  }
  let aBlog1 = document.querySelectorAll(
    ".single__container_flexbox .single__right .blog__container_item .link"
  );
  styleColorArr(aBlog1, "#fff9f6");
  let aBlog2 = document.querySelectorAll(
    ".single__container_flexbox .single__right .blog__container_item .note a"
  );
  for (let i = 0; i < aBlog2.length; i++) {
    aBlog2[i].addEventListener("mouseover", function () {
      aBlog2[i].style.color = "white";
    });
    aBlog2[i].addEventListener("mouseout", function () {
      aBlog2[i].style.color = "var(--main-color-1)";
    });
  }
  let aContact = document.querySelectorAll(
    ".contact__container_bottom .flexbox .item div a"
  );
  styleColorArr(aContact, "white");
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateName(name) {
  let length = name.length;
  if (length < 2) return false;
  for (let i = 0; i < length; i++) {
    if (name[i] == " ") continue;
    if (
      !(
        (name[i] >= "A" && name[i] <= "Z") ||
        (name[i] >= "a" && name[i] <= "z")
      )
    )
      return false;
  }
  return true;
}

function setValidateFormEvent() {
  const signBtn = document.getElementById("contact__signup_btn");

  signBtn.addEventListener("click", function () {
    let name = document.getElementById("contact__name").value.trim();
    let email = document.getElementById("contact__email").value.trim();
    let mes = document.getElementById("contact__mes").value.trim();

    if (!validateName(name))
      alert(
        "Vui lòng nhập tên lớn hơn 1 ký tự, không dấu, không có số và không có ký tự đặt biệt"
      );
    if (!validateEmail(email))
      alert(
        "Vui lòng nhập đúng định dạng email"
      );
    if (mes == "") alert("Vui lòng nhập tin nhắn");
  });
  const resetlBtn = document.getElementById("contact__reset_btn");
  resetlBtn.addEventListener("click", function () {
    document.getElementById("contact__name").value = "";
    document.getElementById("contact__email").value = "";
    document.getElementById("contact__mes").value = "";
  });
}
setValidateFormEvent();

let changeMode = document.getElementById("changeColor");
let mode = localStorage.getItem("mode");

if (!mode) {
  localStorage.setItem("mode", changeMode.className);
  mode = localStorage.getItem("mode");
}
changeMode.className = mode;
if (changeMode.className === "normal") themeblack();
else themeWhite();

changeMode.addEventListener("click", function () {
  changeMode.classList.toggle("darkMode");
  changeMode.classList.toggle("normal");
  if (changeMode.className === "normal") themeblack();
  else themeWhite();
  localStorage.setItem("mode", changeMode.className);
});
