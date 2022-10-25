#!/usr/bin/env node

// Imports
import fs from "fs"; // Trabaja sistema de archivos en la computadora
import path from "path"; // Maneja rutas
import fetch from "node-fetch";
import chalk from "chalk";
import colors from "colors";
import promise from "promise";

console.log(chalk.blue("Hello world!"));
console.log("OMG Rainbows!".rainbow);

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
  if (fs.statSync(route).isFile() === true) {
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
  /*console.log(
    "Transformando ruta relativa a absoluta".magentaBright,
    transformAbsoluteLink
  );*/
  if (path.isAbsolute(route) === false) {
    return path.resolve(route);
  }
  return route;
};

// si la extensión del archivo es .md
const extensionValidate = (route) => {
  console.log(extensionValidate);
  if (path.extname(route) === ".md") {
    return true;
  } else {
    // si la extension no es .md retorna false
    return false;
  }
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
// Valida los links
const validateLinks = (ruta) => {
  console.log(validateLinks);
  return ruta.map((url) => {
    return new promise((resolve) => {
      https.get(url, (resp) => {
        if (resp.statusCode === 200) {
          resolve({
            ruta: process.argv[2],
            url: url,
            code: resp.statusCode,
            message: "OK",
          });
        } else {
          resolve({
            ruta: process.argv[2],
            url: url,
            code: resp.statusCode,
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
  return promise.all(getStatus);
};

// ruta del usuario
const inputRuta = process.argv[2];
// const inputToString = inputRuta.toString();

// ruta del usuario absoluta
const absoluteUser = transformAbsoluteLink(inputRuta);
console.log(absoluteUser + " La ruta es Absoluta!".rainbow);

// const extractFile = readFilesMd(absoluteUser);
// console.log(extractFile + "analisis");

// extraccion de urls
const findUrl = (mdFiles) => {
  return new promise((resolve, reject) => {
    const urlArray = [];
    const urlRegex =
      /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
    fs.readFile(mdFiles, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else if (data.match(urlRegex) === null) {
        reject("No se encuentran links en el documento");
      } else if (data) {
        data.match(urlRegex).forEach((link) => {
          urlArray.push(link);
          // console.log(link);
        });
        resolve(urlArray);
      }
    });
  });
};
// la promesa
const mdLinks = (source, options) => {
  return new promise((resolve, reject) => {
    if (absoluteUser) {
      if (isFile(absoluteUser) === true) {
        // si no es md
        if (extensionValidate(absoluteUser) === false) {
          reject("El archivo no es de tipo .m".red);
        } else {
          findUrl(absoluteUser).then((url) => {
            url.forEach((link) => {
              urlArray.push(link);
              // console.log(link);
            });
            console.log(urlArray);
            resolve(urlArray);
          });
          // si es true lee el archivo

          // si es md
        }
      }
    }
  });
};
mdLinks()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error.message);
  });
