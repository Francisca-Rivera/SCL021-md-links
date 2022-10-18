#!/usr/bin/env node

// Imports
import fs from "fs"; // Trabaja sistema de archivos en la computadora
import path from "path"; // Maneja rutas
import fetch from "node-fetch";
import chalk from "chalk";
import colors from "colors";

console.log(chalk.blue("Hello world!"));
console.log("OMG Rainbows!".rainbow); // rainbow

// Constantes expresiones regulares
// url y texto
const regExLinkTextUrl =
  /\[(.+)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/gi;
// solo text
const regExText = /\[([^\]]+)]/g;
// solo url
const regExUrl =
  /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
