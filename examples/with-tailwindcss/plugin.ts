import fs from 'fs';
import path from 'path';
import { IApi } from 'umi';

export default (api: IApi) => {
  /** 由于修改 .tsx 文件不会触发 css 文件的重新编译，
   * 在 onCheckCode 时对 tailwind.css 文件进行 touch，手动触发 JIT 重新编译 */
  api.onCheckCode(() => {
    const a = path.resolve(api.cwd, 'tailwind.css');
    fs.utimesSync(a, new Date(), new Date());
  });
};
