import { program } from "commander";

const pkg = require("../package.json");
/**
 * 初始化命令行程序
 */
function initProgram() {
  program.version(pkg.version);

  program
    .command("init <name>")
    .option("-r, --param1 <param1>", "参数1")
    .option("-o, --param2 <param2>", "参数2")
    .option("-i --param3", "参数3")
    .action(async (name: string, obj: {param1: string, param2: string, param3: boolean}) => {
      console.log(name);
      console.log(obj.param1);
      console.log(obj.param2);
      console.log(obj.param3);
    });
  
  program.parse(process.argv);
}

initProgram();