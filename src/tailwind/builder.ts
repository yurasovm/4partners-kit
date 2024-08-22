import type { BoxShadowConfig, TailwindConfig, TailwindThemeConfig, ColorConfig, BorderRadiusConfig, FontFamilyConfig, ScreensConfig, SpacingConfig, ExtendConfig, PluginFunction } from '../../types';

/**
 * Класс для построения конфигурации Tailwind CSS.
 * Позволяет пошагово создавать и настраивать конфигурацию с помощью цепочки методов.
 */
export default class TailwindConfigBuilder {
  private config: TailwindConfig;

  /**
   * Создает новый экземпляр TailwindConfigBuilder с базовой конфигурацией.
   */
  constructor() {
    this.config = {
      content: [],
      theme: {},
      variants: {},
      plugins: [],
    };
  }

  /**
   * Устанавливает конфигурацию тени.
   * @param boxShadowConfig Объект с определениями теней.
   * @returns this для цепочки вызовов.
   */
  setBoxShadow(boxShadowConfig: BoxShadowConfig): this {
    this.config.theme.boxShadow = boxShadowConfig;
    return this;
  }

  /**
   * Устанавливает конфигурацию цветов.
   * @param colorsConfig Объект с определениями цветов.
   * @returns this для цепочки вызовов.
   */
  setColors(colorsConfig: ColorConfig): this {
    this.config.theme.colors = colorsConfig;
    return this;
  }

  /**
   * Устанавливает конфигурацию скругления границ.
   * @param borderRadiusConfig Объект с определениями радиусов границ.
   * @returns this для цепочки вызовов.
   */
  setBorderRadius(borderRadiusConfig: BorderRadiusConfig): this {
    this.config.theme.borderRadius = borderRadiusConfig;
    return this;
  }

  /**
   * Устанавливает расширения для темы.
   * @param extendConfig Объект с дополнительными настройками темы.
   * @returns this для цепочки вызовов.
   */
  setExtend(extendConfig: ExtendConfig): this {
    this.config.theme.extend = extendConfig;
    return this;
  }

  /**
   * Устанавливает пути к файлам контента для Tailwind.
   * @param contentConfig Массив строк с путями к файлам.
   * @returns this для цепочки вызовов.
   */
  setContent(contentConfig: string[]): this {
    this.config.content = contentConfig;
    return this;
  }

  /**
   * Устанавливает полную конфигурацию темы.
   * @param themeConfig Объект с настройками темы.
   * @returns this для цепочки вызовов.
   */
  setTheme(themeConfig: TailwindThemeConfig): this {
    this.config.theme = themeConfig;
    return this;
  }

  /**
   * Устанавливает конфигурацию вариантов.
   * @param variantsConfig Объект с настройками вариантов.
   * @returns this для цепочки вызовов.
   */
  setVariants(variantsConfig: Record<string, any>): this {
    this.config.variants = variantsConfig;
    return this;
  }

  /**
   * Добавляет плагин в конфигурацию.
   * @param plugin Функция плагина.
   * @returns this для цепочки вызовов.
   */
  addPlugin(plugin: PluginFunction): this {
    this.config.plugins.push(plugin);
    return this;
  }

  /**
   * Возвращает текущую конфигурацию.
   * @returns Объект конфигурации Tailwind.
   */
  getConfig(): TailwindConfig {
    return this.config;
  }

  /**
   * Устанавливает полную конфигурацию Tailwind.
   * @param config Объект конфигурации Tailwind.
   * @returns this для цепочки вызовов.
   */
  setConfig(config: TailwindConfig): this {
    this.config = config;
    return this;
  }

  /**
   * Создает и возвращает окончательную конфигурацию Tailwind.
   * @returns Объект конфигурации Tailwind.
   */
  build(): TailwindConfig {
    return { ...this.config };
  }

  /**
   * Устанавливает конфигурацию шрифтов.
   * @param fontFamilyConfig Объект с определениями семейств шрифтов.
   * @returns this для цепочки вызовов.
   */
  setFontFamily(fontFamilyConfig: FontFamilyConfig): this {
    this.config.theme.fontFamily = fontFamilyConfig;
    return this;
  }

  /**
   * Устанавливает конфигурацию экранов (брейкпоинтов).
   * @param screensConfig Объект с определениями размеров экранов.
   * @returns this для цепочки вызовов.
   */
  setScreens(screensConfig: ScreensConfig): this {
    this.config.theme.screens = screensConfig;
    return this;
  }

  /**
   * Устанавливает конфигурацию отступов.
   * @param spacingConfig Объект с определениями отступов.
   * @returns this для цепочки вызовов.
   */
  setSpacing(spacingConfig: SpacingConfig): this {
    this.config.theme.spacing = spacingConfig;
    return this;
  }

  /**
   * Устанавливает префикс для всех утилит Tailwind.
   * @param prefix Строка префикса.
   * @returns this для цепочки вызовов.
   */
  setPrefix(prefix: string): this {
    this.config.prefix = prefix;
    return this;
  }

  /**
   * Устанавливает важность для всех утилит Tailwind.
   * @param important Булево значение или строка селектора.
   * @returns this для цепочки вызовов.
   */
  setImportant(important: boolean | string): this {
    this.config.important = important;
    return this;
  }

  /**
   * Устанавливает режим темной темы.
   * @param darkMode Режим темной темы: 'media', 'class' или false.
   * @returns this для цепочки вызовов.
   */
  setDarkMode(darkMode: 'media' | 'class' | false): this {
    this.config.darkMode = darkMode;
    return this;
  }

  /**
   * Добавляет пользовательские утилиты в конфигурацию.
   * @param utilities Объект с определениями пользовательских утилит.
   * @returns this для цепочки вызовов.
   */
  addUtilities(utilities: Record<string, Record<string, string>>): this {
    if (!this.config.plugins) {
      this.config.plugins = [];
    }
    this.config.plugins.push(({ addUtilities }: { addUtilities: (utils: Record<string, Record<string, string>>) => void }) => {
      addUtilities(utilities);
    });
    return this;
  }
}