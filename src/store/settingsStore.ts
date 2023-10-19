import { create } from "zustand";

interface SettingsState {
  theme: string;
  language: string;
  authentication: boolean;
  mobilePushNotifications: boolean;
  desktopNotifications: boolean;
  emailNotifications: boolean;
}

export interface SettingsStore extends SettingsState {
  setTheme: (newTheme: string) => void;
  setLanguage: (newLanguage: string) => void;
  setAuthentication: (isAuthentication: boolean) => void;
  setMobilePushNotifications: (isMobilePushNotifications: boolean) => void;
  setDesktopNotifications: (isDesktopNotifications: boolean) => void;
  setEmailNotifications: (isEmailNotifications: boolean) => void;
}

const useSettingsStore = create<SettingsStore>((set) => ({
  theme: "light",
  language: "english",
  authentication: false,
  mobilePushNotifications: false,
  desktopNotifications: false,
  emailNotifications: false,

  setTheme: (newTheme: string) => set({ theme: newTheme }),
  setLanguage: (newLanguage: string) => set({ language: newLanguage }),
  setAuthentication: (isAuthentication: boolean) =>
    set({ authentication: isAuthentication }),
  setMobilePushNotifications: (isMobilePushNotifications: boolean) =>
    set({ mobilePushNotifications: isMobilePushNotifications }),
  setDesktopNotifications: (isDesktopNotifications: boolean) =>
    set({ desktopNotifications: isDesktopNotifications }),
  setEmailNotifications: (isEmailNotifications: boolean) =>
    set({ emailNotifications: isEmailNotifications }),
}));

export default useSettingsStore;
