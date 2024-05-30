function activateIconHover(iconId, isActive) {
    console.log(`Activating hover for ${iconId} with state ${isActive}`);
    const icon = document.getElementById(iconId);
    if (icon) {
        if (isActive) {
            icon.classList.add('icon-active-green');
            icon.classList.remove('icon-active-red');
        } else {
            icon.classList.add('icon-active-red');
            icon.classList.remove('icon-active-green');
        }
    } else {
        console.log(`Icon with ID ${iconId} not found`);
    }
}
