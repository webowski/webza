<?php
$pages = glob(__DIR__ . '/../src/pages/*.php');
foreach ($pages as $p) {
	ob_start();
	require $p;
	$html = ob_get_clean();
	$out = __DIR__ . '/../dist/' . basename($p);
	file_put_contents($out, $html);
	echo "Generated: " . $out . "\n";
}
