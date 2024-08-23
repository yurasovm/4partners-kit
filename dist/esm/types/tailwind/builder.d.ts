import type { BoxShadowConfig, TailwindConfig, TailwindThemeConfig, ColorConfig, BorderRadiusConfig, FontFamilyConfig, ScreensConfig, SpacingConfig, ExtendConfig, PluginFunction } from '../types';
/**
 * Класс для построения конфигурации Tailwind CSS.
 * Позволяет пошагово создавать и настраивать конфигурацию с помощью цепочки методов.
 */
export default class TailwindConfigBuilder {
    private config;
    /**
     * Создает новый экземпляр TailwindConfigBuilder с базовой конфигурацией.
     */
    constructor();
    /**
     * Устанавливает конфигурацию тени.
     * @param boxShadowConfig Объект с определениями теней.
     * @returns this для цепочки вызовов.
     */
    setBoxShadow(boxShadowConfig: BoxShadowConfig): this;
    /**
     * Устанавливает конфигурацию цветов.
     * @param colorsConfig Объект с определениями цветов.
     * @returns this для цепочки вызовов.
     */
    setColors(colorsConfig: ColorConfig): this;
    /**
     * Устанавливает конфигурацию скругления границ.
     * @param borderRadiusConfig Объект с определениями радиусов границ.
     * @returns this для цепочки вызовов.
     */
    setBorderRadius(borderRadiusConfig: BorderRadiusConfig): this;
    /**
     * Устанавливает расширения для темы.
     * @param extendConfig Объект с дополнительными настройками темы.
     * @returns this для цепочки вызовов.
     */
    setExtend(extendConfig: ExtendConfig): this;
    /**
     * Устанавливает пути к файлам контента для Tailwind.
     * @param contentConfig Массив строк с путями к файлам.
     * @returns this для цепочки вызовов.
     */
    setContent(contentConfig: string[]): this;
    /**
     * Устанавливает полную конфигурацию темы.
     * @param themeConfig Объект с настройками темы.
     * @returns this для цепочки вызовов.
     */
    setTheme(themeConfig: TailwindThemeConfig): this;
    /**
     * Устанавливает конфигурацию вариантов.
     * @param variantsConfig Объект с настройками вариантов.
     * @returns this для цепочки вызовов.
     */
    setVariants(variantsConfig: Record<string, any>): this;
    /**
     * Добавляет плагин в конфигурацию.
     * @param plugin Функция плагина.
     * @returns this для цепочки вызовов.
     */
    addPlugin(plugin: PluginFunction): this;
    /**
     * Возвращает текущую конфигурацию.
     * @returns Объект конфигурации Tailwind.
     */
    getConfig(): TailwindConfig;
    /**
     * Устанавливает полную конфигурацию Tailwind.
     * @param config Объект конфигурации Tailwind.
     * @returns this для цепочки вызовов.
     */
    setConfig(config: TailwindConfig): this;
    /**
     * Создает и возвращает окончательную конфигурацию Tailwind.
     * @returns Объект конфигурации Tailwind.
     */
    build(): TailwindConfig;
    /**
     * Устанавливает конфигурацию шрифтов.
     * @param fontFamilyConfig Объект с определениями семейств шрифтов.
     * @returns this для цепочки вызовов.
     */
    setFontFamily(fontFamilyConfig: FontFamilyConfig): this;
    /**
     * Устанавливает конфигурацию экранов (брейкпоинтов).
     * @param screensConfig Объект с определениями размеров экранов.
     * @returns this для цепочки вызовов.
     */
    setScreens(screensConfig: ScreensConfig): this;
    /**
     * Устанавливает конфигурацию отступов.
     * @param spacingConfig Объект с определениями отступов.
     * @returns this для цепочки вызовов.
     */
    setSpacing(spacingConfig: SpacingConfig): this;
    /**
     * Устанавливает префикс для всех утилит Tailwind.
     * @param prefix Строка префикса.
     * @returns this для цепочки вызовов.
     */
    setPrefix(prefix: string): this;
    /**
     * Устанавливает важность для всех утилит Tailwind.
     * @param important Булево значение или строка селектора.
     * @returns this для цепочки вызовов.
     */
    setImportant(important: boolean | string): this;
    /**
     * Устанавливает режим темной темы.
     * @param darkMode Режим темной темы: 'media', 'class' или false.
     * @returns this для цепочки вызовов.
     */
    setDarkMode(darkMode: 'media' | 'class' | false): this;
    /**
     * Добавляет пользовательские утилиты в конфигурацию.
     * @param utilities Объект с определениями пользовательских утилит.
     * @returns this для цепочки вызовов.
     */
    addUtilities(utilities: Record<string, Record<string, string>>): this;
}
