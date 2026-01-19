console.log("Portfólio carregado e pronto.");

document.querySelectorAll('.icon-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        console.log(`Mouse sobre: ${button.innerText}`);
    });
});