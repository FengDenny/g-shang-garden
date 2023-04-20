import React from "react";

type Props = {
  labelStyling?: string;
  tabs: {
    id: number;
    label?: string;
    Component: (props: { id: number }) => JSX.Element;
  }[];
  selectedTab: number;
  onClick: (id: number) => void;
};

const index = ({
  tabs = [],
  selectedTab = 1,
  labelStyling,
  onClick,
}: Props): JSX.Element => {
  const Panel = tabs && tabs.find((tab) => tab.id === selectedTab);

  return (
    <div className={`${labelStyling}`}>
      <div className="divide-color-description flex flex-col items-center divide-y divide-solid p-2 ">
        <div
          className=" flex divide-primary-green-100
        xs:flex-col xs:divide-y xsMin:divide-x sm:flex-row"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={`${
                selectedTab === tab.id
                  ? "font-bold text-primary-green-300"
                  : "dark:text-primary-100 text-primary-dark-300"
              }  p-3 text-lg transition  ease-in-out`}
              type="button"
              role="tab"
              tabIndex={selectedTab === tab.id ? 0 : -1}
              aria-selected={selectedTab === tab.id}
              aria-controls={`pane-${tab.id}`}
              onClick={() => onClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id={`pane-${selectedTab}`}
          role="tabpanel"
          aria-label={`tab-${selectedTab}`}
          className="mt-2"
        >
          {Panel?.Component && <Panel.Component id={selectedTab} />}
        </div>
      </div>
    </div>
  );
};

export default index;
