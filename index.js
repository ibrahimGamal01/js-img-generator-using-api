const openai = require("openai");

// Set the API key
openai.api_key = "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";

// Set the model to use
const model_engine = "image-alpha-001";

// Set the default image
document.querySelector("img").src = "default.jpg";

// Generate the image when the form is submitted
document.querySelector("form").addEventListener("submit", (e) => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the prompt from the text input
  const prompt = document.querySelector("input").value;

  // Generate the image
  openai.Image.create((model = model_engine), (prompt = prompt))
    .then((response) => {
      // Create a FileReader object
      const reader = new FileReader();

      // Set the onload handler for the FileReader
      reader.onload = function () {
        // Set the src attribute of the image element to the data URI
        document.querySelector("img").src = reader.result;

        // Show the popup
        document.querySelector(".popup").style.display = "block";
      };

      // Read the image data as a data URI
      reader.readAsDataURL(new Blob([response.data]));
    })
    .catch((error) => {
      // Show an error message
      alert(`Error: ${error.message}`);
    });
});

// Close the popup when the close button is clicked
document.querySelector(".close").addEventListener("click", (e) => {
  document.querySelector(".popup").style.display = "none";
});

// Set the API key
// openai.api_key = "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";

// // Set the model to use
// const model_engine = "image-alpha-001";

// // Set the prompt for the image
// const prompt = "War lord, Gods, 4k, 8k, 32k";

// // Generate the image
// openai.Image.create((model = model_engine), (prompt = prompt)).then(
//   (response) => {
//     // Create a FileReader object
//     const reader = new FileReader();

//     // Set the onload handler for the FileReader
//     reader.onload = function () {
//       // Set the src attribute of the image element to the data URI
//       document.querySelector("img").src = reader.result;
//     };

//     // Read the image data as a data URI
//     reader.readAsDataURL(new Blob([response.data]));
//   }
// );
