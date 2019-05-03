// view
function insert(num) {
    document.form.view.value = document.form.view.value + num;
}

//result
function equal() {
    let num = document.form.view.value
    if (num) {
        document.form.view.value = eval(num);
    }
}

// clear
function c() {
    document.form.view.value = '';
}

// erase
function erase() {
    let num = document.form.view.value;
    document.form.view.value = num.substring(0, num.length - 1);
}