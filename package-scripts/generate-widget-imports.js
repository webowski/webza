import fs from 'fs';
import path from 'path';

const widgetsDir = path.resolve(process.cwd(), 'src/widgets');
const jsOut = path.resolve(process.cwd(), 'src/shared/config/bundle.ts');
const scssOut = path.resolve(process.cwd(), 'src/shared/config/bundle.scss');

function walk(dir) {
	let res = [];
	const items = fs.readdirSync(dir, { withFileTypes: true });
	for (const it of items) {
		const p = path.join(dir, it.name);
		if (it.isDirectory()) res.push(...walk(p));
		else res.push(p);
	}
	return res;
}

const files = walk(widgetsDir);
const tsImports = [];
const scssUset = [];

for (const f of files) {
	if (f.endsWith('.ts')) tsImports.push(`import './${path.relative(path.dirname(jsOut), f).replace(/\\/g,'/')}';`);
	if (f.endsWith('.scss')) scssUset.push(`@use './${path.relative(path.dirname(scssOut), f).replace(/\\/g,'/')}';`);
}

fs.mkdirSync(path.dirname(jsOut), { recursive: true });
fs.writeFileSync(jsOut, '// auto-generated\n'+tsImports.join('\n')+'\n','utf8');
fs.writeFileSync(scssOut, '// auto-generated\n'+scssUset.join('\n')+'\n','utf8');
console.log('Widgets imports generated');
