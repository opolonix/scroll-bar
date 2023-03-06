var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

class ScrollBar {
    constructor() {}
    load() {
        var caret = document.querySelector('#scroll__bar__caret')
        var caret_container = document.querySelector('#scroll__bar__container')
        var drag_caret = false
        document.querySelector('#scroll__bar__container').style.display = 'block'
        document.addEventListener('mousemove', (event) => {
            var until_right = (event.screenX - window.innerWidth) * -1
            if (until_right - 16 < 50 && until_right - 16 >= 0){
                caret.style.transition = ''
                caret.style.width = ((until_right - 16)/50)*-16+16 + 'px'
            }
            else if (until_right < 50) {
                caret.style.transition = ''
                caret.style.width = '16px'
            }
            else caret.style.width = '2px'
            if (drag_caret == true && event.screenY-72 > 0 && event.screenY-72 < window.innerHeight){
                console.log(event.screenY-72)
            }
        })
        document.addEventListener('mousedown', (event) => {
            var until_right = (event.screenX - window.innerWidth) * -1
            if (until_right <= 16){
                event.preventDefault()
                drag_caret = true
                caret.style.transition = '.2s background-color'
                caret.style.backgroundColor = '#fafafa70'
            }
            else{drag_caret = false}
        })
        document.addEventListener('mouseup', (event) => {
            drag_caret = false
            caret.style.backgroundColor = '#ffffff50'
        })
        document.addEventListener('mouseout', (event) => {
            caret.style.transition = '.2s width'
            caret.style.width = '2px'
        })
        document.addEventListener('scroll', (event) => {
            var scroll_top = window.pageYOffset || document.documentElement.scrollTop;
            var scroll_caret = scroll_top / (scrollHeight - window.innerHeight) * (window.innerHeight - caret.offsetHeight - 4)
            caret_container.style = `padding-top: ${scroll_caret}px`
        })
    }
}

scroll = new ScrollBar()
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
    scroll.load()
}