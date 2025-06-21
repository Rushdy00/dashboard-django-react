import React, { useState } from 'react';
import { Save, User, Bell, Shield, Palette } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      marketing: true
    },
    privacy: {
      profilePublic: false,
      showOnlineStatus: true,
      allowDataCollection: false
    },
    preferences: {
      language: 'en',
      timezone: 'UTC',
      dateFormat: 'MM/DD/YYYY'
    }
  });

  const handleSave = () => {
    // In a real app, this would save to backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user?.name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Email notifications</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: { ...settings.notifications, email: e.target.checked }
                  })}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Push notifications</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: { ...settings.notifications, push: e.target.checked }
                  })}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Marketing emails</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.marketing}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: { ...settings.notifications, marketing: e.target.checked }
                  })}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Public profile</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.profilePublic}
                  onChange={(e) => setSettings({
                    ...settings,
                    privacy: { ...settings.privacy, profilePublic: e.target.checked }
                  })}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Show online status</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.showOnlineStatus}
                  onChange={(e) => setSettings({
                    ...settings,
                    privacy: { ...settings.privacy, showOnlineStatus: e.target.checked }
                  })}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Data collection</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.allowDataCollection}
                  onChange={(e) => setSettings({
                    ...settings,
                    privacy: { ...settings.privacy, allowDataCollection: e.target.checked }
                  })}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Palette className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Appearance</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Dark mode</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Language
              </label>
              <select
                value={settings.preferences.language}
                onChange={(e) => setSettings({
                  ...settings,
                  preferences: { ...settings.preferences, language: e.target.value }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Timezone
              </label>
              <select
                value={settings.preferences.timezone}
                onChange={(e) => setSettings({
                  ...settings,
                  preferences: { ...settings.preferences, timezone: e.target.value }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="CST">Central Time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Date Format
              </label>
              <select
                value={settings.preferences.dateFormat}
                onChange={(e) => setSettings({
                  ...settings,
                  preferences: { ...settings.preferences, dateFormat: e.target.value }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="btn-primary flex items-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>


    </div>
  );
};

export default Settings; 