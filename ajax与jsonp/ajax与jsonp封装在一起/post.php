<?php
$data = isset($_POST['intro']) ? trim($_POST['intro']) : '';
$data = array('intro' => $data);
echo json_encode($data);