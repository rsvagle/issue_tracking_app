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

    // ticket query
    $result = $ticket->read();
    // Get row count
    $num = $result->rowCount();

    // Check if any tickets
    if($num > 0){
        // ticket array
        $tickets_arr = array();
        $tickets_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $ticket_item = array(
                'id' => $id,
                'title' => $title,
                'description' => html_entity_decode($description),
                'author' => $author,
                'status' => $status,
                'category_id' => $category_id,
                'category_name' => $category_name,
                'assigned_dev_id' => $ticket->assigned_dev_id
            );

            // Push to "data"
            array_push($tickets_arr['data'], $ticket_item);
        }

        // Turn to JSON & output
        echo json_encode($tickets_arr);


    } else {
        echo json_encode(
            array('message' => 'No tickets Found')
        );
    }