function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('main-information_show');
        }
        if (!change.isIntersecting) {
            change.target.classList.remove('main-information_show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.main-information');
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