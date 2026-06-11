// Welcome Message

window.onload = function () {
    console.log("Welcome to Trishul Eco-Homestays");
};

// Book Now Button

function bookNow() {
    alert(
        "Thank you for choosing Trishul Eco-Homestays!\n\nFor booking please contact:\n📞 +91 9876543210"
    );
}

// Room Details

function viewRoom(roomName, price) {

    alert(
        "Room Type: " + roomName +
        "\nPrice: ₹" + price +
        " per night"
    );

}

// Contact Form Validation

function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields");

        return false;
    }

    alert(
        "Thank you " + name +
        "!\nYour message has been submitted successfully."
    );

    document.getElementById("contactForm").reset();

}

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});