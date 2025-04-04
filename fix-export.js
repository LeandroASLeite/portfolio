const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "dist");
const portfolioDir = path.join(outDir, "portfolio");

// Se a pasta "portfolio" não existir, cria ela
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

// Move todos os arquivos da pasta "out" para "out/portfolio"
fs.readdirSync(outDir).forEach((file) => {
  if (file !== "portfolio") {
    fs.renameSync(path.join(outDir, file), path.join(portfolioDir, file));
  }
});

console.log("✅ Build ajustada: arquivos movidos para /dist/portfolio/");
