import "mocha";
import "should";
import * as path from "path";
import * as fs from "fs";
import staticBuild from "../index";

describe("isotropy-build-static", async () => {
  it("Copies", async () => {
    const sourceDir = path.join(__dirname, "/fixtures/source");
    const root = path.join(__dirname, "root");
    await staticBuild(sourceDir, root, { type: "static", dest: "/output" });
    const stat1 = fs.statSync(path.join(__dirname, "root", "output/test.md"));
    const stat2 = fs.statSync(path.join(__dirname, "root", "output/another.md"));
    stat1.isFile().should.be.true();
    stat2.isFile().should.be.true();
  });
});
