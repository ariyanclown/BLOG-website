const hamp = document.querySelector('.ham');

hamp.addEventListener('click',() => {
    hamp.classList.toggle('active');
})

let menulist = document.getElementById('ulist')
menulist.style.maxHeight= '0px'


function togglemenu(){
    if(menulist.style.maxHeight =='0px'){
        menulist.style.maxHeight = '300px'
    }

    else{
        menulist.style.maxHeight= '0px'
    }
}


