// For navbar
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const item = document.querySelector(".items");
const fillit = document.querySelectorAll(".fillit");

// For skills
const skillsHolder = document.querySelector(".skills-holder");
const allBtn = document.querySelector(".all-btn");
const techBtn = document.querySelector(".technical-btn");
const libBtn = document.querySelector(".library-btn");
const toolBtn = document.querySelector(".tools-btn");

const allSkills = [
  "Python",
  "SQL",
  "PostgreSQL",
  "Pandas",
  "NumPy",
  "PySpark",
  "Apache Airflow",
  "AWS",
  "Databricks",
  "Git",
  "GitHub",
  "Docker",
  "Linux",
  "VS Code",
  "Postman",
  "Data Warehousing",
  "ETL Pipelines",
  "Data Modeling",
  "Star Schema",
  "Dimensional Modeling",
  "Medallion Architecture",
];

const techSkills = [
  "Python",
  "SQL",
  "PostgreSQL",
  "Pandas",
  "NumPy",
  "PySpark",
];

const libSkills = [
  "Apache Airflow",
  "AWS",
  "Databricks",
  "Data Warehousing",
  "ETL Pipelines",
  "Data Modeling",
  "Star Schema",
  "Dimensional Modeling",
  "Medallion Architecture",
];

const toolSkills = ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"];

function updateSkills(skillsArray) {
  skillsHolder.innerHTML = "";
  skillsArray.map((e) => {
    skillsHolder.insertAdjacentHTML(
      "afterbegin",
      `<p class='skills-name'>${e}</p>`,
    );
  });
}

allBtn.addEventListener("click", () => {
  allBtn.classList.add("activee-skills");
  techBtn.classList.remove("activee-skills");
  libBtn.classList.remove("activee-skills");
  toolBtn.classList.remove("activee-skills");
  updateSkills(allSkills);
});

techBtn.addEventListener("click", () => {
  techBtn.classList.add("activee-skills");
  allBtn.classList.remove("activee-skills");
  libBtn.classList.remove("activee-skills");
  toolBtn.classList.remove("activee-skills");
  updateSkills(techSkills);
});

libBtn.addEventListener("click", () => {
  libBtn.classList.add("activee-skills");
  techBtn.classList.remove("activee-skills");
  allBtn.classList.remove("activee-skills");
  toolBtn.classList.remove("activee-skills");
  updateSkills(libSkills);
});

toolBtn.addEventListener("click", () => {
  toolBtn.classList.add("activee-skills");
  techBtn.classList.remove("activee-skills");
  libBtn.classList.remove("activee-skills");
  allBtn.classList.remove("activee-skills");
  updateSkills(toolSkills);
});

allBtn.classList.add("activee-skills");
updateSkills(allSkills);

// For Navbar
menuBtn.addEventListener("click", () => {
  item.style.transform = "translateY(0)";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  item.style.transform = "translateY(-120%)";
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});

// for contact
emailjs.init({
  publicKey: "hEdCopRySYIZENfHT",
});
const btn = document.querySelector(".nhihounga");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!document.querySelector(".contact-us").reportValidity()) {
    return;
  }
  let counter = 0;
  const forminput = document.querySelectorAll("input:required");
  const textareaa = document.querySelector("#description");
  forminput.forEach((e) => {
    if (e.value.trim() === "") {
      e.style.border = "2px solid red";
      counter++;
    }
  });
  if (textareaa.value.trim() === "") {
    textareaa.style.border = "2px solid red";
    counter++;
  }
  if (counter > 0) {
    alert("Please enter all field");
  } else {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phnno = document.getElementById("phnno").value;
    const subject = document.getElementById("subject").value;
    const msg = document.getElementById("description").value;
    let body =
      "Name " +
      name +
      "<br> Email: " +
      email +
      "<br> Phone No. " +
      phnno +
      "<br> Subject: " +
      subject +
      "<br> message: " +
      msg;

    emailjs
      .send("service_jxj169l", "template_4lolsid", {
        name: name,
        email: email,
        phone: phnno,
        subject: subject,
        message: msg,
      })
      .then(() => {
        alert("Message sent successfully!");
        document.querySelector(".contact-us").reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  }
});

// for lightmode
const sun = document.querySelector("#sun");
const moon = document.querySelector("#dark-moon");
sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "block";
  document.body.classList.toggle("light-mode");
});
moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = "block";
  document.body.classList.toggle("light-mode");
});
