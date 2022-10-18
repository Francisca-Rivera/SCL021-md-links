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

// Si la ruta existe
const pathExists = () => {
  fs.existsSync(route);
  console.log(pathExists);
};
// si la ruta es absoluta
const pathIsAbsolute = (route) => {
  console.log(pathIsAbsolute);
  if (path.isAbsolute(route) === false) {
    path.resolve(route);
    return path.resolve(route);
  } else {
    return route;
  }
};
// si es un archivo
const isFile = (route) => {
  console.log(isFile);
  if (route.isFile() === true) {
    return true;
  }
  return false;
};
// si es un directorio
const isDirectory = (userPath) => {
  console.log(isDirectory);
  try {
    const stats = fs.statSync(userPath);
    return stats.isDirectory();
  } catch (err) {
    console.error(err);
  }
};
// Transforma ruta relativa a absoluta
const transformAbsoluteLink = (route) => {
  console.log(
    "Transformando ruta relativa a absoluta".magentaBright,
    transformAbsoluteLink
  );
  if (path.isAbsolute(route) === false) {
    return path.resolve(route);
  }
  return route;
};
// si la extensión del archivo es .md
const extensionValidate = (routeExt, validExt) => {
  console.log(extensionValidate);
  if (routeExt === validExt) {
    return true;
  }
  return false;
};
// lee archivos .md
const readFilesMd = (route) => {
  console.log(readFilesMd);
  return new promise((resolve, reject) => {
    const arrayFiles = [];
    fs.readdirSync(route, "utf-8", (err, files) => {
      if (err) {
        reject(err);
      }
      console.log("Se encontraron los archivos: ".bgGreenBright);
      files.forEach((file) => {
        if (extensionValidate(route) === true) {
          console.log(file);
          arrayFiles.push(route);
        }
      });
      console.log("Analizando...".rainbow);
      resolve(arrayFiles);
    });
  });
};

// para contar links unicos
const countUniqueLinks = (ruta) => {
  console.log(countUniqueLinks);
  let countLinks = 0;
  ruta.forEach((link, i) => {
    if (ruta.indexOf(link) === i) {
      countLinks++;
    }
  });
  return countLinks;
};
//Valida los links
const validateLinks = (ruta) => {
  console.log(validateLinks);
  return ruta.map((url) => {
    return new Promise((resolve) => {
      https.get(url, (resp) => {
        if (resp.statusCode === 200) {
          resolve({
            ruta: process.argv[2],
            url: url,
            code: res.statusCode,
            message: "OK",
          });
        } else {
          resolve({
            ruta: process.argv[2],
            url: url,
            code: res.statusCode,
            message: "FAIL",
          });
        }
      });
    });
  });
};

// Funcion extraer info de links
const infoLinks = (links) => {
  console.log(infoLinks);
  const getStatus = links.map((obj) => {
    return fetch(obj)
      .then((response) => {
        return {
          text: obj.text,
          href: obj.href,
          status: response.status === 200 ? "OK" : "Error",
          ok: "ok",
        };
      })
      .catch((error) => {
        return {
          text: obj.text,
          href: obj.href,
          status:
            error.status === undefined ? "No existe status" : error.status,
          ok: "fail",
        };
      });
  });
  return Promise.all(getStatus);
};

/*mdLinks()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error.message);
  });*/
