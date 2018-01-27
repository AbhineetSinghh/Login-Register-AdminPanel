<?php
session_start();
if(session_destroy()) // Destroying All Sessions
{
echo "Logged out";
header("location: index.php"); // Redirecting To dashboard Page
}
?>