class ScrollBar {
    constructor(selector='body') {
        this.element = selector
    }
    load() {
        var scroll_elements = document.querySelectorAll(this.element)
        if (document.getElementById('scroll__bar__style') == null) {
            document.querySelector('body').innerHTML = `    <style id="scroll__bar__style">${this.element}::-webkit-scrollbar {display: none;}</style>` + document.querySelector('body').innerHTML
        }
        else {
            var scroll_style_elements = document.getElementById('scroll__bar__style').innerText.split('::')[0].split(', ')
            if (scroll_style_elements.indexOf(this.element) == -1) {
                document.getElementById('scroll__bar__style').innerText = this.element + ', ' + document.getElementById('scroll__bar__style').innerText
            }
        }
        for (let scroll_element of scroll_elements) {
            // scroll_element.append()
            
        }
    }
}

scroll = new ScrollBar()
scroll.load()