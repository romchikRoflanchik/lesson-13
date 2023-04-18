let area = document.querySelector('.text_area');
window.addEventListener('keydown', function (event) {
    console.log('Event', event);
    if (event.keyCode === 9) {
        document.querySelector('.keyboard_btn_tab').classList.add('active');
        area.innerHTML += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
        event.preventDefault();
    } else if (event.keyCode === 32) { //space
        document.querySelector('.keyboard_btn_space').classList.add('active');
        area.innerHTML += '&nbsp&nbsp';
        event.preventDefault();
    } else if (event.keyCode === 13) {
        document.querySelector('.keyboard_btn_enter').classList.add('active');
        area.innerHTML += '<br>';
    } else if (event.keyCode === 20) {
        document.querySelector('.keyboard_btn_CapsLock').classList.toggle('active');
    } else if (event.code === 'ShiftLeft') {
        document.querySelector('.keyboard_btn_shift_l').classList.add('active');
    } else if (event.code === 'ShiftRight') {
        document.querySelector('.keyboard_btn_shift_r').classList.add('active');
    } else if (event.keyCode === 8) {
        document.querySelector('.keyboard_btn_backspace').classList.add('active');
        area.innerText = area.innerText.slice(0, -1);
    } else {
        document.querySelector(`[data="${event.keyCode}"]`).classList.add('active');
        area.innerHTML += event.key;
    }
})

window.addEventListener('keyup', function (element) {
    document.querySelector(`[data="${element.keyCode}"]`).classList.remove('active');
})
window.addEventListener('keyup', function (element) {
    document.querySelector('.keyboard_btn_shift_r').classList.remove('active');
})
