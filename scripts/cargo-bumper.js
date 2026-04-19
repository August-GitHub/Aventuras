/**
 * Cargo.toml 版本更新器
 * 用于 standard-version 自动更新 Cargo.toml 中的版本号
 */

module.exports = {
  /**
   * 读取 Cargo.toml 中的当前版本号
   * @param {string} contents - Cargo.toml 文件内容
   * @returns {string|null} 当前版本号
   */
  readVersion: function (contents) {
    const match = contents.match(/version = "([^"]+)"/)
    return match ? match[1] : null
  },

  /**
   * 更新 Cargo.toml 中的版本号
   * @param {string} contents - Cargo.toml 文件内容
   * @param {string} version - 新版本号
   * @returns {string} 更新后的文件内容
   */
  writeVersion: function (contents, version) {
    return contents.replace(/version = "[^"]+"/, `version = "${version}"`)
  },
}
