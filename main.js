function App(){
    const btnMenu = document.querySelector('.header__menu-mobile')
    const menu = document.querySelector('.header__menu')
    const close = document.querySelector('.header__menu-close')
    function hideMenu(){
        menu.classList.remove('open')
    }
    btnMenu.onclick = function(){
        menu.classList.add('open')
        if(btnMenu.style.display = 'none'){
            close.style.display = 'block'
            close.onclick = function(){
                btnMenu.style.display = 'block'
                close.style.display = 'none'
            }          
        }
       
        
    }

    close.addEventListener('click',hideMenu)
}

App()
