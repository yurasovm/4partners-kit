export default class TailwindConfigBuilder {
    constructor();
    setColors(colorsConfig: any): void;
    setBorderRadius(borderRadiusConfig: any): void;
    setExtend(extendConfig: any): void;
    setContent(contentConfig: any): this;
    setTheme(themeConfig: any): this;
    setVariants(variantsConfig: any): this;
    addPlugin(plugin: any): this;
    build(): any;
}
