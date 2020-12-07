const program = require("commander");
const { startTiny } = require("./tinypng");

/**
 * 初始化命令行程序
 */
function initProgram() {
  program.version("1.0.0");
  program
    .option("-r, --recursive", "是否递归文件夹所有图片")
    .option("-f, --file <file>", "文件名称")
    .action(async (obj) => {
      console.log(obj.file);
      startTiny(obj.file, obj.recursive);
    });
  
  program.parse(process.argv);
}

module.exports = {
  initProgram
}