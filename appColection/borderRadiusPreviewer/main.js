function getRadiusProperty() {

    let target = document.getElementById('main-block');

    topLeft = target.style.borderTopLeftRadius;
    topRight = target.style.borderTopRightRadius;
    bottomLeft = target.style.borderBottomLeftRadius;
    bottomRight = target.style.borderBottomRightRadius;

}

const onInputChange = (target) => {
    let value = document.getElementById(target).value + 'px';
    let container = document.getElementById('main-block');

    checkTarget(target, container, value)
}

const checkTarget = (id, target, value) => {
    if (id === 'top-left') {
        return (target.style.borderTopLeftRadius = value);
    } else if (id === 'top-right') {
        return (target.style.borderTopRightRadius = value);
    } else if (id === 'bottom-left') {
        return (target.style.borderBottomLeftRadius = value);
    } else if (id === 'bottom-right') {
        return (target.style.borderBottomRightRadius = value);
    }
}
