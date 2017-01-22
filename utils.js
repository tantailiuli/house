import {readFile} from "fs";/*获取fs框架中的readFile方法*/
export const l = function(){/*简化console.log()方法*/
	return console.log(...arguments);
};
export const readFileAsync = path => new Promise((resolve,reject) => {
	readFile(path,"utf-8",(err,file) => {
		err && reject(err);
		resolve(file);
	});
});/*封装readFileAsync方法*/
export const createHTML = async ({title,styles,script,path}) =>
`
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		${styles.map(item => `<link rel="stylesheet" href="${item}" />`).join("\n\t\t")}
		<title>${title}</title>
	</head>
	<body>
		${await readFileAsync(path)}
		${script.map(item => `<script src="${item}"></script>`).join("\n\t\t")}
	</body>
</html>
`;