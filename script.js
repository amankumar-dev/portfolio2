// For navbar
const menuBtn=document.querySelector('.menu');
const closeBtn=document.querySelector('.close');
const item=document.querySelector('.items');
const fillit=document.querySelectorAll('.fillit');

menuBtn.addEventListener('click',()=>{
    item.style.transform='translateY(0)';
    menuBtn.style.display='none';
    closeBtn.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    item.style.transform='translateY(-120%)';
    menuBtn.style.display='block';
    closeBtn.style.display='none';
})

// for contact
const btn = document.querySelector('.nhihounga');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let counter=0;
    const forminput=document.querySelectorAll('input:required');
    const textareaa=document.querySelector('#description');
    forminput.forEach((e)=>{
        if(e.value==""){
            e.style.border='2px solid red';
            counter++;
        }
        if(textareaa.value==''){
            textareaa.style.border='2px solid red';
            counter++;
        }
    })
    if(counter>0){
        alert('Please enter all field');
    }
    else{
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
const sun=document.querySelector('#sun');
const moon=document.querySelector('#dark-moon');
sun.addEventListener('click',()=>{
    sun.style.display='none';
    moon.style.display='block';
    document.body.classList.toggle('light-mode');
})
moon.addEventListener('click',()=>{
    moon.style.display='none';
    sun.style.display='block';
    document.body.classList.toggle('light-mode');
})