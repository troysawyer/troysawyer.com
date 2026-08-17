import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports a complete, indexable personal site", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>Troy Sawyer/);
  assert.match(html, /Software Developer &amp; Systems Thinker/);
  assert.match(html, /Good systems make/);
  assert.match(html, /AgileIM/);
  assert.match(html, /EmailPointer/);
  assert.match(html, /id="earlier"/);
  assert.match(html, /Earlier chapters/);
  assert.match(html, /Accolade Computers/);
  assert.match(html, /classroom in Jakarta/);
  assert.match(html, /href="#acreage"/);
  assert.match(html, /id="acreage"/);
  assert.match(html, /old chicken coop/);
  assert.match(html, /hens and chicks/);
  assert.match(html, /hydroponic growing/);
  assert.match(html, /mailto:troysawyer@gmail\.com/);
  assert.match(html, /rel="icon" href="\/icon\.png\?[^"]+"/);
  assert.match(html, /property="og:image"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
});

test("exports required public assets", async () => {
  const [socialCard, favicon, robots] = await Promise.all([
    readFile(new URL("og.png", outputRoot)),
    readFile(new URL("icon.png", outputRoot)),
    readFile(new URL("robots.txt", outputRoot), "utf8"),
  ]);

  assert.ok(socialCard.byteLength > 100_000);
  assert.ok(favicon.byteLength > 10_000);
  assert.match(robots, /Allow:\s*\//);
  assert.match(robots, /Sitemap:\s*https:\/\/www\.troysawyer\.com\/sitemap\.xml/);
});
