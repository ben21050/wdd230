const lastmod = document.querySelector('#lastupdated');
lastmod.textContent = `Last Update ${document.lastModified}`;

const currentYear = new Date();
document.querySelector("#currentyear").innerText = currentYear.getFullYear();