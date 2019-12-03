<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: ticket');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, 
    Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Ticket.php';

    // Instantiate DB and Connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate blog ticket object
    $ticket = new Ticket($db);

    // Get raw ticketed data
    $data = json_decode(file_get_contents("php://input"));

    $ticket->title = $data->title;
    $ticket->description = $data->description;
    $ticket->author = $data->author;
    $ticket->category_id = $data->category_id;

    // Create ticket
    if($ticket->create()){
        echo json_encode(
            array('message' => 'ticket Created');
        );
    } else {
        echo json_encode(
            array('message' => 'ticket Not Created');
        );
    }