// We have to bring in require the module

const fs = require("node:fs/promises");

// now create 3 files you need via an array

const files = [
  {
    filename: "index.html",
    content: `<!DOCTYPE html><html lang="en"><head><metacharset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Auto-writing</title></head><body><script src="script.js"></script></body></html>`,
  },
  { filename: "styles.css", content: `/* basis styles for JD` },
  { filename: "script.js", content: `// ready for JS` },
];

// iterate through the array and create the files

const createFiles = async () => {
  try {
    await Promise.all(
      files.map(async (file) => {
        return new Promise((resolve, reject) => {
          fs.writeFile(file.filename, file.content, (err) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log(`File ${file.filename} created successfully.`);
              resolve();
            }
          });
        });
      })
    );
    console.log("All files created successfully!");
  } catch (error) {
    console.error("Error creating files:", error);
  }
};

createFiles();
