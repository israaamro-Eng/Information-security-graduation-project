
//............start aside .........


let menuItem = document.querySelectorAll('.menu-item');

//active class remove...
const removeActive = ()=>{
    menuItem.forEach(item=>{
        item.classList.remove('active')
    })
}

menuItem.forEach(item =>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
        document.querySelector('.notification-box').style.display='none'
    })
})

document.querySelector('#Notify-box').addEventListener('click',()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntcounter1').style.display='none'
})

document.querySelector('#askMenu').addEventListener('click',()=>{
    document.querySelector('#notfycounter2').style.display='none'
})

document.querySelector('#messageMenu').addEventListener('click',()=>{
    document.querySelector('#notfycounter3').style.display='none'
})

document.querySelector('#drMessageMenu').addEventListener('click',()=>{
    document.querySelector('#notfycounter4').style.display='none'
})

//...........start friends requests...........

let Accept = document.querySelectorAll('#Accept');
let Delete = document.querySelectorAll('#Delete');

Accept.forEach(accept=>{
    accept.addEventListener('click',()=>{
        accept.parentElement.style.display='none'
        accept.parentElement.parentElement.querySelector('.alert').style.display='block'
    })
})

Delete.forEach(deletee=>{
    deletee.addEventListener('click',()=>{
        deletee.parentElement.parentElement.style.display='none'
    })
})


//............start profile popup.........
document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='flex'
        document.querySelector('.img_cont_msg').style.display='flex'

    })
});

document.querySelectorAll('.close').forEach(AllClose => {
    AllClose.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='none'
        document.querySelector('.add-post-popup').style.display='none'
        document.querySelector('.theme-customize').style.display='none'

    })
});



document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})



//............window scroll...........
window.addEventListener('scroll',() =>{
    document.querySelector('.profile-popup').style.display="none"
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
    document.querySelector('.notification-box').style.display='none'
})

//............start add post popup.........
document.querySelector('#create-lg').addEventListener('click',()=> {
        document.querySelector('.add-post-popup').style.display='flex'
});


document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postIMG').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
})

//...........liked button..............
document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked');
    })
})

//...........theme customize popup........
document.querySelector('#theme').addEventListener('click',()=>{
    document.querySelector('.theme-customize').style.display='flex'
})

//.........background change..............

var root =document.querySelector(':root');

let bg1 =document.querySelector('.bg1');
let bg2 =document.querySelector('.bg2');

//tgeme background value...

let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;
const changBg = ()=>{
    root.style.setProperty('--color-dark-light-theme' ,darkColorLightTheme);
    root.style.setProperty('--color-light-light-theme' ,lightColorLightTheme);
    root.style.setProperty('--color-white-light-theme' ,whiteColorLightTheme);
}

bg2.addEventListener('click',()=>{
    lightColorLightTheme ='5%';
    whiteColorLightTheme ='10%';
    darkColorLightTheme ='95%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bgicon();
    changBg();
});

bg1.addEventListener('click',()=>{

    bg1.classList.add('active');
    bg2.classList.remove('active');

    window.location.reload();
});

let menuItemImg = document.querySelectorAll('.menu-item span img');

const bgicon =()=>{
    menuItemImg.forEach(icon=>{
        icon.classList.add('icon-bg');
    })
}

function logOut(){
    window.location.href = 'log.html';
}

function goToChatPage(){
    window.location.href = 'chat.html';
}

function goToDrChatPage(){
    window.location.href = 'drChat .html';
}