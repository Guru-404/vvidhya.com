<?php
echo "enter";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Process the form data (e.g., validate, save to database)
    
    // Send email notification to the user
    $user_subject = "Thank you for your inquiry!";
    $user_body = "Dear $name,\n\nThank you for contacting us. We have received your inquiry and will get back to you as soon as possible.\n\nBest regards,\n[Your Institute Name]";
    $user_headers = "From: [Your Institute Name] <noreply@example.com>";
    
    mail($email, $user_subject, $user_body, $user_headers);
    
    // Send email notification to the admin
    $admin_email = "parvadesai404@gmail.com"; // Change this to the admin's email address
    $admin_subject = "New Inquiry Form Submission";
    $admin_body = "Name: $name\nEmail: $email\nMessage: $message";
    $admin_headers = "From: $email";
    
    if (mail($admin_email, $admin_subject, $admin_body, $admin_headers)) {
        echo "Thank you for your inquiry. We will get back to you soon!";
    } else {
        echo "Sorry, there was an error processing your inquiry. Please try again later.";
    }
}
?>