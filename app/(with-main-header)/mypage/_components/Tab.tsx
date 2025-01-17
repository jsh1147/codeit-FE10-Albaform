'use client';

import { TabKey } from '@/types/mypage';
import { TAB_OPTIONS_APPLICANT, TAB_OPTIONS_OWNER } from '@/constants/dropdown';
import { useUserStore } from '@/store/user';

interface TabProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const Tab = ({ activeTab, onTabChange }: TabProps) => {
  const user = useUserStore((state) => state.user);

  const getTabOptions = () => {
    switch (user?.role) {
      case 'APPLICANT':
        return TAB_OPTIONS_APPLICANT;
      case 'OWNER':
        return TAB_OPTIONS_OWNER;
    }
  };

  const tabOptions = getTabOptions();

  return (
    <div className="w-full md:w-[315px] rounded-lg">
      <div className="w-full p-[6px] bg-background-200 rounded-lg">
        <div className="relative flex items-center justify-center">
          {tabOptions?.map(({ key, label }) => (
            <button
              key={key}
              className={`w-[315px] flex h-8 text-md text-center items-center justify-center transition-all duration-200 rounded-lg
                ${
                  activeTab === key
                    ? 'text-blue-600 bg-gray-50 shadow-sm font-semibold'
                    : 'text-gray-400 font-medium'
                }`}
              onClick={() => onTabChange(key)}
              aria-selected={activeTab === key}
              role="tab"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
