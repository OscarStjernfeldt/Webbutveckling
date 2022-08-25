var elForm = document.querySelector('#formSignup'); // Store elements
var elSelectPackage = document.querySelector('#package');
var elPackageHint = document.querySelector('#packageHint');
var elTerms = document.querySelector('#terms');
var elTermsHint = document.querySelector('#termsHint');
function packageHint() {
    var pack = this.options[this.selectedIndex].value; // Get selected option
    //console.log("Debug: variabel för pack" + pack);
    if (pack === 'monthly') { // If monthly package
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!'; //Show this msg
    }
    else { // Otherwise
        elPackageHint.innerHTML = 'Wise choice!'; // Show this message
    }
}
function checkTerms(event) {
    if (!elTerms.checked) { // If checkbox ticked
        elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
        event.preventDefault(); // Don't submit form
    }
}
//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
