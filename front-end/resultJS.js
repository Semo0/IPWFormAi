// Extract the value from the URL query parameter
//const urlParams = new URLSearchParams(window.location.search);
//const prediction = urlParams.get('prediction');
const prediction = sessionStorage.getItem('prediction');
const title = sessionStorage.getItem('title');
//const formTitle = urlParams.get('title');

const options = [
    { value: 'text', text: 'Text' },
    { value: 'dropdown', text: 'Dropdown' },
    { value: 'numerical', text: 'Numerical' }
];

// Display the submitted value
if (prediction) {
    //decodedFormTitle = decodeURIComponent(formTitle);
    titleHolder = document.getElementById("formTitle").innerText = title;
    //titleHolder.value = title;

    //results = decodeURIComponent(prediction);
    results = prediction;
    generatedForm = results.split(",");
    form = document.getElementById("dynamicForm");
    generatedForm.forEach((value, index) => {
        inputId = `input${index + 1}`;

        row = document.createElement("div");
        row.className = "form-row";

        label = document.createElement("label");
        label.setAttribute("for", inputId);
        label.textContent = `${value.trim()}: `; 

        input = document.createElement("select");
        input.id = inputId;
        options.forEach(option => {
            newOption = document.createElement('option');
            newOption.value = option.value;
            newOption.textContent = option.text;
            input.appendChild(newOption);
        });

        lineBreak = document.createElement("br");

        row.appendChild(label);
        row.appendChild(input);
        form.appendChild(row);
        form.appendChild(lineBreak);
        
    })

    const button = document.createElement("button");
    button.type = "button";
    button.className = "greenButton";
    button.textContent = "Create Form"; 
    form.appendChild(button);

} else {
    document.getElementById("displayText").innerText = "No value submitted!";
}
