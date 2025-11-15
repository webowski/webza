import fs from 'fs';
import path from 'path';

const iconsDir = path.resolve(process.cwd(), 'src/widgets');
const outFile = path.resolve(process.cwd(), 'dist/assets/sprite.svg');

function collectSVGs(dir) {
	const files = [];
	const items = fs.readdirSync(dir, { withFileTypes: true });
	for (const it of items) {
		const p = path.join(dir, it.name);
		if (it.isDirectory()) files.push(...collectSVGs(p));
		else if (it.name.endsWith('.svg')) files.push(p);
	}
	return files;
}

const svgs = collectSVGs(iconsDir);
let symbols = '';
for (const f of svgs) {
	const content = fs.readFileSync(f, 'utf8').replace(/<\?xml.*\?>/g,'').replace(/<!DOCTYPE.*?>/g,'').replace(/<svg[^>]*>/,'').replace(/<\/svg>/,'').trim();
	const id = path.basename(f, '.svg').replace(/\s+/g,'-').toLowerCase();
	symbols += `<symbol id="${id}" viewBox="0 0 24 24">${content}</symbol>\n`;
}
const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols}</svg>`;
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, sprite, 'utf8');
console.log('Wrote sprite to', outFile);
