// colorscheme.js
let switchHandle = document.querySelector('#switch-color-scheme')
let themeIcon_light = document.querySelector('#theme-light')
let themeIcon_dark = document.querySelector('#theme-dark')
var html = document.documentElement

const switchMode = () => {
    let attr = html.getAttribute('data-user-color-scheme')
    let colorMode = 'light'
    if (attr === 'dark') {
        html.setAttribute('data-user-color-scheme', 'light')
        themeIcon_light.classList = 'light'
        themeIcon_dark.classList = 'dark active'
        colorMode = 'light'
    } else {
        html.setAttribute('data-user-color-scheme', 'dark')
        themeIcon_dark.classList = 'dark'
        themeIcon_light.classList = 'light active'
        colorMode = 'dark'
    }
    localStorage.setItem('data-user-color-scheme', colorMode)
}

const currColorMode = localStorage.getItem('data-user-color-scheme')
if (currColorMode === 'dark') {
    themeIcon_light.classList = 'light active'
    themeIcon_dark.classList = 'dark'
} else {
    themeIcon_dark.classList = 'dark active'
    themeIcon_light.classList = 'light'
}

switchHandle.addEventListener('click', switchMode, false)


