// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Create new paragraph with red text

    // create a new paragraph for variable 'p'
    const par = document.createElement('p');
    // Styles text in red
    par.style.color ='red';

    // Create class for 1st paragraph
    par.classList.add('paragraph_1');

    // add text to display
    par.textContent = "Hey I'm red!";

    // appends the paragraph to the container object
    container.appendChild(par);
