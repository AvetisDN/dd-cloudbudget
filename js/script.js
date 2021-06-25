const menuToggler = document.querySelector('#menu-toggler')
const menuOffscreen = document.querySelector('.offscreen')
const emptyBlock = document.querySelector('.empty-block')

menuToggler.onclick = (e) => {
    e.preventDefault()
    menuOffscreen.classList.toggle('show')
    emptyBlock.classList.toggle('show')
}
emptyBlock.onclick = (e) => {
    menuOffscreen.classList.remove('show')
    emptyBlock.classList.remove('show')
}

const sliderBlock = document.getElementById('slider');

const slider = new Bee3D(sliderBlock, {
    effect: 'coverflow',
    listeners: {
        touches: true,
        drag: true
    },
    navigation: {
        enabled: true
    }
    // ... more options here
});

const element = document.getElementById('phone');
const maskOptions = {
    mask: '+38\\0 (00) 000-00-00'
};
const mask = IMask(element, maskOptions);