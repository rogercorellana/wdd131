const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModifiedDate}`;