const renderHeader = (function () {
    // create header
    const createHeader = () => {
        // get header cont
        const header = document.querySelector('.header')

        // create title
        const headerTitle = document.createElement('h1');
        headerTitle.classList.add('header-title');
        headerTitle.innerHTML = 'Battleship';

        // append
        header.append(headerTitle);
    }

    return { createHeader };
})()


export default renderHeader;