<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Ticket.php';

    // Instantiate DB and Connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate ticket object
    $ticket = new Ticket($db);

    // Get ID
    $ticket->id = isset($_GET['id']) ? $_GET['id'] : die();

    // Get ticket
    $ticket->read_single();

    // Create Array
    $ticket_arr = array(
        'id' => $ticket->id,
        'title' => $ticket->title,
        'description' => $ticket->description,
        'author' => $ticket->author,
        'status' => $ticket->status,
        'category_id' => $ticket->category_id,
        'category_name' => $ticket->category_name,
        'assigned_dev_id' => $ticket->assigned_dev_id
    );

    // Make JSON
    print_r(json_encode($ticket_arr));