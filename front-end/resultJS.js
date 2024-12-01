// Extract the value from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const prediction = urlParams.get('prediction');

// Display the submitted value
if (prediction) {

    results = decodeURIComponent(prediction);
    generatedForm = results.split(",");
    form = document.getElementById("dynamicForm");
    generatedForm.forEach((value, index) => {
        inputId = `input${index + 1}`;

        row = document.createElement("div");
        row.className = "form-row";

        label = document.createElement("label");
        label.setAttribute("for", inputId);
        label.textContent = `${value.trim()}: `; 

        input = document.createElement("input");
        input.type = "text";
        input.id = inputId;
        input.placeholder = "Type"
        input.value = "";

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

    //document.getElementById("displayText").innerText = results;
} else {
    document.getElementById("displayText").innerText = "No value submitted!";
}
