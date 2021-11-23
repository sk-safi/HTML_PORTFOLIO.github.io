/***************************MENU HIDE  &  SHOW*****************************/

const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close')



//***********MENU-SHOW***************/ */
 
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

//******************HIDE-MENU****************/ */

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== ACCORDION SKILLS=====*/

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')


function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*========================QUALIFICATION===================*/

const tab = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tab.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


/*========================SERVICES MODEL===================*/

const modelView = document.querySelectorAll('.service_model'),
      modelBtns = document.querySelectorAll('.service_button'),
      modelClose = document.querySelectorAll('.service_model-close')

let model = function(modelClick){
    modelView[modelClick].classList.add('active-model')
}

modelBtns.forEach((modelBtn, i) =>{
    modelBtn.addEventListener('click', () =>{
        model(i)
    })
})

modelClose.forEach((modelClose) =>{
    modelClose.addEventListener('click', () =>{
        modelView.forEach((modelView) =>{
            modelView.classList.remove('active-model')
        })
    })
})


/*========================SERVICES MODEL===================*/

let swiperTestimonial = new Swiper('.testimonial_container',{
    loop : true,
    grabCursor : true,
    spaceBetween : 48,

    pagination : {
        el : '.swiper-pagination',
        clickable : true,
        dynamicBullets : true,
    },
});



/*========================SCROLL===================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = windows.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' +sectionId+ ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' +sectionId+ ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)