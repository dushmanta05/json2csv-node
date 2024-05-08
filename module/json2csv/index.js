import { createReadStream, createWriteStream } from "fs";
import { Transform } from "@json2csv/node";

const parseJsonToCsv = async () => {
	const input = createReadStream("module/json2csv/data.json", {
		encoding: "utf8",
	});
	const output = createWriteStream("module/json2csv/data.csv", {
		encoding: "utf8",
	});

	const parser = new Transform();

	const processor = input.pipe(parser).pipe(output);

	parser
		.on("header", (header) => console.log(header))
		.on("line", (line) => console.log(line));

	return processor;
};

export { parseJsonToCsv };
