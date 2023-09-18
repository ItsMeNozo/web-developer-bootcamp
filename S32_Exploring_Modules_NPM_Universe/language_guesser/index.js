import { franc } from "franc";
import langs from "langs";
import Color from "colors";
// get input of words from user thourgh arg
const wordsInput = process.argv[2];
const code = franc(wordsInput);

// franc cant figure out language
if (code === "und") {
  console.log("Undetermined language. Try with larger data.".red);
} else {
  const language = langs.where("3", code);
  console.log(`Our best guess is: ${language.name}`.green);
}
