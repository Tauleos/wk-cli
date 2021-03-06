const runShell = require('../../utils/run');
/**
 * 设计思路：plugins对外暴露一系列api，用来注入prompt、执行的命令、模板中的变量替换等
 */
class PluginsAPI {
  constructor(creator) {
    this.creator = creator;
  }
  injectPrompt(prompt) {
    if (Array.isArray(prompt)) {
      this.creator.injectedPrompts = this.creator.injectedPrompts.concat(prompt);
    } else {
      this.creator.injectedPrompts.push(prompt);
    }
  }
  customDownload(fn) {
    this.creator.downloadFn = fn;
  }
  // onPromptComplete(cb) {
  //   this.creator.promptCompleteCbs.push(cb);
  // }
  onProjectCreate(cb) {
    this.creator.onProjectCreateCbs.push(cb);
  }
  onGitInit(cb) {
    this.creator.onGitInitCbs.push(cb);
  }
}

class PluginsContainer {
  constructor() {
    this.plugins = [];
  }
  registerPlugins(cb) {
    this.plugins.push(cb);
  }
}

module.exports = {
  PluginsAPI,
  PluginsContainer,
};
