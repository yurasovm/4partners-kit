/// <reference types="react" />
import * as React from 'react';
import React__default, { FC } from 'react';

type ColorConfig = Record<string, string | Record<string, string>>;
type BorderRadiusConfig = Record<string, string>;
type FontFamilyConfig = Record<string, string[]>;
type ScreensConfig = Record<string, string>;
type SpacingConfig = Record<string, string>;
type ExtendConfig = Partial<TailwindThemeConfig>;
type PluginFunction = (api: any) => void;
type BoxShadowConfig = Record<string, string>;
interface TailwindThemeConfig {
    colors?: ColorConfig;
    borderRadius?: BorderRadiusConfig;
    fontFamily?: FontFamilyConfig;
    screens?: ScreensConfig;
    spacing?: SpacingConfig;
    extend?: ExtendConfig;
    boxShadow?: BoxShadowConfig;
}
interface TailwindConfig {
    content: string[];
    theme: TailwindThemeConfig;
    variants: Record<string, any>;
    plugins: PluginFunction[];
    prefix?: string;
    important?: boolean | string;
    darkMode?: 'media' | 'class' | false;
}

type IconType = '4partners' | 'a-bottom' | 'add1' | 'add-goods' | 'africa-nigeria-ng' | 'ai' | 'aksessuary' | 'a-left' | 'alert' | 'america-united-states-us' | 'a-right' | 'asia-armenia-am' | 'asia-china-cn' | 'asia-georgia-ge' | 'asia-india-in' | 'asia-kazakhstan-kz' | 'asia-kyrgyzstan-kg' | 'asia-turkey-tr' | 'asia-uaeae' | 'asia-vietnam-vn' | 'a-top' | 'back' | 'banner1' | 'banner2' | 'bottom' | 'briefcase' | 'cart' | 'catalog' | 'chat' | 'checkbox' | 'close' | 'comment-sale' | 'copy' | 'cursor' | 'customs-fee' | 'customs-fee2' | 'customs-fee-included' | 'customs-fee-included2' | 'dark-mode' | 'date' | 'delete' | 'detskaya-komnata' | 'detskie-knigi-i-posobiya' | 'detskij-sport' | 'detskoe-pitanie-i-kormlenie' | 'detyam' | 'dom' | 'double-horizontal' | 'double-vertical' | 'down' | 'edit' | 'edit-pen' | 'ekipirovka-i-zashity-moto' | 'error-circle' | 'europe-albania-al' | 'europe-all' | 'europe-andorra-ad' | 'europe-austria-at' | 'europe-belarus-by' | 'europe-belgium-be' | 'europe-bosnia-and-herzegovina-ba' | 'europe-bulgraia-bg' | 'europe-croatia-hr' | 'europe-czech-republic-cz' | 'europe-denmark-dk' | 'europe-estonia-ee' | 'europe-finland-fi' | 'europe-france-fr' | 'europe-germany-de' | 'europe-greece-gr' | 'europe-holy-see-va' | 'europe-hungary-hu' | 'europe-iceland-is' | 'europe-ireland-ie' | 'europe-italy-it' | 'europe-latvia-lv' | 'europe-liechtenstein-li' | 'europe-lithuania-lt' | 'europe-malta-mt' | 'europe-moldova-md' | 'europe-monaco-mc' | 'europe-montenegro-me' | 'europe-netherlands-nl' | 'europe-north-macedonia-mk' | 'europe-norway-no' | 'europe-poland-pl' | 'europe-portugal-pt' | 'europe-romania-ro' | 'europe-russia-ru' | 'europe-san-marino-sm' | 'europe-serbia-rs' | 'europe-slovakia-sk' | 'europe-slovenia-si' | 'europe-spain-es' | 'europe-sweden-se' | 'europe-switzerland-ch' | 'europe-ukraine-ua' | 'europe-united-kingdom-uk' | 'favourites' | 'filters' | 'folder' | 'folder-epmty' | 'forward' | 'gift' | 'go-over' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'hard' | 'hobbi-i-tvorchestvo' | 'how-pass' | 'igrushki-i-igry' | 'indeterminacy' | 'info-circle' | 'label' | 'left' | 'light-mode' | 'login' | 'menu' | 'minus' | 'mobilnye-telefony-i-smart-chasy' | 'more' | 'more2' | 'muzhskaya-obuv' | 'muzykalnye-instrumenty-i-oborudovanie' | 'notification' | 'package-cost' | 'package-search' | 'page' | 'passport' | 'passport-error' | 'passport-success' | 'pause' | 'payment' | 'phone' | 'photo' | 'picture' | 'play' | 'plus' | 'podguzniki-i-gigiena' | 'premium' | 'question-circle' | 'quote' | 'radio' | 'random' | 'rating' | 'receipt' | 'right' | 'rukodelie' | 'russian-post' | 'search-menu' | 'share' | 'social-tg' | 'social-wp' | 'sorting-arrow' | 'success' | 'success-circle' | 'sumki-i-chemodany' | 'table' | 'text' | 'top' | 'tovary-dlya-kollekcionerov' | 'tovary-dlya-mam' | 'tovary-dlya-shkoly' | 'up' | 'user' | 'video-circle' | 'view-card' | 'view-list' | 'view-table' | 'warning-circle' | 'zapchasti-i-instrumenty' | 'zapchasti-i-instrumenty-moto' | 'zhenskaya-obuv';

type SizeType = '200' | '300' | '400' | '500' | '600';
type VariantType = 'primary' | 'ghost' | 'addition' | 'secondary' | 'tertiary' | 'contrast';
interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    size?: SizeType;
    variant?: VariantType;
    iconStart?: IconType;
    iconEnd?: IconType;
    className?: string;
}

declare const Button: FC<ButtonProps>;

interface IconProps {
    name: string;
    size: number;
    className?: string;
}
declare const _default$1: ({ name, size, className }: IconProps) => React.JSX.Element;

declare function makeButton(props: any): string;

/**
 * Класс для построения конфигурации Tailwind CSS.
 * Позволяет пошагово создавать и настраивать конфигурацию с помощью цепочки методов.
 */
declare class TailwindConfigBuilder {
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

declare const _default: (customizer: (builder: TailwindConfigBuilder) => void) => TailwindConfig;

export { BorderRadiusConfig, BoxShadowConfig, Button, ButtonProps, ColorConfig, ExtendConfig, FontFamilyConfig, _default$1 as Icon, IconType, PluginFunction, ScreensConfig, SizeType, SpacingConfig, TailwindConfig, TailwindThemeConfig, VariantType, _default as createTailwindConfig, makeButton };
