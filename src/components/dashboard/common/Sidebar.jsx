import React, { useState } from "react";

const Sidebar = (props) => {
  const { activePage, setActivePage } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`leftMenu ${expanded ? "expandWidth" : ""}`} id="leftMenu">
      <ul
        className="topSideMenu comnmenu"
        onClick={(e) => setActivePage(e.target.id)}
      >
        <li className={`${activePage === "home" ? "active" : ""}`} id="home">
          {/* eslint-disable-next-line */}
          <a href="#" title="Home" id="home">
            <span className="menu-icon" id="home">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="home"
              >
                <path
                  className="fillColor"
                  d="M8.25798 19.3052H4.97673C4.5347 19.3052 4.11077 19.1297 3.79821 18.8171C3.48565 18.5045 3.31006 18.0806 3.31006 17.6386V8.47191L10.8101 2.63858L18.3101 8.47191V17.6386C18.3101 18.0806 18.1345 18.5045 17.8219 18.8171C17.5093 19.1297 17.0854 19.3052 16.6434 19.3052H13.3101"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="fillNoColor"
                  d="M8.31006 19.3053V10.9719H13.3101V19.3053"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Home
          </a>
        </li>

        <li
          className={`${activePage === "monitoring" ? "active" : ""}`}
          id="monitoring"
        >
          {/* eslint-disable-next-line */}
          <a href="#" title="Health Monitoring" id="monitoring">
            <span className="menu-icon" id="monitoring">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="monitoring"
              >
                <path
                  d="M3.29199 12.2755H2.45866C2.01663 12.2755 1.59271 12.0999 1.28015 11.7873C0.967587 11.4748 0.791992 11.0509 0.791992 10.6088V2.27549C0.791992 1.83346 0.967587 1.40954 1.28015 1.09698C1.59271 0.78442 2.01663 0.608826 2.45866 0.608826H15.792C16.234 0.608826 16.6579 0.78442 16.9705 1.09698C17.2831 1.40954 17.4587 1.83346 17.4587 2.27549V10.6088C17.4587 11.0509 17.2831 11.4748 16.9705 11.7873C16.6579 12.0999 16.234 12.2755 15.792 12.2755H14.9587"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.12565 10.6088L13.2923 15.6088H4.95898L9.12565 10.6088Z"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.95768 8.72243C9.95768 9.18267 9.58459 9.55577 9.12435 9.55577C8.66411 9.55577 8.29102 9.18267 8.29102 8.72243C8.29102 8.26219 8.66411 7.8891 9.12435 7.8891C9.58459 7.8891 9.95768 8.26219 9.95768 8.72243Z"
                  fill="#8F8F8F"
                />
                <path
                  d="M4.17676 8.27683C4.17676 5.54409 6.39208 3.32877 9.12483 3.32877C11.8576 3.32877 14.0729 5.54409 14.0729 8.27683M7.0602 6.52788L9.2158 8.68348"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Health Monitoring
          </a>
        </li>

        <li
          className={`${activePage === "analytics" ? "active" : ""}`}
          id="analytics"
        >
          {/* eslint-disable-next-line */}
          <a href="#" title="Analytics" id="analytics">
            <span className="menu-icon" id="analytics">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="analytics"
              >
                <path
                  d="M16.6063 1.88425H3.64336C2.62061 1.88425 1.7915 2.71335 1.7915 3.7361V16.6991C1.7915 17.7218 2.62061 18.5509 3.64336 18.5509H16.6063C17.6291 18.5509 18.4582 17.7218 18.4582 16.6991V3.7361C18.4582 2.71335 17.6291 1.88425 16.6063 1.88425Z"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.479 16.0509H3.979V6.0509H6.479V16.0509Z"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.479 16.0509H8.979V9.38424H11.479V16.0509Z"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.479 16.0509H13.979V12.7176H16.479V16.0509Z"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Analytics
          </a>
        </li>

        <li
          className={`${activePage === "maintenace" ? "active" : ""}`}
          id="maintenace"
        >
          {/* eslint-disable-next-line */}
          <a href="#" title="Smart Maintenace" id="maintenace">
            <span className="menu-icon" id="maintenace">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="maintenace"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.37472 10.7453C6.77334 10.144 6.51731 9.326 6.60598 8.5346L7.91192 9.84053C7.98067 9.90928 8.07088 9.95257 8.16804 9.96342L9.28859 10.0887C9.42125 10.1035 9.55427 10.0566 9.6495 9.96132L10.0331 9.57776L10.438 9.17279C10.5297 9.08112 10.5768 8.95424 10.5667 8.82608L10.4759 7.67111C10.4679 7.56872 10.4239 7.47298 10.3517 7.40079L9.04379 6.09292C9.83655 6.00281 10.6564 6.25868 11.2589 6.86117C12.0311 7.6334 12.2339 8.76273 11.8686 9.73442C11.8558 9.76335 11.8463 9.79335 11.84 9.82385C11.8051 9.98593 11.8655 10.1513 11.991 10.2516L19.1072 17.3863C19.4351 17.7151 19.4309 18.2512 19.0978 18.5843C18.7647 18.9174 18.2285 18.9216 17.8998 18.5935L10.753 11.4629C10.6373 11.3308 10.4464 11.2785 10.2708 11.3463C9.29403 11.7235 8.15302 11.5236 7.37472 10.7453ZM10.3008 12.2533C9.07853 12.6163 7.70914 12.3227 6.75326 11.3668C5.72521 10.3387 5.46322 8.83238 5.96024 7.54515C5.99555 7.45369 6.05802 7.3804 6.13477 7.33115C6.30571 7.21171 6.54104 7.22671 6.69156 7.37724L8.42726 9.11294L9.18772 9.19792L9.42047 8.96517L9.68087 8.70478L9.61842 7.91048L7.88837 6.18043C7.73404 6.0261 7.72216 5.78263 7.85159 5.61081C7.90069 5.53882 7.97142 5.48039 8.05871 5.44668C9.34594 4.94966 10.8523 5.21165 11.8804 6.2397C12.8358 7.19511 13.1295 8.56362 12.7674 9.78544L19.7295 16.7656C20.395 17.4328 20.3864 18.5208 19.7104 19.1968C19.0343 19.8729 17.9462 19.8814 17.279 19.2157L10.3008 12.2533Z"
                  fill="#8F8F8F"
                />
                <path
                  d="M14.6251 7.64176C14.5309 7.54757 14.4676 7.42246 14.4976 7.26687C14.4958 7.01757 14.7437 6.83244 14.9621 6.86523C17.5193 7.13355 19.5286 9.14284 19.7969 11.7001C19.7988 11.9494 19.6446 12.1664 19.3953 12.1645C19.146 12.1627 18.9267 12.0052 18.9248 11.7559C18.7221 9.63542 17.0267 7.94008 14.9062 7.73734C14.782 7.79874 14.6879 7.70455 14.6251 7.64176Z"
                  fill="#8F8F8F"
                />
                <path
                  d="M14.5774 5.42893C14.4833 5.33475 14.42 5.20963 14.4191 5.08498C14.4172 4.83567 14.6342 4.68148 14.8835 4.68333C18.625 4.96046 21.6703 8.00579 21.9474 11.7472C21.9493 11.9965 21.7951 12.2135 21.5458 12.2117C21.2965 12.2098 21.0772 12.0524 21.0753 11.8031C20.8324 8.46698 18.1638 5.79839 14.8591 5.58684C14.7653 5.55498 14.6716 5.52312 14.5774 5.42893Z"
                  fill="#8F8F8F"
                />
                <path
                  d="M16.808 12.0518C16.7452 11.989 16.7134 11.8953 16.6815 11.8015C16.519 10.8967 15.7655 10.1432 14.8606 9.98063C14.6108 9.91645 14.4534 9.69715 14.4829 9.47924C14.5434 9.23039 14.7604 9.0762 14.9788 9.10899C16.2581 9.33663 17.2941 10.3727 17.5218 11.652C17.5859 11.9018 17.4318 12.1187 17.1515 12.1478C17.0273 12.2092 16.9022 12.146 16.808 12.0518Z"
                  fill="#8F8F8F"
                />
                <path
                  d="M12.0771 18.9195C12.1713 19.0136 12.2345 19.1388 12.2045 19.2943C12.2064 19.5437 11.9585 19.7288 11.7401 19.696C9.18284 19.4277 7.17355 17.4184 6.90523 14.8611C6.90338 14.6118 7.05757 14.3948 7.30688 14.3967C7.55618 14.3986 7.77548 14.556 7.77734 14.8053C7.98009 16.9258 9.67542 18.6211 11.7959 18.8239C11.9201 18.7625 12.0143 18.8567 12.0771 18.9195Z"
                  fill="#8F8F8F"
                />
                <path
                  d="M12.1247 21.1323C12.2189 21.2265 12.2821 21.3516 12.2831 21.4762C12.2849 21.7255 12.0679 21.8797 11.8186 21.8779C8.07719 21.6008 5.03186 18.5554 4.75473 14.814C4.75288 14.5647 4.90707 14.3477 5.15638 14.3495C5.40568 14.3514 5.62499 14.5088 5.62684 14.7581C5.86979 18.0942 8.53838 20.7628 11.8431 20.9744C11.9368 21.0062 12.0305 21.0381 12.1247 21.1323Z"
                  fill="#8F8F8F"
                />
                <path
                  d="M9.89413 14.5094C9.95692 14.5722 9.98877 14.6659 10.0206 14.7597C10.1832 15.6646 10.9367 16.418 11.8416 16.5806C12.0913 16.6448 12.2488 16.8641 12.2192 17.082C12.1588 17.3308 11.9418 17.485 11.7234 17.4522C10.4441 17.2246 9.40803 16.1885 9.18038 14.9092C9.1162 14.6595 9.2704 14.4425 9.55063 14.4134C9.67482 14.352 9.79994 14.4153 9.89413 14.5094Z"
                  fill="#8F8F8F"
                />
              </svg>
            </span>
            Smart Maintenace
          </a>
        </li>

        <li
          className={`${activePage === "alerts" ? "active" : ""}`}
          id="alerts"
        >
          {/* eslint-disable-next-line */}
          <a href="#" title="Alerts &amp; Notifications" id="alerts">
            <span className="menu-icon" id="alerts">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="alerts"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.60571 1.53326C7.71354 1.42827 7.8598 1.36928 8.0123 1.36928H8.2373C8.3898 1.36928 8.53605 1.42827 8.64388 1.53326C8.75172 1.63825 8.8123 1.78064 8.8123 1.92912V2.29424H8.65101C8.47411 2.28026 8.29608 2.27478 8.11733 2.27801C7.96925 2.27811 7.82243 2.28358 7.67709 2.29424H7.4373V1.92912C7.4373 1.78064 7.49788 1.63825 7.60571 1.53326ZM6.60396 2.47196V1.92912C6.60396 1.56546 6.75234 1.21669 7.01645 0.959538C7.28057 0.702388 7.63878 0.557922 8.0123 0.557922H8.2373C8.61081 0.557922 8.96902 0.702388 9.23314 0.959538C9.49725 1.21669 9.64563 1.56546 9.64563 1.92912V2.46504C10.5491 2.70597 11.3985 3.17341 12.1312 3.83731C12.6464 4.29253 13.0615 4.87267 13.3502 5.53112C13.6393 6.19048 13.7957 6.91455 13.8099 7.64972L13.8101 7.65734L13.81 12.1677L15.2797 14.712C15.3522 14.8377 15.3509 14.9913 15.2762 15.1157C15.2014 15.2401 15.0645 15.3166 14.9165 15.3166H10.7194C10.5862 15.8327 10.2993 16.2994 9.89025 16.6449C9.39735 17.0613 8.76563 17.2684 8.12483 17.2168C7.48403 17.2684 6.85231 17.0613 6.35941 16.6449C5.95038 16.2994 5.66348 15.8327 5.53024 15.3166H1.33317C1.18529 15.3166 1.0485 15.2403 0.973714 15.1161C0.89893 14.9919 0.897364 14.8384 0.9696 14.7127L2.43272 12.1682V7.65734C2.43272 5.17207 4.20791 3.09841 6.60396 2.47196ZM7.70889 3.1056C5.21339 3.3028 3.26605 5.27312 3.26605 7.65734V12.274C3.26605 12.3434 3.24777 12.4116 3.21295 12.4722L2.04395 14.5052H5.87073L5.87744 14.5052H10.3722L10.3789 14.5052H14.2041L13.0302 12.4728C12.9951 12.4121 12.9767 12.3436 12.9767 12.274V7.66124C12.964 7.02821 12.8289 6.40879 12.5838 5.84969C12.3381 5.28948 11.9898 4.80756 11.5695 4.43661L11.5653 4.43293C10.704 3.65187 9.6766 3.1969 8.61529 3.1056H7.70889ZM6.90555 16.0321C6.68224 15.8434 6.50871 15.5966 6.40152 15.3166H9.84814C9.74095 15.5966 9.56742 15.8434 9.34411 16.0321C9.00812 16.3159 8.58567 16.4469 8.1666 16.4058C8.13882 16.4031 8.11084 16.4031 8.08307 16.4058C7.66399 16.4469 7.24155 16.3159 6.90555 16.0321Z"
                  fill="#8F8F8F"
                />
              </svg>
            </span>
            Alerts &amp; Notifications
          </a>
        </li>

        <li
          className={`${activePage === "reports" ? "active" : ""}`}
          id="reports"
        >
          {/* eslint-disable-next-line */}
          <a href="#" title="Reports" id="reports">
            <span className="menu-icon" id="reports">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="reports"
              >
                <path
                  className="fillColor"
                  d="M11.7918 1.66659H5.12516C4.68314 1.66659 4.25921 1.84218 3.94665 2.15474C3.63409 2.4673 3.4585 2.89123 3.4585 3.33325V16.6666C3.4585 17.1086 3.63409 17.5325 3.94665 17.8451C4.25921 18.1577 4.68314 18.3333 5.12516 18.3333H15.1252C15.5672 18.3333 15.9911 18.1577 16.3037 17.8451C16.6162 17.5325 16.7918 17.1086 16.7918 16.6666V6.66659L11.7918 1.66659Z"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7915 1.66659V6.66659H16.7915"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.4582 10.8333H6.7915"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.4582 14.1666H6.7915"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.45817 7.49992H7.62484H6.7915"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Reports
          </a>
        </li>
      </ul>

      <ul
        className="bottomSideMenu comnmenu"
        onClick={(e) => setActivePage(e.target.id)}
      >
        <li
          className={`${activePage === "settings" ? "active" : ""}`}
          id="settings"
        >
          {/* eslint-disable-next-line */}
          <a href="#" title="Settings" id="settings">
            <span className="menu-icon" id="settings">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="settings"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M10.125 13.0762C11.5057 13.0762 12.625 11.9569 12.625 10.5762C12.625 9.19546 11.5057 8.07617 10.125 8.07617C8.74429 8.07617 7.625 9.19546 7.625 10.5762C7.625 11.9569 8.74429 13.0762 10.125 13.0762Z"
                    stroke="#8F8F8F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.2918 13.0762C16.1809 13.3275 16.1478 13.6063 16.1968 13.8767C16.2458 14.147 16.3747 14.3964 16.5668 14.5928L16.6168 14.6428C16.7718 14.7976 16.8947 14.9814 16.9786 15.1838C17.0625 15.3861 17.1056 15.603 17.1056 15.822C17.1056 16.041 17.0625 16.2579 16.9786 16.4602C16.8947 16.6626 16.7718 16.8464 16.6168 17.0012C16.462 17.1561 16.2782 17.2791 16.0759 17.3629C15.8736 17.4468 15.6567 17.49 15.4377 17.49C15.2186 17.49 15.0018 17.4468 14.7994 17.3629C14.5971 17.2791 14.4133 17.1561 14.2585 17.0012L14.2085 16.9512C14.0121 16.7591 13.7626 16.6302 13.4923 16.5812C13.222 16.5321 12.9432 16.5652 12.6918 16.6762C12.4454 16.7818 12.2351 16.9572 12.0871 17.1808C11.939 17.4044 11.8596 17.6663 11.8585 17.9345V18.0762C11.8585 18.5182 11.6829 18.9421 11.3703 19.2547C11.0578 19.5672 10.6339 19.7428 10.1918 19.7428C9.7498 19.7428 9.32588 19.5672 9.01332 19.2547C8.70076 18.9421 8.52516 18.5182 8.52516 18.0762V18.0012C8.51871 17.7253 8.42943 17.4578 8.26892 17.2334C8.10841 17.009 7.88411 16.8381 7.62516 16.7428C7.37382 16.6319 7.095 16.5988 6.82467 16.6478C6.55434 16.6968 6.30489 16.8257 6.1085 17.0178L6.0585 17.0678C5.90371 17.2228 5.71989 17.3457 5.51756 17.4296C5.31523 17.5135 5.09835 17.5566 4.87933 17.5566C4.6603 17.5566 4.44343 17.5135 4.2411 17.4296C4.03877 17.3457 3.85495 17.2228 3.70016 17.0678C3.5452 16.913 3.42227 16.7292 3.3384 16.5269C3.25452 16.3246 3.21135 16.1077 3.21135 15.8887C3.21135 15.6696 3.25452 15.4528 3.3384 15.2504C3.42227 15.0481 3.5452 14.8643 3.70016 14.7095L3.75016 14.6595C3.94228 14.4631 4.07115 14.2137 4.12017 13.9433C4.16918 13.673 4.13609 13.3942 4.02516 13.1428C3.91953 12.8964 3.74413 12.6862 3.52055 12.5381C3.29698 12.39 3.03498 12.3106 2.76683 12.3095H2.62516C2.18314 12.3095 1.75921 12.1339 1.44665 11.8213C1.13409 11.5088 0.958496 11.0849 0.958496 10.6428C0.958496 10.2008 1.13409 9.77688 1.44665 9.46432C1.75921 9.15176 2.18314 8.97617 2.62516 8.97617H2.70016C2.97599 8.96971 3.2435 8.88043 3.46791 8.71992C3.69232 8.55942 3.86326 8.33511 3.9585 8.07617C4.06943 7.82482 4.10252 7.54601 4.0535 7.27568C4.00448 7.00535 3.87561 6.7559 3.6835 6.5595L3.6335 6.5095C3.47854 6.35471 3.3556 6.1709 3.27173 5.96857C3.18786 5.76624 3.14468 5.54936 3.14468 5.33033C3.14468 5.11131 3.18786 4.89443 3.27173 4.6921C3.3556 4.48977 3.47854 4.30595 3.6335 4.15117C3.78828 3.99621 3.9721 3.87327 4.17443 3.7894C4.37676 3.70553 4.59364 3.66236 4.81266 3.66236C5.03169 3.66236 5.24857 3.70553 5.4509 3.7894C5.65323 3.87327 5.83704 3.99621 5.99183 4.15117L6.04183 4.20117C6.23823 4.39328 6.48768 4.52215 6.758 4.57117C7.02833 4.62019 7.30715 4.5871 7.5585 4.47617H7.62516C7.87164 4.37053 8.08184 4.19513 8.22991 3.97155C8.37797 3.74798 8.45743 3.48599 8.4585 3.21783V3.07617C8.4585 2.63414 8.63409 2.21022 8.94665 1.89766C9.25921 1.58509 9.68313 1.4095 10.1252 1.4095C10.5672 1.4095 10.9911 1.58509 11.3037 1.89766C11.6162 2.21022 11.7918 2.63414 11.7918 3.07617V3.15117C11.7929 3.41932 11.8724 3.68131 12.0204 3.90489C12.1685 4.12846 12.3787 4.30386 12.6252 4.4095C12.8765 4.52043 13.1553 4.55352 13.4257 4.5045C13.696 4.45549 13.9454 4.32661 14.1418 4.1345L14.1918 4.0845C14.3466 3.92954 14.5304 3.80661 14.7328 3.72273C14.9351 3.63886 15.152 3.59569 15.371 3.59569C15.59 3.59569 15.8069 3.63886 16.0092 3.72273C16.2116 3.80661 16.3954 3.92954 16.5502 4.0845C16.7051 4.23929 16.8281 4.4231 16.9119 4.62543C16.9958 4.82776 17.039 5.04464 17.039 5.26367C17.039 5.48269 16.9958 5.69957 16.9119 5.9019C16.8281 6.10423 16.7051 6.28804 16.5502 6.44283L16.5002 6.49283C16.308 6.68923 16.1792 6.93868 16.1302 7.20901C16.0811 7.47934 16.1142 7.75815 16.2252 8.0095V8.07617C16.3308 8.32264 16.5062 8.53285 16.7298 8.68091C16.9533 8.82897 17.2153 8.90843 17.4835 8.9095H17.6252C18.0672 8.9095 18.4911 9.08509 18.8037 9.39766C19.1162 9.71022 19.2918 10.1341 19.2918 10.5762C19.2918 11.0182 19.1162 11.4421 18.8037 11.7547C18.4911 12.0672 18.0672 12.2428 17.6252 12.2428H17.5502C17.282 12.2439 17.02 12.3234 16.7964 12.4714C16.5729 12.6195 16.3975 12.8297 16.2918 13.0762V13.0762Z"
                    stroke="#8F8F8F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.125 0.576172)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Settings
          </a>
        </li>
        <li className={`${activePage === "help" ? "active" : ""}`} id="help">
          {/* eslint-disable-next-line */}
          <a href="#" title="Help" id="help">
            <span className="menu-icon" id="help">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="help"
              >
                <path
                  d="M10.1248 18.5989C14.7272 18.5989 18.4582 14.868 18.4582 10.2656C18.4582 5.66324 14.7272 1.93228 10.1248 1.93228C5.52246 1.93228 1.7915 5.66324 1.7915 10.2656C1.7915 14.868 5.52246 18.5989 10.1248 18.5989Z"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.125 14.4323H10.1333"
                  stroke="#8F8F8F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.04481 6.87099C9.45201 6.63167 9.93077 6.54419 10.3963 6.62404C10.8618 6.70389 11.2841 6.94591 11.5882 7.30725C11.8924 7.66859 12.0589 8.12591 12.0582 8.59823L12.0582 8.59898C12.0582 9.16688 11.6256 9.66142 11.0308 10.058C10.7486 10.2461 10.4629 10.3893 10.2457 10.4858C10.1379 10.5338 10.0487 10.5694 9.9876 10.5927C9.96265 10.6022 9.94249 10.6096 9.92775 10.6149C9.71241 10.6706 9.55336 10.8662 9.55336 11.099V12.6354C9.55336 12.9116 9.77722 13.1354 10.0534 13.1354C10.3295 13.1354 10.5534 12.9116 10.5534 12.6354V11.4425C10.5846 11.4292 10.6175 11.4149 10.6519 11.3996C10.9035 11.2878 11.2427 11.1185 11.5855 10.89C12.2406 10.4533 13.058 9.69795 13.0582 8.59942L13.0582 8.59972L12.5583 8.59898H13.0582V8.59942C13.0592 7.89105 12.8094 7.20518 12.3533 6.66325C11.897 6.12125 11.2636 5.75821 10.5654 5.63843C9.86707 5.51866 9.14893 5.64988 8.53813 6.00885C7.92733 6.36783 7.46328 6.93139 7.22818 7.59972C7.13654 7.86022 7.27343 8.14567 7.53392 8.23731C7.79442 8.32895 8.07987 8.19206 8.17151 7.93156C8.32825 7.48601 8.63761 7.1103 9.04481 6.87099Z"
                  fill="#8F8F8F"
                />
              </svg>
            </span>
            Help
          </a>
        </li>
      </ul>
      <div
        className="menuhideshow pointer widthCls"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <i
          className={`fa fa-angle-${expanded ? "left" : "right"}`}
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Sidebar;
