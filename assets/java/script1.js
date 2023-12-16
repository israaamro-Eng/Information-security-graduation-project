//............start profile popup.........
document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='flex'

    })
});

document.querySelectorAll('.close').forEach(AllClose => {
    AllClose.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='none'

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
})