/* @flow */

import {
  no,
  noop,
  identity
} from 'shared/util'

import { LIFECYCLE_HOOKS } from 'shared/constants'

export type Config = {
  // user
  optionMergeStrategies: { [key: string]: Function };
  silent: boolean;
  productionTip: boolean;
  performance: boolean;
  devtools: boolean;
  errorHandler: ?(err: Error, vm: Component, info: string) => void;
  warnHandler: ?(msg: string, vm: Component, trace: string) => void;
  ignoredElements: Array<string | RegExp>;
  keyCodes: { [key: string]: number | Array<number> };

  // platform
  isReservedTag: (x?: string) => boolean;
  isReservedAttr: (x?: string) => boolean;
  parsePlatformTagName: (x: string) => string;
  isUnknownElement: (x?: string) => boolean;
  getTagNamespace: (x?: string) => string | void;
  mustUseProp: (tag: string, type: ?string, name: string) => boolean;

  // private
  async: boolean;

  // legacy
  _lifecycleHooks: Array<string>;
};

export default ({
  /**
   * Option merge strategies (used in core/util/options) 选项合并策略(在core/util/options中使用)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.是否压制警告。
   */
  silent: false,

  /**
   * Show production mode tip message on boot? 开机显示生产模式提示信息?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools 是否启用devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf 是否记录性能
   */
  performance: false,

  /**
   * Error handler for watcher errors 监视程序错误的错误处理程序
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns 警告处理程序的警告
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements 忽略某些自定义元素
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on 为v-on自定义用户密钥别名
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten. 检查是否保留了标记，以便不能将其注册为组件。这是平台相关的，可能会被覆盖。
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten. 检查是否保留了某个属性，使其不能用作组件支柱。这是平台相关的，可能会被覆盖。
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent. 检查标签是否是一个未知元素。
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element 获取元素的名称空间
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform. 解析特定平台的实际标记名。
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value 检查属性是否必须使用属性绑定，例如value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false. 异步执行更新。这将显著降低性能，如果设置为假。
   */
  async: true,

  /**
   * Exposed for legacy reasons 出于遗留原因而暴露
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
}: Config)
