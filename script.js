document.querySelectorAll('.order').forEach((heading) => {
    heading.addEventListener('click', () => {
        const targetId = heading.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // Toggle the visibility of the target element
        targetElement.classList.toggle('hidden');

        // Hide all other elements
        document.querySelectorAll('.orderactive.hidden').forEach((element) => {
            element.classList.add('hidden');
            element.classList.remove('visible');
        });

        // Show the target element
        targetElement.classList.remove('hidden');
        targetElement.classList.add('visible');
    });
});