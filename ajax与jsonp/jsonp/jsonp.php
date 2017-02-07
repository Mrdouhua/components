<?php
$data = isset($_GET['intro']) ? trim($_GET['intro']) : '';
$data = array('intro' => $data);
$callback = isset($_GET['callback']) ? trim($_GET['callback']) : '';
echo $callback.'('.json_encode($data).')';