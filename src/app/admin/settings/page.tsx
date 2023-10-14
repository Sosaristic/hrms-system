"use client";
import React, { useEffect } from "react";
import { ToggleSwitch } from "@/components";
import useSettingsStore from "@/store/settingsStore";

export default function Page() {
  const {
    theme,
    language,
    authentication,
    mobilePushNotifications,
    desktopNotifications,
    emailNotifications,
    setTheme,
    setLanguage,
    setAuthentication,
    setMobilePushNotifications,
    setDesktopNotifications,
    setEmailNotifications,
  } = useSettingsStore();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setTheme(value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setLanguage(value);
  };

  return (
    <div className="mb- m-12 h-40">
      <div className="mb-10 grid grid-cols-2">
        <p className="text-dark">Appearance</p>
        <div className="justify-self-end">
          <select
            name="theme"
            value={theme}
            id="1"
            onChange={handleThemeChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <p className="text-gray">
          Customize how your theme looks on your device
        </p>
      </div>

      <div className="mb-10 grid grid-cols-2">
        <p>Language</p>
        <div className="justify-self-end">
          <select
            name="language"
            id="2"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="english">English</option>
            <option value="hausa">Hausa</option>
            <option value="igbo">Igbo</option>
            <option value="yoruba">Yoruba</option>
          </select>
        </div>

        <p className="text-gray">Select your language</p>
      </div>

      <div className="mb-10 grid grid-cols-2">
        <p>Two-factor Authentication</p>
        <div className="justify-self-end">
          <ToggleSwitch
            isChecked={authentication}
            updateToggleState={setAuthentication}
          />
        </div>
        <p className="text-gray">
          Keep your account secure by enabling 2FA via mail
        </p>
      </div>

      <div className="mb-10 grid grid-cols-2">
        <p>Mobile Push Notifications</p>
        <div className="justify-self-end">
          <ToggleSwitch
            isChecked={mobilePushNotifications}
            updateToggleState={setMobilePushNotifications}
          />
        </div>
        <p className="text-gray">Receive push notification</p>
      </div>

      <div className="mb-10 grid grid-cols-2">
        <p>Desktop Notification</p>
        <div className="justify-self-end">
          <ToggleSwitch
            isChecked={desktopNotifications}
            updateToggleState={setDesktopNotifications}
          />
        </div>
        <p className="text-gray">Receive push notification in desktop</p>
      </div>

      <div className="mb-10 grid grid-cols-2">
        <p>Email Notifications</p>
        <div className="justify-self-end">
          <ToggleSwitch
            isChecked={emailNotifications}
            updateToggleState={setEmailNotifications}
          />
        </div>
        <p className="text-gray">Receive email notification</p>
      </div>
    </div>
  );
}
