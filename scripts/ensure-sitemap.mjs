import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const sitemapIndex = join(distDir, "sitemap-index.xml");
const sitemapXml = join(distDir, "sitemap.xml");
const sitemapChunk = join(distDir, "sitemap-0.xml");
const robotsTxt = join(distDir, "robots.txt");
const expectedSitemapLine = "Sitemap: https://finanzielle-freiheit-ratgeber.pages.dev/sitemap.xml";

const read = (file) => {
  if (!existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }

  return readFileSync(file, "utf8");
};

const assertXml = (file, content) => {
  const trimmed = content.trimStart();

  if (!trimmed.startsWith("<?xml")) {
    throw new Error(`${file} must start with an XML declaration.`);
  }

  if (/<\/?html\b|<!doctype html/i.test(content)) {
    throw new Error(`${file} contains HTML instead of XML.`);
  }
};

copyFileSync(sitemapIndex, sitemapXml);

assertXml(sitemapXml, read(sitemapXml));
assertXml(sitemapChunk, read(sitemapChunk));

const robots = read(robotsTxt);
if (!robots.includes(expectedSitemapLine)) {
  throw new Error(`robots.txt must include: ${expectedSitemapLine}`);
}

console.log("Verified dist/sitemap.xml, dist/sitemap-0.xml, and dist/robots.txt.");
