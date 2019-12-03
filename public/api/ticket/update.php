<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, 
    Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Ticket.php';

    // Instantiate DB and Connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate ticket object
    $ticket = new Ticket($db);

    // Get raw ticketed data
    $data = json_decode(file_get_contents("php://input"));

    // Set ID to update
    $ticket->id = $data->id;

    $ticket->title = $data->title;
    $ticket->description = $data->description;
    $ticket->author = $data->author;
    $ticket->category_id = $data->category_id;
    $ticket->assigned_dev_id = $data->assigned_dev_id;

    // Create ticket
    if($ticket->update()){
        echo json_encode(
            array('message' => 'ticket Updated');
        );
    } else {
        echo json_encode(
            array('message' => 'ticket Not Updated');
        );
    }