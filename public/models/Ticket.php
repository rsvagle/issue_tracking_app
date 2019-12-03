<?php
    class Ticket{
        // DB Stuff
        private $conn;
        private $table = 'tickets';

        // Ticket properties
        public $id;
        public $category_id;
        public $category_name;
        public $title;
        public $description;
        public $author;
        public $status;
        public $assigned_dev;
        public $created_at;

        //Constructor with DB
        public function __construct($db){
            $this->conn = $db;
        }

        //Get tickets
        public function read(){
            //Create query
            $query = 
                'SELECT 
                    c.name as category_name,
                    t.id,
                    t.category_id,
                    t.title,
                    t.description,
                    t.author,
                    t.status,
                    u.username as username
                    t.assigned_dev_id,
                    t.created_at
                FROM 
                    ' . $this->table . ' t
                LEFT JOIN
                    categories c ON t.category_id = c.id
                LEFT JOIN
                    users u ON t.assigned_dev_id = u.id
                ORDER BY
                    t.created_at DESC';
            //End of query

            //Prepare Statement
            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        // Get single ticket
        public function read_single(){
            //Create query
            $query = 
                'SELECT 
                    c.name as category_name,
                    t.id,
                    t.category_id,
                    t.title,
                    t.description,
                    t.author,
                    t.status,
                    u.username as username
                    t.assigned_dev_id,
                    t.created_at
                FROM 
                    ' . $this->table . ' t
                LEFT JOIN
                    categories c ON t.category_id = c.id
                LEFT JOIN
                    users u ON t.assigned_dev_id = u.id
                WHERE
                    t.id = ?
                LIMIT 0,1';
            //End of query

            //Prepare Statement
            $stmt = $this->conn->prepare($query);

            // Bind ID

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            //Set Properties
            $this->title = $row['title'];
            $this->description = $row['description'];
            $this->author = $row['author'];
            $this->status = $row['status'];
            $this->category_id = $row['category_id'];
            $this->category_name = $row['category_name'];
            $this->assigned_dev_id = $row['assigned_dev_id'];
            $this->created_at = $row['created_at'];

            return $stmt;
        }

        // Create ticket
        public function create(){
            // Create query
            $query = 'INSERT INTO ' . $this->table . '
                SET
                    title= :title,
                    description= :description,
                    author= :author,
                    category_id= :category_id';
            
            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Clean data
            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->author = htmlspecialchars(strip_tags($this->author));
            $this->category_id = htmlspecialchars(strip_tags($this->category_id));

            // Bind the data
            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':author', $this->author);
            $stmt->bindParam(':category_id', $this->category_id);

            // Execute Query
            if($stmt->execute()){
                return true;
            } else{
                printf("Error %s. \n", $stmt->error);
                return false;
            }
        }

        // Update ticket
        public function update(){
            // Create query
            $query = 'UPDATE ' . $this->table . '
                SET
                    title= :title,
                    description= :description,
                    author= :author,
                    category_id= :category_id
                WHERE
                    id= :id';
            
            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Clean data
            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->author = htmlspecialchars(strip_tags($this->author));
            $this->category_id = htmlspecialchars(strip_tags($this->category_id));
            $this->id = htmlspecialchars(strip_tags($this->id));


            // Bind the data
            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':author', $this->author);
            $stmt->bindParam(':category_id', $this->category_id);
            $stmt->bindParam(':id', $this->id);

            // Execute Query
            if($stmt->execute()){
                return true;
            } else{
                printf("Error %s. \n", $stmt->error);
                return false;
            }
        }

        // Delete ticket
        public function delete(){
            // Create query
            $query = 'DELETE FROM ' . $this->table . 'WHERE id = :id';

             // Prepare statement
             $stmt = $this->conn->prepare($query);

             // Clean Data
             $this->id = htmlspecialchars(strip_tags($this->id));

             // Bind the id
             $stmt->bindParam(':id', $this->id);

            // Execute Query
            if($stmt->execute()){
                return true;
            } else{
                printf("Error %s. \n", $stmt->error);
                return false;
            }
        }
    }