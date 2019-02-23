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

        // create a new paragraph for variable 'h3'
        const header3 = document.createElement('h3');
        // Styles text in blue
        header3.style.color ='blue';
    
        // Create class for header
        header3.classList.add('header');
    
        // add text to display
        header3.textContent = "I'm a blue h3";
    
        // appends the paragraph to the container object
        container.appendChild(header3);

// Create a div with black border and pink background

        // create a new div for variable 'div_1'
        const div_1 = document.createElement('div');
        // Styles for div
        div_1.setAttribute('style', 'color: black ; background: pink');
        div_1.style.border = 'black solid';

        // Create h1 heading within div
        const div_h = document.createElement('h')
            // add text to display
            div_h.textContent = "I'm in a div";
        // Append h1 to div    
        div_1.appendChild(div_h)

        // Create p within div
        const div_p = document.createElement('p')

            // add text to display
            div_p.textContent = "ME TOO!";
        // append p to div_1 
        div_1.appendChild(div_p)

        // Append div_1 to container
        container.appendChild(div_1);