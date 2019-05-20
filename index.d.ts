declare module "wxa-core/src/utils/object" {
    type Predicate<T> = (val: T) => boolean;
    /**
     * 遍历对象成员，获取对象符合条件的成员名称
     * @param object 要遍历的对象
     * @param filter 筛选条件
     */
    export function keysOf<T = any>(object: T, filter?: Predicate<string>): string[];
    /**
     * 根据条件从一个对象中选择部分属性组成一个新的对象
     * @param obj 要投影的对象
     * @param filter 要过滤的条件，可以是函数或者是包含键名的字符串数组
     */
    export function selectObject<T extends Record<string, any> = any>(obj: T, filter: string[] | Predicate<string>): Partial<T>;
    export {};
}
declare module "wxa-core/src/app/app.options" {
    export interface IAppOptions {
        /**
         * 自定义应用构造函数，必须返回有一个有效的对象
         */
        ctor?: (object: Object) => object;
    }
}
declare module "wxa-core/src/app/decorators" {
    import { IAppOptions } from "wxa-core/src/app/app.options";
    export function app(options?: IAppOptions): (constructor: new (...args: any[]) => any) => void;
}
declare module "wxa-core/src/app/app.type" {
    export interface ILaunchOptions {
        query: number;
    }
    export interface IReferrerInfo {
        /** 来源小程序或公众号或App的 appId */
        appId: string;
        /** 来源小程序传过来的数据，scene=1037或1038时支持 */
        extraData?: any;
    }
    export interface ILaunchShowOption {
        /** 打开小程序的路径 */
        path: string;
        /** 打开小程序的query */
        query: Record<string, any>;
        /** 打开小程序的场景值 */
        scene: number;
        /** shareTicket，详见 [获取更多转发信息]((转发#获取更多转发信息)) */
        shareTicket: string;
        /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
        referrerInfo?: IReferrerInfo;
    }
    export interface IPageNotFoundOption {
        /** 不存在页面的路径 */
        path: string;
        /** 打开不存在页面的 query */
        query: Record<string, any>;
        /** 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） */
        isEntryPage: boolean;
    }
}
declare module "wxa-core/src/app/app" {
    import { ILaunchShowOption, IPageNotFoundOption } from "wxa-core/src/app/app.type";
    export abstract class App implements Record<string, any> {
        /** 生命周期回调—监听小程序初始化
         *
         * 小程序初始化完成时触发，全局只触发一次。
         */
        onLaunch?(options?: ILaunchShowOption): void;
        /** 生命周期回调—监听小程序显示
         *
         * 小程序启动，或从后台进入前台显示时
         */
        onShow?(options?: ILaunchShowOption): void;
        /** 生命周期回调—监听小程序隐藏
         *
         * 小程序从前台进入后台时
         */
        onHide?(): void;
        /** 错误监听函数
         *
         * 小程序发生脚本错误，或者 api
         */
        onError?(/** 错误信息，包含堆栈 */ error?: string): void;
        /** 页面不存在监听函数
         *
         * 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
         *
         * **注意：**
         * 1. 如果开发者没有添加 `onPageNotFound` 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
         * 2. 如果 `onPageNotFound` 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 `onPageNotFound`。
         *
         * 最低基础库： 1.9.90
         */
        onPageNotFound?(options?: IPageNotFoundOption): void;
    }
}
declare module "wxa-core/src/app/index" {
    export { app } from "wxa-core/src/app/decorators";
    export { App } from "wxa-core/src/app/app";
}
declare module "wxa-core/src/utils/array" {
    export function includes<T>(arr: T[], item: T): boolean;
}
declare module "wxa-core/src/common" {
    /**
     * 获取更新的属性
     * @param computedProperties 需要计算的属性
     */
    export function getUpdateData(computedProperties: string[]): any;
    /**
     * 初始化数据，将计算属性和Data合并
     * @param instance 页面或者组件实例
     * @param computedProperties 需要计算的属性
     * @param options 组件属性
     */
    export function initailComputedData(instance: any, computedProperties: string[], options?: Record<string, any>): void;
    /**
     * 重写setData方法
     * @param computedProperties 需要计算的属性
     */
    export function overrideSetData(computedProperties: string[]): void;
    /**
     * 为指定实例对像设置属性
     * @param instance
     * @param target
     */
    export function setProperties(instance: any, target: any): (symbol: symbol, keyFormatter?: (key: string) => string) => string[];
}
declare module "wxa-core/src/constants" {
    export const COMPUTED_DATA: any;
    export const BINDS: any;
    export const METHODS: any;
    export const OBSERVERS: any;
    export const LIFETIMES: any;
    export const PAGE_LIFETIMES: any;
}
declare module "wxa-core/src/component/property" {
    type PropertyType = String | Number | Boolean | Object | any[] | null;
    export { PropertyType };
    /**
     * 组件属性
     */
    export interface IProperty<T> {
        /**
         * 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
         */
        observer?: (this: T, newVal: any, oldVal: any, changedPath: string) => void;
        /**
         * 属性的类型（可以指定多个）
         * 2.6.1
         */
        optionalTypes?: PropertyType[];
        /**
         * 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
         */
        type: PropertyType;
        /**
         * 属性初始值（可选），如果未指定则会根据类型选择一个
         */
        value?: any;
    }
}
declare module "wxa-core/src/component/component.options" {
    import { IProperty, PropertyType } from "wxa-core/src/component/property";
    /**
     * 组件装饰器参数
     */
    export interface IComponentOptions<T> extends Record<string, any> {
        /**
         * 自定义组件构造函数，必须返回有一个有效的对象
         */
        ctor?: (object: Object) => object;
        /**
         * 组件生命周期声明对象
         * 2.2.3
         */
        lifetimes?: {
            /**
             * 在组件实例刚刚被创建时执行
             */
            created?: (this: T) => void;
            /**
             * 在组件实例进入页面节点树时执行
             */
            attached?: (this: T) => void;
            /**
             * 在组件在视图层布局完成后执行
             */
            ready?: (this: T) => void;
            /**
             * 在组件实例被移动到节点树另一个位置时执行
             */
            moved?: (this: T) => void;
            /**
             * 在组件实例被从页面节点树移除时执行
             */
            detached?: (this: T) => void;
            /**
             * 每当组件方法抛出错误时执行
             */
            error?: (this: T, error: Object) => void;
        };
        /**
         * 组件数据字段监听器，用于监听 properties 和 data 的变化
         * 2.6.1
         */
        observers?: Record<string, (this: T, ...args: any[]) => void>;
        /**
         * 一些选项
         */
        options?: {
            /**
             * 在组件定义时的选项中启用多slot支持
             */
            multipleSlots?: boolean;
        };
        /**
         * 组件所在页面的生命周期声明对象
         * 2.2.3
         */
        pageLifetimes?: {
            /**
             * 组件所在的页面被展示时执行
             * 2.2.3
             */
            show?: (this: T) => void;
            /**
             * 组件所在的页面被隐藏时执行
             * 2.2.3
             */
            hide?: (this: T) => void;
            /**
             * 组件所在的页面尺寸变化时执行
             * 2.4.0
             */
            resize?: (this: T, size: Object) => void;
        };
        /**
         * 组件数据，包括内部数据和属性值（与 data 一致）
         */
        properties?: Record<string, IProperty<T> | PropertyType>;
    }
}
declare module "wxa-core/src/component/decorators" {
    import { IComponentOptions } from "wxa-core/src/component/component.options";
    /**
     * 将当前成员标记为组件的方法
     */
    export function method(target: any, name: string, descriptor: PropertyDescriptor): void;
    /**
     * 组件数据字段监听器，用于监听 properties 和 data 的变化。
     * 从小程序基础库版本 2.6.1 开始支持。
     * @param fields 要监听字段，比如 'some.subfiel',仅使用通配符'**'可以监听全部。
     */
    export function observer(fields: string): (target: any, name: string) => void;
    /**
     * 组件装饰器
     * @param options 组件装饰器参数
     */
    export function component<T = any>(options?: IComponentOptions<T>): (constructor: new (...args: any[]) => any) => void;
    /**
     * 为组件绑定自定义数据
     */
    export function bind(target: any, name: string): void;
    /**
     * 添加计算属性
     */
    export function computed(): (target: any, name: string, descriptor: PropertyDescriptor) => void;
    /**
     * 声明组件生命周期函数
     */
    export function lifetime(target: any, name: string, descriptor: PropertyDescriptor): void;
    /**
     * 声明组件所在页面的生命周期函数
     */
    export function pageLifetime(target: any, name: string, descriptor: PropertyDescriptor): void;
}
declare module "wxa-core/src/component/base" {
    /**
     * 组件基础类型，可以被页面和组件共用
     * Component data, including internal data and property values
     */
    export abstract class Base<D> implements Record<string, any> {
        /**
         * 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
         */
        createSelectorQuery: () => any;
        /**
         * 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内
         */
        createIntersectionObserver: () => any;
        /**
         * 组件数据，包括内部数据和属性值
         */
        data: D;
        /**
         * 组件的文件路径
         */
        is: string;
        /**
         * 节点id
         */
        id: string;
        /**
         * 节点dataset
         */
        dataset: string;
        /**
         * 获取这个关系所对应的所有关联节点，参见 组件间关系
         */
        getRelationNodes: (relationKey: string) => any;
        /**
         * 返回当前页面的 custom-tab-bar 的组件实例
         */
        getTabBar: () => any;
        /**
         * 立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制（只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步）
         */
        groupSetData: (callback: () => void) => void;
        /**
         * 检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
         */
        hasBehavior: (behavior: any) => boolean;
        /**
         * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
         */
        selectAllComponents: (selector: string) => any[];
        /**
         * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象（会被 wx://component-export 影响）
         */
        selectComponent: (selector: string) => any;
        /**
         * 设置data并执行视图层渲染
         * @param data 这次要改变的数据
         * @param callback setData引起的界面更新渲染完毕后的回调函数
         */
        setData: <K extends keyof D>(data: D | Pick<D, K> | Record<string, any>, callback?: () => void) => void;
        /**
         * 触发事件，参见 组件事件
         */
        triggerEvent: (name: string, detail?: object, options?: object) => void;
    }
}
declare module "wxa-core/src/component/component" {
    import { Base } from "wxa-core/src/component/base";
    /**
     * 组件基础类型，包含组件所有可用的属性和方法
     */
    export abstract class Component<D = any> extends Base<D> implements Record<string, any> {
        /**
         * 类似于mixins和traits的组件间代码复用机制，参见 behaviors
         */
        behaviors?: string[] | string;
        /**
         * 组件间关系定义，参见 组件间关系
         */
        relations?: object;
        /**
         * 组件接受的外部样式类，参见 外部样式类
         */
        externalClasses?: string[];
        /**
         * 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）
         */
        options?: object;
        /**
         * 组件生命周期声明对象，参见 组件生命周期
         */
        lifetimes?: object;
        /**
         * 组件所在页面的生命周期声明对象，支持页面的 show 、 hide 等生命周期，参见 组件生命周期
         */
        pageLifetimes?: object;
        /**
         * 定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展
         */
        definitionFilter?: (...args: any[]) => void;
        /**
         * 组件生命周期函数，在组件实例刚刚被创建时执行，注意此时不能调用 setData ，参见 组件生命周期
         */
        created?(): void;
        /**
         * 组件生命周期函数，在组件实例进入页面节点树时执行，参见 组件生命周期
         */
        attached?(): void;
        /**
         * 组件生命周期函数，在组件布局完成后执行，参见 组件生命周期
         */
        ready?(): void;
        /**
         * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行，参见 组件生命周期
         */
        moved?(): void;
        /**
         * 组件生命周期函数，在组件实例被从页面节点树移除时执行，参见 组件生命周期
         */
        detached?(): void;
    }
}
declare module "wxa-core/src/component/index" {
    export { bind, component, method, observer, computed, pageLifetime, lifetime } from "wxa-core/src/component/decorators";
    export { Component } from "wxa-core/src/component/component";
    export { IComponentOptions } from "wxa-core/src/component/component.options";
    export { IProperty } from "wxa-core/src/component/property";
}
declare module "wxa-core/src/page/page.options" {
    export interface IPageOptions {
        /**
         * 自定义页面构造函数，必须返回有一个有效的对象
         */
        ctor?: (object: object) => object;
    }
}
declare module "wxa-core/src/page/decorators" {
    import { IPageOptions } from "wxa-core/src/page/page.options";
    /**
     * 页面装饰器
     */
    export function page(options?: IPageOptions): (constructor: new (...args: any[]) => any) => void;
}
declare module "wxa-core/src/page/page.type" {
    export interface ITabItemTapOption {
        /**
         * 被点击tabItem的序号，从0开始
         */
        index: string;
        /**
         * 被点击tabItem的页面路径
         */
        pagePath: string;
        /**
         * 被点击tabItem的按钮文字
         */
        text: string;
    }
    export interface IPageScrollOption {
        /**
         * 页面在垂直方向已滚动的距离（单位px）
         */
        scrollTop: number;
    }
    export interface ICustomShareContent {
        /**
         * 转发标题, 默认值：当前小程序名称
         */
        title?: string;
        /**
         * 转发路径，必须是以 / 开头的完整路径。默认值：当前页面 path
         */
        path?: string;
        /**
         * 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。默认值：使用默认截图
         */
        imageUrl?: string;
    }
    export interface IShareAppMessageOption {
        /**
         * 转发事件来源。
         */
        from: "button" | "menu" | string;
        /**
         * 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined`
         */
        target: any;
        /**
         * 页面中包含`<web-view>`组件时，返回当前`<web-view>`的url
         */
        webViewUrl?: string;
    }
}
declare module "wxa-core/src/page/page" {
    import { Base } from "wxa-core/src/component/base";
    import { ICustomShareContent, IPageScrollOption, IShareAppMessageOption, ITabItemTapOption } from "wxa-core/src/page/page.type";
    /**
     * 页面基础类型，包含所有的属性和方法
     * The base type of page which including all properties and methods
     */
    export abstract class Page<D = any> extends Base<D> implements Record<string, any> {
        /**
         * 当前页面的页面参数
         */
        options: Record<string, string>;
        /**
         * 当前页面的路径
         * The path to the current page
         */
        route: string;
        /**
         * 生命周期回调—监听页面加载
         */
        onLoad?(query: Record<string, string>): void;
        /**
         * 生命周期回调—监听页面显示
         */
        onShow?(): void;
        /**
         * 生命周期回调—监听页面初次渲染完成
         */
        onReady?(): void;
        /**
         * 生命周期回调—监听页面隐藏
         */
        onHide?(): void;
        /**
         * 生命周期回调—监听页面卸载
         */
        onUnload?(): void;
        /**
         * 监听用户下拉动作
         */
        onPullDownRefresh?(): void;
        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom?(): void;
        /**
         * 用户点击右上角转发
         */
        onShareAppMessage?(options?: IShareAppMessageOption): ICustomShareContent;
        /**
         * 页面滚动触发事件的处理函数
         */
        onPageScroll?(options?: IPageScrollOption): void;
        /**
         * 当前是 tab 页时，点击 tab 时触发
         */
        onTabItemTap?(options?: ITabItemTapOption): void;
    }
}
declare module "wxa-core/src/page/index" {
    export { page } from "wxa-core/src/page/decorators";
    export { Page } from "wxa-core/src/page/page";
}
declare module "wxa-core" {
    import "reflect-metadata";
    export * from "wxa-core/src/app/index";
    export * from "wxa-core/src/component/index";
    export * from "wxa-core/src/page/index";
}