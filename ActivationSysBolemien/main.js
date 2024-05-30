document.addEventListener('DOMContentLoaded', function() {
    function main() {
        console.log("Testing icon hover activation");
        activateIconHover('icon1', true); 
        activateIconHover('icon2', false); 
        activateIconHover('icon3', true);
        activateIconHover('icon4', false);
    }

    main();
});
