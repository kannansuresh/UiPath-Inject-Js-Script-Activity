function submitForm(e, inputFormData) {
  var formData = JSON.parse(inputFormData);
  document.getElementById("name").value = formData.input_name;
  document.getElementById("feedback").value = formData.input_feedback;
  if (formData.input_liked == true) {
    document.getElementById("radio_0").click();
  } else {
    document.getElementById("radio_1").click();
  }
}
