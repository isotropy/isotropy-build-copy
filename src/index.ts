import * as path from "path";
import * as fse from "fs-extra";

export interface StaticBuild {
  type: "static";
  dest: string;
}

export default async function run(source: string, root: string, module: StaticBuild) {
  const dest = path.join(root, module.dest);
  await fse.mkdirp(dest);
  await fse.copy(source, dest)
}