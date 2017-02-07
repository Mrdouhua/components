<?php
$data = isset($_GET['intro']) ? trim($_GET['intro']) : '';
$data = array('intro' => $data);
echo json_encode($data);