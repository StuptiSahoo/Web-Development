let lname = document.getElementById("lname");
let num = document.getElementById("number");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
   
    <br>
    <p>Dear ${lname.value},<br>
    We're thrilled to welcome you to our community! Thank you for signing up on our website. Your presence adds so much value, and we are excited to have you on board.<br><br>
    At BlissfulBonds, we strive to provide an exceptional experience for our users, and having you as a member is an important part of that. Whether you're here for information, services, or to connect with like-minded individuals, we're here to make your journey enjoyable and meaningful.<br><br>
    If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us. Our team is here to assist you every step of the way.<br><br>
    Once again, thank you for choosing BlissfulBonds. We look forward to building a fantastic relationship with you and providing content/services that exceed your expectations.<br><br>
    Best regards,<br>
    </p>
    `;

  Email.send({
    SecureToken: "5d675ef2-bfd1-405e-bd43-2da4aed07191", //add your token here
    To: lname.value,
    From: "satchidananda26212@gmail.com",
    Subject: "Thank You for Joining BlissfulBonds!",
    Body: ebody,
  }).then((message) => alert(message));
});
