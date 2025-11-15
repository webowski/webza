<?php
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if ($uri === '/_sse') {
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	$last = 0;
	while (true) {
		$m = getLastModified();
		if ($m > $last) {
			echo "data: reload\n\n";
			ob_flush(); flush();
			$last = $m;
		}
		sleep(1);
	}
	exit;
}

$path = __DIR__ . '/../src' . $uri;
if ($uri === '/' || $uri === '/index.php') $path = __DIR__ . '/../src/pages/index.php';
if (file_exists($path)) { require $path; exit; }

http_response_code(404); echo 'Not Found';

function getLastModified() {
	$dirs = [__DIR__ . '/../src', __DIR__ . '/../build'];
	$last = 0;
	foreach ($dirs as $d) {
		$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($d));
		foreach ($it as $file) {
			if ($file->isFile()) { $t = $file->getMTime(); if ($t > $last) $last = $t; }
		}
	}
	return $last;
}
