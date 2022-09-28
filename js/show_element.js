function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('container-link_show');
        }
        if (!change.isIntersecting) {
            change.target.classList.remove('container-link_show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.container-link');
for (let elm of elements) {
    observer.observe(elm);
}


function onEntry1(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('card__item_show');
        }
        if (!change.isIntersecting) {
            change.target.classList.remove('card__item_show');
        }
    });
}

let observer1 = new IntersectionObserver(onEntry1, options);
let elements1 = document.querySelectorAll('.card__item');
for (let elm of elements1) {
    observer1.observe(elm);
}

/*
function onEntry3(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('title_show');
        }
       
    });
}

let observer3 = new IntersectionObserver(onEntry1, options);
let elements3 = document.querySelectorAll('.title');
for (let elm of elements3) {
    observer3.observe(elm);
}
*/