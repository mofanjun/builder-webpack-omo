const assets = require('assert');

describe('webpack base test case',() => {
    const baseConf = require('../../lib/webpack.base');
    //console.log(baseConf);
    it('entry',()=> {
        assets.equal(baseConf.entry.index,"C:/Users/samoo/Documents/GitHub/frontend/webpack4.x/code/my-project2/builder-webpack/test/smoke/template/src/index/index.js");
        assets.equal(baseConf.entry.search,"C:/Users/samoo/Documents/GitHub/frontend/webpack4.x/code/my-project2/builder-webpack/test/smoke/template/src/search/index.js");
    });
});