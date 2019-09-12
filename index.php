<?php
require_once './config.php';

class API {
    function select() {
        $db = new Connect;
        $entries = array();
        $data = $db->prepare('SELECT * FROM entries ORDER BY score');
        $data->execute();

        while($output_data = $data->fetch(PDO::FETCH_ASSOC)) {
            $entries[$output_data['id']] = array(
                'id' => $output_data['id'],
                'name' => $output_data['name'],
                'rankDescription' => $output_data['rankDescription'],
                'score' => $output_data['score']
            );
        }

        return json_encode($entries);
    }
}

$API = new API;
header('Content-Type: application/json');
echo $API->select();
?>