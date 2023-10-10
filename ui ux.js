document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("application-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.elements["name"].value;
        const dob = form.elements["dob"].value;
        const address = form.elements["address"].value;
        const position = form.elements["position"].value;
        const cv = form.elements["cv"].value;
        const terms = form.elements["terms"].checked;

        if (!name || !dob || !address || !position || !cv || !terms) {
            alert("Please fill out all the fields.");
        } else {
            // Simulate form submission (replace with your actual submission logic)
            setTimeout(function () {
                form.reset();
                successMessage.classList.remove("hidden");
            }, 1000);
        }
    });
});
