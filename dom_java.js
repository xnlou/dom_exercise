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

// Create a h3 header with blue text

        // create a new paragraph for variable 'p'
        const header3 = document.createElement('h3');
        // Styles text in red
        header3.style.color ='blue';
    
        // Create class for 1st paragraph
        header3.classList.add('header');
    
        // add text to display
        header3.textContent = "I'm a blue h3";
    
        // appends the paragraph to the container object
        container.appendChild(header3);