import fetch from "node-fetch";
import { writeFile } from "fs/promises";
import { exec } from "child_process";
import { readFileSync, existsSync } from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const redocCommand = 'npx redoc-cli bundle openapi.json --output=index.html --title="Boomi Flow API Reference" --template template.hbs --options.nativeScrollbars --options.theme.colors.main=#007db8 --options.lazyRendering --options.requiredPropsFirst --options.suppressWarning --options.theme.rightPanel.backgroundColor=#282c34 --options.theme.rightPanel.textColor=#FFFFFF --options.theme.typography.code.backgroundColor=#121417 --options.theme.typography.code.color=#ffffff --options.theme.typography.fontSize=16px --options.theme.spacing.sectionVertical=10 --options.theme.colors.tonalOffset=0.9 --options.theme.sidebar.width=300px --options.theme.sidebar.textColor=#10639b --options.noAutoAuth --options.hideDownloadButton --options.hideHostname';

const urlToFilePath = (path) => path.slice(1).split('/').join('~');

fetch("https://flow.boomi.com/swagger/v1/swagger.json")
  .then((response) => response.json())
  .then((schema) => { 
      
    const infoDescriptionPath = `${__dirname}/docs/info/description.md`;

    if (existsSync(infoDescriptionPath)) {                
        schema.info.description = readFileSync(infoDescriptionPath).toString();
    }

    for (const [url, methods] of Object.entries(schema.paths)) {
        for (const [methodName, methodProps] of Object.entries(methods)) {

            const summaryFilePath = `${__dirname}/docs/paths/${urlToFilePath(url)}/${methodName}/summary.md`;
            const descriptionFilePath = `${__dirname}/docs/paths/${urlToFilePath(url)}/${methodName}/description.md`;

            if (existsSync(summaryFilePath)) {                
                methodProps.summary = readFileSync(summaryFilePath).toString();
            }

            if (existsSync(descriptionFilePath)) {
                methodProps.description = readFileSync(descriptionFilePath).toString();
            }
        }
    }

    schema.tags = schema.tags.map(tag => {
        const descriptionFilePath = `${__dirname}/docs/tags/${tag.name}/description.md`;

        if (existsSync(descriptionFilePath)) {                
            tag.description = readFileSync(descriptionFilePath).toString();
        }

        return tag;
    })

    return schema;
  })
  .then((schema) =>
    writeFile(
      "./openapi.json",
      JSON.stringify(schema, null, 4)
    )
  )
  .then(() => {
    exec(redocCommand, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  });
