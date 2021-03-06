let theme = localStorage.getItem('theme')
if (theme == null)
{
    setTheme('pink')
}
else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')
for(var i=0;themeDots.length>i;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}
function setTheme(mode){
    if(mode == 'pink'){
        document.getElementById('theme-style').href='default.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href='blue.css'
    }
    if(mode == 'yellow'){
        document.getElementById('theme-style').href='yellow.css'
    }
    if(mode == 'black'){
        document.getElementById('theme-style').href='black.css'
    }
    localStorage.setItem('theme',mode)
    
}

