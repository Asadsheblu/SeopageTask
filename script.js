$(document).ready(function () {
  // Open the modal on button click
  $("#openModalBtn").click(function () {
    $("#myModal").css("display", "block");
  });

  // Close the modal when the close button (×) is clicked
  $(".close").click(function () {
    $("#myModal").css("display", "none");
  });

  // Close the modal if the user clicks outside the modal content
  $(window).click(function (e) {
    if (e.target.id === "myModal") {
      $("#myModal").css("display", "none");
    }
  });
});
//upload
document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const fileList = document.getElementById("fileList");

    // Clear previous list items
    fileList.innerHTML = "";

    // Iterate through selected files and display them in the list
    for (const file of event.target.files) {
      const listItem = document.createElement("li");
      listItem.textContent = `${file.name} (${file.type})`;
      fileList.appendChild(listItem);
    }
  });
