import http from "http";
import { parseJsonToCsv } from "./module/json2csv/index.js";

http
	.createServer(async function (req, res) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(`<h1 style="text-align: center">JSON to CSV Parser Demo</h1>`);

		try {
			const csvData = await parseJsonToCsv();
			console.log(csvData);
		} catch (error) {
			console.error("Error:", error.message);
		}
	})
	.listen(8080);
