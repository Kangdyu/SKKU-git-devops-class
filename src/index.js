#!/usr/bin/env node
const { Command } = require("commander");
const { add, div, mul, sub } = require("./math");

const program = new Command();

program
  .name("calc")
  .description("Simple calculator")
  .version("1.0.0");

program
  .command("add")
  .argument("<num1>", "first number parameter")
  .argument("<num2>", "second number parameter")
  .description("add two numbers")
  .action((a, b) => console.log(add(Number(a), Number(b))));

program
  .command("sub")
  .argument("<num1>", "first number parameter")
  .argument("<num2>", "second number parameter")
  .description("subtract two numbers")
  .action((a, b) => console.log(sub(Number(a), Number(b))));

program
  .command("mul")
  .argument("<num1>", "first number parameter")
  .argument("<num2>", "second number parameter")
  .description("multiply two numbers")
  .action((a, b) => console.log(mul(Number(a), Number(b))));

program
  .command("div")
  .argument("<num1>", "first number parameter")
  .argument("<num2>", "second number parameter")
  .description("divide two numbers")
  .action((a, b) => console.log(div(Number(a), Number(b))));

program.parse();
