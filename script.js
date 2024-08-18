// For navbar
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const item = document.querySelector('.items');
const fillit = document.querySelectorAll('.fillit');


// For skills
const skillsHolder=document.querySelector('.skills-holder');
const allBtn=document.querySelector('.all-btn');
const techBtn=document.querySelector('.technical-btn');
const libBtn=document.querySelector('.library-btn');
const toolBtn=document.querySelector('.tools-btn');
const ugBtn=document.querySelector('.ug-btn');

const allSkills=['C','C++','Java','JavaScript','HTML','CSS','Visual Basics','SQL','TCP/IP','OSI','ReactJS','Bootstrap','Tailwind','Redux-Toolkit','Zustand','Github','VisualCode','Postman','MySQL','Canva','DSA','Computer Graphics','Digital Electronics','Discrete Mathematics','Operating System','Software Engineering'];

const techSkills=['C','C++','Java','JavaScript','HTML','CSS','Visual Basics','SQL','TCP/IP','OSI'];

const libSkills=['ReactJS','Bootstrap','Tailwind','Redux-Toolkit','Zustand'];

const toolSkills=['Github','VisualCode','Postman','MySQL','Canva'];

const ugSkills=['DSA','Computer Graphics','Digital Electronics','Discrete Mathematics','Operating System','Software Engineering'];

function updateSkills(skillsArray) {
    skillsHolder.innerHTML = '';
    skillsArray.map((e) => {
        skillsHolder.insertAdjacentHTML("afterbegin", `<p class='skills-name'>${e}</p>`);
    });
}

allBtn.addEventListener('click', () => {
    allBtn.classList.add('activee-skills');
    techBtn.classList.remove('activee-skills');
    libBtn.classList.remove('activee-skills');
    toolBtn.classList.remove('activee-skills');
    ugBtn.classList.remove('activee-skills');
    updateSkills(allSkills);
});

techBtn.addEventListener('click', () => {
    techBtn.classList.add('activee-skills');
    allBtn.classList.remove('activee-skills');
    libBtn.classList.remove('activee-skills');
    toolBtn.classList.remove('activee-skills');
    ugBtn.classList.remove('activee-skills');
    updateSkills(techSkills);
});

libBtn.addEventListener('click', () => {
    libBtn.classList.add('activee-skills');
    techBtn.classList.remove('activee-skills');
    allBtn.classList.remove('activee-skills');
    toolBtn.classList.remove('activee-skills');
    ugBtn.classList.remove('activee-skills');
    updateSkills(libSkills);
});

toolBtn.addEventListener('click', () => {
    toolBtn.classList.add('activee-skills');
    techBtn.classList.remove('activee-skills');
    libBtn.classList.remove('activee-skills');
    allBtn.classList.remove('activee-skills');
    ugBtn.classList.remove('activee-skills');
    updateSkills(toolSkills);
});

ugBtn.addEventListener('click', () => {
    techBtn.classList.remove('activee-skills');
    libBtn.classList.remove('activee-skills');
    toolBtn.classList.remove('activee-skills');
    allBtn.classList.remove('activee-skills');
    ugBtn.classList.add('activee-skills');
    updateSkills(ugSkills);
});


updateSkills(allSkills); 


// For Navbar
menuBtn.addEventListener('click', () => {
    item.style.transform = 'translateY(0)';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    item.style.transform = 'translateY(-120%)';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})

// for contact
const btn = document.querySelector('.nhihounga');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let counter = 0;
    const forminput = document.querySelectorAll('input:required');
    const textareaa = document.querySelector('#description');
    forminput.forEach((e) => {
        if (e.value == "") {
            e.style.border = '2px solid red';
            counter++;
        }
        if (textareaa.value == '') {
            textareaa.style.border = '2px solid red';
            counter++;
        }
    })
    if (counter > 0) {
        alert('Please enter all field');
    }
    else {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phnno = document.getElementById('phnno').value;
        const subject = document.getElementById('subject').value;
        const msg = document.getElementById('description').value;
        let body = 'Name ' + name + '<br> Email: ' + email + '<br> Phone No. ' + phnno + '<br> Subject: ' + subject + '<br> message: ' + msg;

        Email.send({
            SecureToken: "2d4779e2-0157-4bcb-a686-d1713f5e7d62",
            To: 'amanmailforwork@gmail.com',
            From: "amanmailforwork@gmail.com",
            Subject: document.getElementById('subject').value,
            Body: body
        }).then(
            message => alert(' Message sent to admin !!!')
        );
    }
})

// for lightmode
const sun = document.querySelector('#sun');
const moon = document.querySelector('#dark-moon');
sun.addEventListener('click', () => {
    sun.style.display = 'none';
    moon.style.display = 'block';
    document.body.classList.toggle('light-mode');
})
moon.addEventListener('click', () => {
    moon.style.display = 'none';
    sun.style.display = 'block';
    document.body.classList.toggle('light-mode');
})

