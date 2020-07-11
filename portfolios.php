<?php

  // Cheack The User Coming Form A Request 

  if ($_REQUEST['REQUEST_METHOD'] == 'POST' ) {

    $userName = echo $_POST['userName'] ;
    $userEmail = echo $_POST['userEmail'] ;
    $userMessage = echo $_POST['userMessage'] ;



    $subject = "Company Request From " ;
    $myEmail = "essamalhelo98@gmail.com";

    mail($myEmail, $subject, $userName, $userEmail, $userMessage);
  }
  

?>