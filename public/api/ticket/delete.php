<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, 
    Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Ticket.php';

    // Instantiate DB and Connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate ticket object
    $ticket = new Ticket($db);

    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    // Set ID to update
    $ticket->id = $data->id;

    // delete ticket
    if($ticket->delete()){
        echo json_encode(
            array('message' => 'ticket Deleted');
        );
    } else {
        echo json_encode(
            array('message' => 'ticket Not Deleted');
        );
    }