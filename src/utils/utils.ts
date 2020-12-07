import { spawn } from "child_process";

export function excuteX(command: string) {
  return new Promise((resolve) => {
    const child = spawn(command, {
      shell: true
    });
    child.stdout.on("data", (data: string) => {
      console.log(`${data}`);
    });
    child.stderr.on("data", (data: string) => {
      console.error(`${data}`);
    });
    child.on("close", resolve);
  })
}