#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Hi there`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Sidharth Sethi

I am a Web Developer with a good knowledge of Data Structures and Algorithms along with SQL. I am currently Google DSC Lead, CodeChef Chapter Event Lead, and Co-Founder of Algoders Community at my Campus. I have a 3-star rating at CodeChef. In 2022 I am learning MERN Stack to work as a Full-Stack Developer.

🦑 GitHub - https://github.com/techspiritss 
📃 Portfolio - https://techspiritss.github.io/Sidharth_Sethi/
💼 LinkedIn - https://www.linkedin.com/in/sidharthsethiss

`);
