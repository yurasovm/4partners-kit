export type ColorConfig = Record<string, string | Record<string, string>>;
export type BorderRadiusConfig = Record<string, string>;
export type FontFamilyConfig = Record<string, string[]>;
export type ScreensConfig = Record<string, string>;
export type SpacingConfig = Record<string, string>;
export type ExtendConfig = Partial<TailwindThemeConfig>;
export type PluginFunction = (api: any) => void;
export type BoxShadowConfig = Record<string, string>;

export interface TailwindThemeConfig {
  colors?: ColorConfig;
  borderRadius?: BorderRadiusConfig;
  fontFamily?: FontFamilyConfig;
  screens?: ScreensConfig;
  spacing?: SpacingConfig;
  extend?: ExtendConfig;
  boxShadow?: BoxShadowConfig;
}

export interface TailwindConfig {
  content: string[];
  theme: TailwindThemeConfig;
  variants: Record<string, any>;
  plugins: PluginFunction[];
  prefix?: string;
  important?: boolean | string;
  darkMode?: 'media' | 'class' | false;
}