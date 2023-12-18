export type ThemeType = "dark" | "light";
export interface SettingConfig {
  theme?: ThemeType;
}

const defaultConfig: SettingConfig = {
  theme: "dark",
};

const localStorageConfigName = "config";

export const SaveConfig = (config: SettingConfig) => {
  localStorage.setItem(localStorageConfigName, JSON.stringify(config));
};

export const LoadConfig = () => {
  try {
    const config = localStorage.getItem(localStorageConfigName);
    return config ? JSON.parse(config) : defaultConfig;
  } catch (err: any) {
    return defaultConfig;
  }
};
