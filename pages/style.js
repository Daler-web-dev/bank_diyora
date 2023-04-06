let all_view = document.querySelector('.all')
let main = document.querySelector('.main')


window.addEventListener('load', () =>{
    main.classList.add('hide');
    setTimeout(() => {
    main.remove();
    }, 1000)
})