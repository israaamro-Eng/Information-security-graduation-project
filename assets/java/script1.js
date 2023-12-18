
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








//............start profile popup.........
document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='flex'

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