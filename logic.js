var background = document.querySelector('.background')
var party_image = document.querySelector('.party_image')
var text = document.querySelector('.text')
var auroratext = document.querySelector('.Aurora23_text')
var after_text=document.querySelector('.After_text')
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)
    if (scrollPosition > 700) {
        background.style.position = 'relative'
        background.style.top='680px'
        
    }
    else {
        background.style.position = 'sticky'
        background.style.top='70px'
        let gap = scrollPosition/10 + 10
       background.style.backgroundSize =`${80+scrollPosition/67}% ${80+scrollPosition/67}%`;
       text.style.backdropFilter=`brightness(${scrollPosition/6}%)`
       auroratext.style.cssText = `top:${35-10*scrollPosition/667}%;transform:scale(${1-0.2*scrollPosition/667});color:rgba(255,2555,255,${1-2*scrollPosition/667})`
       after_text.style.cssText = `top:${51-16*(scrollPosition-333)/334}%;transform:scale(${1-0.2*scrollPosition/667});color:rgba(255,2555,255,${2*(scrollPosition-333)/667})`
  
    }
    

})

