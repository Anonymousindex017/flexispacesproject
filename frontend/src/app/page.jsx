import React from 'react'
import Navbar from './(main)/navbar'

const Home = () => {
  return (
    <>
  {/* Hero */}
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    {/* Grid */}
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div className="lg:col-span-3">
        <h3 className='block font-bold dark:text-white'>Flexispaces</h3>
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          We build a high - energy workspace
        </h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
          Flexibilities are key to our  approach. Our team of experts will design and customize your space according to your needs, so
          Flexispaces is an innovative.
        </p>
        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <a
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Enquire Now
          </a>
        </div>
        {/* Brands */}
        <div className="mt-6 lg:mt-12">
          <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
            Trusted by:
          </span>
          <div className="mt-4 flex gap-x-8">
            <svg
              className="w-20 h-auto"
              width={106}
              height={36}
              viewBox="0 0 106 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494249 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z"
                  fill="currentColor"
                  className="fill-gray-800 dark:fill-gray-200"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="105.474"
                    height={35}
                    fill="currentColor"
                    className="fill-gray-800 dark:fill-gray-200"
                    transform="translate(0 0.26355)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              className="w-20 h-auto"
              width={140}
              height={47}
              viewBox="0 0 140 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
            </svg>
            <svg
              className="w-20 h-auto"
              width={200}
              height={67}
              viewBox="0 0 200 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.6108 11.7537C45.9082 11.7537 47.1058 11.3545 48.0041 10.5561C48.9023 9.75767 49.4013 8.65988 49.4013 7.46227C49.4013 6.16487 48.9023 5.16686 48.0041 4.26866C47.1058 3.47026 46.008 3.07104 44.6108 3.07104C43.3134 3.07104 42.2156 3.47026 41.3174 4.36846C40.4192 5.26666 40.02 6.26467 40.02 7.46227C40.02 8.65988 40.4192 9.65787 41.3174 10.5561C42.2156 11.3545 43.3134 11.7537 44.6108 11.7537Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M73.3534 0.176758V20.6358H73.1538C72.8544 20.1368 72.3554 19.6378 71.8564 19.1388C71.2576 18.6398 70.559 18.1408 69.7606 17.7416C68.9622 17.3424 68.064 16.9432 66.9662 16.6438C65.8684 16.3444 64.6708 16.2446 63.3734 16.2446C61.2776 16.2446 59.3814 16.6438 57.6847 17.4422C55.9881 18.2406 54.4911 19.3384 53.1937 20.7356C51.9961 22.1328 50.9981 23.7297 50.2995 25.6259C49.6009 27.5221 49.3015 29.5181 49.3015 31.6139C49.3015 33.7097 49.6009 35.8055 50.2995 37.6019C50.8983 39.4981 51.8963 41.0949 53.1937 42.4921C54.4911 43.8893 55.9881 44.9871 57.6847 45.7855C59.4812 46.5839 61.4772 46.9831 63.7726 46.9831C65.8684 46.9831 67.7646 46.5839 69.561 45.7855C71.3574 44.9871 72.7546 43.6897 73.8524 41.8933H73.9522V46.0849H80.8384V0.176758H73.3534ZM73.054 34.8075C72.6548 35.9053 72.056 36.8035 71.3574 37.6019C70.559 38.4003 69.6608 39.0989 68.6628 39.4981C67.565 39.9971 66.3674 40.1967 65.07 40.1967C63.7726 40.1967 62.575 39.9971 61.4772 39.4981C60.3794 38.9991 59.4812 38.4003 58.7826 37.6019C57.9841 36.8035 57.4851 35.9053 57.0859 34.8075C56.6867 33.7097 56.4871 32.7117 56.4871 31.5141C56.4871 30.4163 56.6867 29.3185 57.0859 28.2207C57.4851 27.1229 58.0839 26.2247 58.7826 25.4263C59.581 24.6279 60.4792 23.9293 61.4772 23.5301C62.575 23.031 63.7726 22.8314 65.07 22.8314C66.3674 22.8314 67.565 23.031 68.6628 23.5301C69.7606 24.0291 70.6588 24.6279 71.3574 25.4263C72.1558 26.2247 72.6548 27.1229 73.054 28.2207C73.4532 29.3185 73.6528 30.4163 73.6528 31.5141C73.6528 32.6119 73.4532 33.7097 73.054 34.8075Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M130.739 19.9373L123.553 27.1229V40.3963H123.353C122.954 39.8973 122.555 39.3983 121.956 38.8993C121.357 38.4003 120.659 37.9013 119.86 37.5021C119.062 37.1029 118.164 36.7037 117.066 36.4043C116.367 36.2047 115.469 36.1049 114.571 36.0051L99.501 51.2746C99.501 53.3704 99.8004 55.3664 100.499 57.2626C101.098 59.1588 102.096 60.7556 103.393 62.1528C104.691 63.55 106.188 64.6478 107.884 65.3464C109.681 66.1448 111.677 66.544 113.872 66.544C115.968 66.544 117.864 66.1448 119.661 65.3464C121.457 64.548 122.854 63.2506 123.852 61.4542H123.952V65.8454H130.838V19.9373H130.739ZM123.253 54.4682C122.854 55.566 122.255 56.4642 121.557 57.2626C120.858 58.061 119.86 58.7596 118.862 59.1588C117.764 59.6578 116.667 59.8574 115.269 59.8574C113.972 59.8574 112.774 59.6578 111.677 59.1588C110.579 58.6598 109.681 58.061 108.982 57.2626C108.283 56.4642 107.685 55.566 107.285 54.4682C106.886 53.3704 106.687 52.3724 106.687 51.1748C106.687 50.077 106.886 48.9792 107.285 47.8814C107.685 46.7836 108.283 45.8854 108.982 45.087C109.681 44.2886 110.579 43.5899 111.677 43.1907C112.774 42.6917 113.872 42.4921 115.269 42.4921C116.567 42.4921 117.764 42.6917 118.862 43.1907C119.96 43.6897 120.858 44.2886 121.557 45.087C122.255 45.8854 122.854 46.7836 123.253 47.8814C123.653 48.9792 123.852 50.077 123.852 51.1748C123.852 52.3724 123.653 53.4702 123.253 54.4682Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M162.275 44.9872C161.477 43.091 160.279 41.4941 158.882 40.1967C157.485 38.8993 155.788 37.8015 153.892 37.1029C151.996 36.4043 149.9 36.0051 147.704 36.0051C145.509 36.0051 143.513 36.4043 141.517 37.1029C139.621 37.8015 137.924 38.8993 136.527 40.1967C135.13 41.4941 134.032 43.091 133.134 44.9872C132.335 46.8834 131.936 48.9792 131.936 51.2746C131.936 53.57 132.335 55.6658 133.134 57.562C133.932 59.4582 135.13 61.055 136.527 62.3524C137.924 63.6498 139.621 64.7476 141.517 65.4462C143.413 66.1448 145.509 66.544 147.704 66.544C149.9 66.544 151.896 66.1448 153.892 65.4462C155.788 64.7476 157.485 63.6498 158.882 62.3524C160.279 61.055 161.377 59.4582 162.275 57.562C163.074 55.6658 163.473 53.57 163.473 51.2746C163.573 48.9792 163.174 46.8834 162.275 44.9872ZM155.689 54.4682C155.289 55.566 154.691 56.4642 153.992 57.2626C153.293 58.061 152.395 58.7596 151.297 59.1588C150.2 59.6578 149.102 59.8574 147.704 59.8574C146.407 59.8574 145.209 59.6578 144.112 59.1588C143.014 58.6598 142.116 58.061 141.417 57.2626C140.718 56.4642 140.12 55.566 139.72 54.4682C139.321 53.3704 139.122 52.3724 139.122 51.1748C139.122 50.077 139.321 48.9792 139.72 47.8814C140.12 46.7836 140.619 45.8854 141.417 45.087C142.116 44.2886 143.014 43.59 144.112 43.1908C145.209 42.6918 146.307 42.4922 147.704 42.4922C149.002 42.4922 150.2 42.6918 151.297 43.1908C152.395 43.6898 153.293 44.2886 153.992 45.087C154.691 45.8854 155.289 46.7836 155.689 47.8814C156.088 48.9792 156.287 50.077 156.287 51.1748C156.287 52.3724 156.088 53.4702 155.689 54.4682Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M186.128 52.6718C185.329 51.574 184.431 50.6758 183.234 50.077C182.036 49.4782 180.838 48.9792 179.441 48.6798C178.144 48.3804 176.946 48.081 175.649 47.7816C174.451 47.4822 173.553 47.1828 172.755 46.7836C171.956 46.3844 171.557 45.6858 171.557 44.8874C171.557 43.7896 172.056 42.9912 172.954 42.4922C173.852 41.9932 174.85 41.7936 175.848 41.7936C178.244 41.7936 180.14 42.7916 181.537 44.7876L186.427 40.3963C185.23 38.7995 183.733 37.6019 181.836 37.0031C179.94 36.3045 178.044 36.0051 176.048 36.0051C174.551 36.0051 173.154 36.2047 171.757 36.5041C170.359 36.9033 169.062 37.4023 167.964 38.2007C166.866 38.9991 165.968 39.9971 165.369 41.0949C164.671 42.2926 164.371 43.6898 164.371 45.2866C164.371 47.1828 164.771 48.58 165.569 49.6778C166.367 50.7756 167.266 51.574 168.463 52.1728C169.661 52.7716 170.858 53.1708 172.256 53.4702C173.653 53.7696 174.85 53.9692 176.048 54.3684C177.246 54.6678 178.144 55.067 178.942 55.566C179.741 56.065 180.14 56.7636 180.14 57.7616C180.14 58.3604 179.94 58.8594 179.641 59.2586C179.341 59.6578 178.942 60.057 178.443 60.3564C177.944 60.6558 177.445 60.8554 176.846 60.9552C176.248 61.055 175.749 61.1548 175.25 61.1548C173.753 61.1548 172.455 60.8554 171.357 60.1568C170.26 59.4582 169.262 58.6598 168.363 57.562L163.473 62.1528C164.97 63.8494 166.667 65.047 168.563 65.6458C170.459 66.2446 172.555 66.6438 174.85 66.6438C176.248 66.6438 177.645 66.544 179.142 66.2446L187.425 57.9612C187.425 57.7616 187.425 57.562 187.425 57.3624C187.325 55.2666 186.926 53.7696 186.128 52.6718Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M33.8322 17.3425L26.0478 37.5022H25.948L18.2634 17.3425L12.6746 22.9313L22.1556 46.085H29.8402L40.9181 18.1409V46.085H48.2035V17.3425H33.8322Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
              <path
                d="M108.483 34.4084V29.4183C108.483 28.7197 108.483 27.9213 108.383 27.0231C108.383 26.1249 108.184 25.1269 107.984 24.2287C107.785 23.2307 107.385 22.3325 106.886 21.3345C106.387 20.4363 105.689 19.5381 104.691 18.8395C103.793 18.1409 102.595 17.5421 101.198 17.0431C99.8005 16.5441 98.0041 16.3445 96.0081 16.3445C93.7127 16.3445 91.5171 16.7437 89.3215 17.4423C87.1258 18.1409 85.2296 19.3385 83.6328 21.0351L87.4252 24.8275C88.4233 23.9293 89.5211 23.1309 90.9183 22.6319C92.2157 22.1329 93.7127 21.8335 95.2097 21.8335C97.1059 21.8335 98.7027 22.3325 100 23.2307C101.298 24.1289 101.896 25.5261 101.896 27.3225V28.1209H100.1C98.9023 28.1209 97.6049 28.1209 96.2077 28.2207C94.8105 28.3205 93.5131 28.4203 92.1159 28.6199C90.7187 28.8195 89.4213 29.2187 88.2237 29.6179C86.9262 30.0171 85.8284 30.6159 84.9302 31.4143C83.9322 32.1129 83.2336 33.1109 82.6348 34.2087C82.036 35.3066 81.8364 36.7038 81.8364 38.2008C81.8364 39.6978 82.1358 40.8954 82.7346 41.9932C83.3334 43.091 84.1318 43.9892 85.1298 44.6878C86.1278 45.3864 87.2256 45.9852 88.523 46.2846C89.8205 46.6838 91.1179 46.7836 92.4153 46.7836C94.0121 46.7836 95.4093 46.584 96.8065 46.085L108.483 34.4084ZM101.497 34.7078C101.497 36.8036 100.898 38.4004 99.7007 39.598C98.5031 40.7956 96.7067 41.3944 94.1119 41.3944C93.5131 41.3944 92.9143 41.2946 92.3155 41.1948C91.7167 41.095 91.1179 40.7956 90.7187 40.4962C90.2197 40.1968 89.8205 39.7976 89.5211 39.2986C89.2217 38.7996 89.0221 38.3006 89.0221 37.602C89.0221 36.5042 89.4213 35.7058 90.2197 35.107C91.0181 34.5082 91.9163 34.109 93.0141 33.8096C94.1119 33.5101 95.3095 33.3105 96.5071 33.2107C97.8045 33.1109 98.9023 33.1109 99.9003 33.1109H101.397V34.7078H101.497Z"
                fill="currentColor"
                className="fill-gray-800 dark:fill-gray-200"
              />
            </svg>
          </div>
        </div>
        {/* End Brands */}
      </div>
      {/* End Col */}
      <div className="lg:col-span-4 mt-10 lg:mt-0">
        <img
          className="w-full rounded-xl"
          src="https://mg.co.za/wp-content/uploads/2019/02/000182db-flexihours-flexispace.jpeg"
          alt="Image Description"
        />
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Hero */}

{/* start card section */}

{/* <div className="card flex-row" style={{ width: "18rem" }}> 

<div className="card" style={{ width: "18rem" }}>
  <img src="" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> Training Office </h5>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src="https://oliocoworking.com/wp-content/uploads/2021/07/Coworking-Office-Icon.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Interview office </h5>
  </div>
</div>


<div className="card" style={{ width: "18rem" }}>
  <img src="https://as1.ftcdn.net/v2/jpg/01/11/60/14/1000_F_111601407_Y6BTSXUtRLY4vvEoA1D49W9oWLh5RDmq.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> Meeting Office </h5>
  </div>
</div>


<div className="card" style={{ width: "18rem" }}>
  <img src="https://media.istockphoto.com/id/928445544/vector/hotel-icons.jpg?s=612x612&w=0&k=20&c=BwnK3r2SDX2x1TK6y7AJNVYI_4-QD4aO18rQ5eWfirc=" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> Day Pass </h5>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src="https://cdn5.vectorstock.com/i/1000x1000/70/64/meeting-room-icon-vector-37987064.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Conference Office </h5>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src="https://images.venuebookingz.com/15988-1675252349-wm-bhagini-mahadevpura-banquet-hall-3.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Events Hall </h5>
  </div>
</div>
</div> */}
 

 <div class="grid grid-cols-4 gap-4">
 <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="https://cdn.dribbble.com/users/44253/screenshots/19002794/media/5d7df2dfc85600ffde9cf8410e90b601.png?resize=400x300&vertical=center" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>



<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>



<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>



<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>




  <div>09</div>
</div>


  <div
  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src="https://content3.jdmagicbox.com/comp/trichy/x4/0431px431.x431.200729124518.h8x4/catalogue/flexispace-thillai-nagar-trichy-business-centres-rh5cykv3dg.jpg"
    alt=""
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
  </div>
</div>


<>
  {/* Clients */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
      <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
        Trusted by Open Source, enterprise, and more than 99,000 of you
      </h2>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200"
          enableBackground="new 0 0 2499 614"
          viewBox="0 0 2499 614"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          fill="none"
          viewBox="-0.3 0 320.3999999999999 99.9"
          xmlns="http://www.w3.org/2000/svg"
          width={2500}
          height={779}
        >
          <path
            d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z"
            fill="#ff5a5f"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003"
          xmlns="http://www.w3.org/2000/svg"
          width={2500}
          height={610}
        >
          <path
            d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836"
            fill="#0B65C2"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 127 33"
        >
          <path
            d="M9.3 16.5C9.3 9 14.3 2.7 21.2.7a16.5 16.5 0 1 0 0 31.6c-6.9-2-11.9-8.3-11.9-15.8Z"
            fill="#1F4EF5"
          />
          <path
            d="M21.7 10c4 0 7.4 2.8 8.5 6.4a8.9 8.9 0 1 0-17 0c1-3.6 4.4-6.3 8.5-6.3Z"
            fill="#1F4EF5"
          />
          <path
            d="M24.8 19.4c0 3-2 5.5-4.8 6.3A6.6 6.6 0 1 0 20 13c2.8.8 4.8 3.4 4.8 6.4Z"
            fill="#1F4EF5"
          />
          <path
            d="M39.6 13.5A4.4 4.4 0 0 1 44 9.1h1.3v2.7l-1 .2-1 .6-.2.4-.1.5h2.3v3H43v9.2h-3.4v-9.3h-1.3v-2.9h1.3ZM55.7 13.5h3.4v6.1a6.9 6.9 0 0 1-1.7 4.6 6 6 0 0 1-4.5 1.8c-1 0-1.8-.1-2.5-.5a6 6 0 0 1-3.2-3.4c-.3-.8-.4-1.6-.4-2.5v-6H50v6c0 .5 0 1 .2 1.3l.5 1c.2.4.5.6.9.8.3.2.8.3 1.2.3a2.6 2.6 0 0 0 2.1-1c.3-.3.4-.7.5-1l.2-1.4v-6ZM61.2 25.7V9.5h3.4v16.2h-3.4ZM66.9 25.7V9.5h3.3v16.2H67ZM78.5 21.2l3.3-7.7h3.7l-5.7 12.2h-2.7l-5.6-12.2H75l3.4 7.7ZM87 13.5h3.3v12.2H87V13.5Zm1.6-5 .8.1.6.4.4.7.2.7a1.9 1.9 0 0 1-.6 1.4l-.6.4a2 2 0 0 1-.8.1c-.5 0-1-.2-1.3-.5a2 2 0 0 1-.4-2.1c0-.3.2-.5.4-.7l.6-.4.7-.1ZM98.8 13.2a6.7 6.7 0 0 1 4.8 1.9 6.3 6.3 0 0 1 1.9 5.7h-9.8a3.3 3.3 0 0 0 3.2 2.2c.5 0 1-.1 1.4-.4.5-.2.9-.5 1.2-1h3.7c-.2.7-.5 1.3-1 1.8a6.1 6.1 0 0 1-3.3 2.3 7 7 0 0 1-6.9-1.6 6.1 6.1 0 0 1-2-4.5 6.1 6.1 0 0 1 2-4.5c.7-.6 1.4-1 2.2-1.4.8-.3 1.7-.5 2.6-.5Zm3.2 5.2c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.3-.7-2-.7s-1.4.3-2 .7c-.5.4-.9.9-1.1 1.5h6.3ZM123 13.5h3.6l-5 12.2H119l-2.5-6.5-2.5 6.5h-2.7l-5-12.2h3.6l2.7 7 2.8-7h2.2l2.8 7 2.7-7Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          x={0}
          y={0}
          viewBox="0 0 88 22"
          xmlSpace="preserve"
          enableBackground="new 0 0 88 22"
        >
          <path
            d="M36.3 14.6a7.3 7.3 0 0 1-5.6 2.8c-3.8 0-6.8-2.7-6.8-6.2a6 6 0 0 1 2-4.5A6 6 0 0 1 30.5 5c2.2 0 4.3 1 5.6 2.8l-2.5 1.8a3.7 3.7 0 0 0-3.1-1.8 3.5 3.5 0 0 0-3.5 3.5c.1 2 1.7 3.5 3.6 3.5 1.3 0 2.5-.6 3.2-1.7l2.5 1.5z"
            fill="#5A5A5A"
          />
          <path d="M37.7 0H40.8V17.1H37.7z" fill="#5A5A5A" />
          <path
            d="M49.1 14.7c2 0 3.7-1.6 3.8-3.6-.1-2-1.8-3.6-3.8-3.6s-3.7 1.6-3.8 3.6c.1 2 1.7 3.6 3.8 3.6m0-9.8c1.7-.1 3.4.5 4.7 1.7 1.3 1.2 2 2.8 2.1 4.5a6.4 6.4 0 0 1-2.1 4.5 6.4 6.4 0 0 1-4.7 1.7c-3.8 0-6.8-2.7-6.8-6.2s3-6.2 6.8-6.2"
            fill="#5A5A5A"
          />
          <path
            d="M55.3 5.1 59 5.1 62 11.5 65.2 5.1 68.6 5.1 62 17.8z"
            fill="#5A5A5A"
          />
          <path
            d="M77.5 9.4a3 3 0 0 0-2.9-1.9c-1.3 0-2.5.7-3.1 1.9h6zm2 6.3a7 7 0 0 1-4.6 1.6c-3.8 0-6.8-2.7-6.8-6.2 0-1.7.7-3.3 1.9-4.5a6 6 0 0 1 4.6-1.7c1.7-.1 3.3.6 4.5 1.8s1.8 2.8 1.7 4.5v.8h-9.6a3.9 3.9 0 0 0 6.5 1.5l1.8 2.2zm2.8-5.3c0-2.9 2.2-5.2 5.7-5.2V8c-.7 0-1.5.3-2 .8s-.7 1.3-.6 2v6.3h-3.1v-6.7z"
            fill="#5A5A5A"
          />
          <path
            d="M9.7 5.6a5 5 0 0 0-8.3-3.5C0 3.5-.4 5.6.3 7.4s2.5 3 4.5 3h4.9V5.6zm1.4 0a5 5 0 0 1 8.3-3.5c1.4 1.4 1.8 3.5 1.1 5.3s-2.5 3-4.5 3h-4.9V5.6zm0 11a5 5 0 0 0 8.3 3.5c1.4-1.4 1.8-3.5 1.1-5.3s-2.5-3-4.5-3h-4.9v4.8zm-6.3 3.5c1.9 0 3.5-1.5 3.5-3.5v-3.5H4.8c-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5zm4.9-3.5a5 5 0 0 1-8.3 3.5C0 18.7-.4 16.6.3 14.8s2.5-3 4.5-3h4.9v4.8z"
            fill="#280"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          width={2500}
          height={728}
          viewBox="0 0 512 149"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M.06 27.679h17.852v39.662h37.651V27.679h17.875v97.358H55.563V84.542H17.912v40.495H.06V27.679zM129.993 93.326c0 8.15-6.64 14.782-14.788 14.782-8.151 0-14.787-6.632-14.787-14.782V51.41h-16.93v41.916c0 17.487 14.229 31.711 31.717 31.711 17.484 0 31.712-14.224 31.712-31.711V51.41h-16.924v41.916M194.179 51.901c-8.398 0-14.26 2.437-19.921 7.994V27.679h-16.985v59.705c0 22.348 16.158 37.653 34.311 37.653 20.181 0 37.863-15.578 37.863-36.567 0-20.723-16.305-36.569-35.268-36.569zm.422 57.423c-11.509 0-20.31-9.612-20.31-20.854 0-11.244 8.801-20.859 20.31-20.859 9.752 0 18.558 9.615 18.558 20.859 0 11.242-8.806 20.854-18.558 20.854zM257.974 56.18c0-8.538 5.689-11.245 11.917-11.245 5.014 0 11.649 3.792 15.979 8.398l11.103-13.001c-5.549-7.448-16.788-12.596-25.998-12.596-18.421 0-31.694 10.7-31.694 28.444 0 32.91 40.497 22.478 40.497 40.902 0 5.682-5.551 10.698-11.913 10.698-10.026 0-13.278-4.876-17.881-10.024l-12.327 12.729c7.86 9.617 17.608 14.495 29.257 14.495 17.47 0 31.556-10.835 31.556-27.767 0-36.566-40.496-25.188-40.496-41.033M343.184 50.947c-18.151 0-34.311 15.296-34.311 37.649v59.859h16.984v-32.369c5.662 5.553 11.521 7.994 19.922 7.994 18.962 0 35.269-15.844 35.269-36.567 0-20.992-17.687-36.566-37.864-36.566zm3.018 57.425c-11.508 0-20.31-9.625-20.31-20.859 0-11.244 8.802-20.859 20.31-20.859 9.75 0 18.557 9.615 18.557 20.859 0 11.234-8.807 20.859-18.557 20.859zM506.069 109.324c-10.018 0-12.862-4.332-12.862-10.971V68.965h15.572V54.069h-15.572v-19.64l-17.195 7.718v59.863c0 15.306 10.56 23.027 25.045 23.027 2.167 0 5.15-.14 6.777-.541l4.199-15.438c-1.896.131-4.062.266-5.964.266"
            fill="#45535E"
          />
          <path
            d="M461.278 69.831c-3.256-5.602-7.836-10.093-13.562-13.474-4.279-2.491-8.716-4.072-13.716-4.751v-17.8c5-2.123 8.103-6.822 8.103-12.304 0-7.472-5.992-13.527-13.458-13.527-7.472 0-13.569 6.055-13.569 13.527 0 5.482 2.924 10.181 7.924 12.304v17.808c-4 .578-8.148 1.825-11.936 3.741-7.737-5.876-33.107-25.153-47.948-36.412.352-1.269.623-2.577.623-3.957 0-8.276-6.702-14.984-14.981-14.984S333.78 6.71 333.78 14.986c0 8.275 6.706 14.985 14.985 14.985 2.824 0 5.436-.826 7.69-2.184l3.132 2.376 43.036 31.008c-2.275 2.089-4.394 4.465-6.089 7.131C393.099 73.737 391 79.717 391 86.24v1.361c0 4.579.87 8.902 2.352 12.963 1.305 3.546 3.213 6.77 5.576 9.685l-14.283 14.318a11.501 11.501 0 0 0-12.166 2.668 11.499 11.499 0 0 0-3.388 8.19c.001 3.093 1.206 6 3.394 8.187a11.5 11.5 0 0 0 8.188 3.394 11.51 11.51 0 0 0 8.191-3.394 11.514 11.514 0 0 0 3.39-8.187c0-1.197-.185-2.365-.533-3.475l14.763-14.765c2.024 1.398 4.21 2.575 6.56 3.59 4.635 2.004 9.751 3.225 15.35 3.225h1.026c6.19 0 12.029-1.454 17.518-4.428 5.784-3.143 10.311-7.441 13.731-12.928 3.438-5.502 5.331-11.581 5.331-18.269v-.334c0-6.579-1.523-12.649-4.722-18.21zm-18.038 30.973c-4.007 4.453-8.613 7.196-13.82 7.196h-.858c-2.974 0-5.883-.822-8.731-2.317-3.21-1.646-5.65-3.994-7.647-6.967-2.064-2.918-3.184-6.104-3.184-9.482v-1.026c0-3.321.637-6.47 2.243-9.444 1.717-3.251 4.036-5.779 7.12-7.789 3.028-1.996 6.262-2.975 9.864-2.975h.335c3.266 0 6.358.644 9.276 2.137 2.973 1.592 5.402 3.767 7.285 6.628 1.829 2.862 2.917 5.949 3.267 9.312.055.699.083 1.415.083 2.099 0 4.564-1.744 8.791-5.233 12.628z"
            fill="#F8761F"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={2500}
          height={534}
          viewBox="0 0 1033.746 220.695"
        >
          <path
            d="M1033.746 99.838v-18.18h-22.576V53.395l-.76.234-21.205 6.488-.418.127v21.415h-33.469v-11.93c0-5.555 1.242-9.806 3.69-12.641 2.431-2.801 5.908-4.225 10.343-4.225 3.188 0 6.489.751 9.811 2.232l.833.372V36.321l-.392-.144c-3.099-1.114-7.314-1.675-12.539-1.675-6.585 0-12.568 1.433-17.786 4.273-5.221 2.844-9.328 6.904-12.205 12.066-2.867 5.156-4.322 11.111-4.322 17.701v13.116h-15.72v18.18h15.72v76.589h22.567V99.838h33.469v48.671c0 20.045 9.455 30.203 28.102 30.203 3.064 0 6.289-.359 9.582-1.062 3.352-.722 5.635-1.443 6.979-2.213l.297-.176v-18.348l-.918.607c-1.225.816-2.75 1.483-4.538 1.979-1.796.505-3.296.758-4.458.758-4.368 0-7.6-1.177-9.605-3.5-2.028-2.344-3.057-6.443-3.057-12.177V99.838h22.575zM866.635 160.26c-8.191 0-14.649-2.716-19.2-8.066-4.579-5.377-6.899-13.043-6.899-22.783 0-10.049 2.32-17.914 6.901-23.386 4.554-5.436 10.95-8.195 19.014-8.195 7.825 0 14.054 2.635 18.516 7.836 4.484 5.228 6.76 13.03 6.76 23.196 0 10.291-2.14 18.196-6.36 23.484-4.191 5.248-10.493 7.914-18.732 7.914m1.003-80.885c-15.627 0-28.039 4.579-36.889 13.61-8.844 9.032-13.328 21.531-13.328 37.153 0 14.838 4.377 26.773 13.011 35.468 8.634 8.698 20.384 13.104 34.921 13.104 15.148 0 27.313-4.643 36.159-13.799 8.845-9.146 13.326-21.527 13.326-36.784 0-15.07-4.205-27.094-12.502-35.731-8.301-8.641-19.977-13.021-34.698-13.021m-86.602 0c-10.63 0-19.423 2.719-26.14 8.08-6.758 5.393-10.186 12.466-10.186 21.025 0 4.449.74 8.401 2.196 11.753 1.465 3.363 3.732 6.324 6.744 8.809 2.989 2.465 7.603 5.047 13.717 7.674 5.14 2.115 8.973 3.904 11.408 5.314 2.38 1.382 4.069 2.771 5.023 4.124.927 1.324 1.397 3.136 1.397 5.372 0 6.367-4.768 9.465-14.579 9.465-3.639 0-7.79-.76-12.337-2.258a46.347 46.347 0 0 1-12.634-6.406l-.937-.672v21.727l.344.16c3.193 1.474 7.219 2.717 11.964 3.695 4.736.979 9.039 1.477 12.777 1.477 11.535 0 20.824-2.732 27.602-8.125 6.821-5.43 10.278-12.67 10.278-21.525 0-6.388-1.861-11.866-5.529-16.284-3.643-4.382-9.966-8.405-18.785-11.961-7.026-2.82-11.527-5.161-13.384-6.958-1.79-1.736-2.699-4.191-2.699-7.3 0-2.756 1.122-4.964 3.425-6.752 2.321-1.797 5.552-2.711 9.604-2.711 3.76 0 7.607.594 11.433 1.758 3.823 1.164 7.181 2.723 9.984 4.63l.922.63v-20.61l-.354-.152c-2.586-1.109-5.996-2.058-10.138-2.828-4.123-.765-7.863-1.151-11.116-1.151m-95.157 80.885c-8.189 0-14.649-2.716-19.199-8.066-4.58-5.377-6.896-13.041-6.896-22.783 0-10.049 2.319-17.914 6.901-23.386 4.55-5.436 10.945-8.195 19.013-8.195 7.822 0 14.051 2.635 18.514 7.836 4.485 5.228 6.76 13.03 6.76 23.196 0 10.291-2.141 18.196-6.361 23.484-4.191 5.248-10.49 7.914-18.732 7.914m1.006-80.885c-15.631 0-28.044 4.579-36.889 13.61-8.844 9.032-13.331 21.531-13.331 37.153 0 14.844 4.38 26.773 13.014 35.468 8.634 8.698 20.383 13.104 34.92 13.104 15.146 0 27.314-4.643 36.16-13.799 8.843-9.146 13.326-21.527 13.326-36.784 0-15.07-4.206-27.094-12.505-35.731-8.303-8.641-19.977-13.021-34.695-13.021M602.409 98.07V81.658h-22.292v94.767h22.292v-48.477c0-8.243 1.869-15.015 5.557-20.13 3.641-5.054 8.493-7.615 14.417-7.615 2.008 0 4.262.331 6.703.986 2.416.651 4.166 1.358 5.198 2.102l.937.679V81.496l-.361-.155c-2.076-.882-5.013-1.327-8.729-1.327-5.602 0-10.615 1.8-14.909 5.344-3.769 3.115-6.493 7.386-8.576 12.712h-.237zm-62.213-18.695c-10.227 0-19.349 2.193-27.108 6.516-7.775 4.333-13.788 10.519-17.879 18.385-4.073 7.847-6.141 17.013-6.141 27.235 0 8.954 2.005 17.171 5.968 24.413 3.965 7.254 9.577 12.929 16.681 16.865 7.094 3.931 15.293 5.924 24.371 5.924 10.594 0 19.639-2.118 26.891-6.295l.293-.168v-20.423l-.937.684c-3.285 2.393-6.956 4.303-10.906 5.679-3.94 1.375-7.532 2.07-10.682 2.07-8.747 0-15.769-2.737-20.866-8.133-5.108-5.403-7.698-12.99-7.698-22.537 0-9.607 2.701-17.389 8.024-23.131 5.307-5.725 12.342-8.629 20.908-8.629 7.327 0 14.467 2.481 21.222 7.381l.935.679V84.371l-.302-.17c-2.542-1.423-6.009-2.598-10.313-3.489-4.286-.889-8.478-1.337-12.461-1.337m-66.481 2.284h-22.292v94.766h22.292V81.659zm-10.918-40.371c-3.669 0-6.869 1.249-9.498 3.724-2.64 2.482-3.979 5.607-3.979 9.295 0 3.63 1.323 6.698 3.938 9.114 2.598 2.409 5.808 3.63 9.54 3.63 3.731 0 6.953-1.221 9.582-3.626 2.646-2.42 3.988-5.487 3.988-9.118 0-3.559-1.306-6.652-3.879-9.195-2.571-2.538-5.833-3.824-9.692-3.824m-55.62 33.379v101.758h22.75V44.189H398.44l-40.022 98.221-38.839-98.221H286.81v132.235h21.379V74.657h.734l41.013 101.768h16.134l40.373-101.758h.734z"
            fill="#706d6e"
          />
          <path d="M104.868 104.868H0V0h104.868v104.868z" fill="#f1511b" />
          <path
            d="M220.654 104.868H115.788V0h104.866v104.868z"
            fill="#80cc28"
          />
          <path
            d="M104.865 220.695H0V115.828h104.865v104.867z"
            fill="#00adef"
          />
          <path
            d="M220.654 220.695H115.788V115.828h104.866v104.867z"
            fill="#fbbc09"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
          width={2500}
          height={607}
        >
          <path
            d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={2500}
          height={1036}
          viewBox="0 -6.166 294.398 121.975"
        >
          <path d="M12.139 90.511c-3.939 0-7.799-.479-10.938-1.292l.487-8.277c3.053 1.123 7.313 2.012 11.254 2.012 5.952 0 10.775-2.492 10.775-8.359C23.718 63.172 0 68.002 0 50.466c0-9.325 7.315-15.834 19.941-15.834 3.214 0 6.51.397 9.809.959l-.485 7.802c-3.132-.963-6.591-1.527-9.806-1.527-6.754 0-10.211 3.134-10.211 7.638 0 10.855 23.72 6.839 23.72 23.798-.005 9.973-7.882 17.209-20.829 17.209M54.106 90.264c-2.249 0-3.938-.076-6.03-.479v17.397h-8.601V49.746h8.12c0 2.094-.082 5.309-.484 7.476h.162c2.25-5.068 6.833-8.283 12.944-8.283 9.487 0 14.712 6.75 14.712 18.814.001 14.076-7.473 22.511-20.823 22.511m3.861-34.246c-6.434 0-9.892 7.558-9.892 14.384v12.312c1.852.562 3.86.804 6.272.804 6.833 0 11.497-4.182 11.497-14.958.001-8.039-2.49-12.542-7.877-12.542zM102.519 57.381C94.561 55.936 90.7 61.485 90.7 73.466v16.238h-8.606V49.746H90.3c0 2.246-.246 5.791-.809 8.844h.162c1.771-5.388 5.79-10.377 13.271-9.651l-.405 8.442M114.803 43.797c-3.056 0-5.55-2.414-5.55-5.393 0-2.971 2.494-5.385 5.55-5.385 2.974 0 5.467 2.333 5.467 5.385 0 2.979-2.493 5.393-5.467 5.393m4.26 45.907h-8.6V49.746h8.6v39.958zM154.449 89.704V63.975c0-4.982-1.374-7.875-5.951-7.875-6.03 0-10.457 6.345-10.457 14.302v19.303h-8.603V49.746h8.203c0 2.094-.162 5.546-.563 7.796l.082.075c2.33-5.141 7.157-8.68 13.91-8.68 9.084 0 11.9 5.711 11.9 12.787v27.979h-8.521M186.675 90.425c-8.524 0-11.1-3.294-11.1-12.214V56.417h-7.634v-6.671h7.634V37.04l8.523-2.333v15.039h10.532v6.671h-10.448v19.137c0 5.954 1.205 7.558 5.224 7.558 1.769 0 3.699-.24 5.226-.643v7.076c-2.331.486-5.307.88-7.957.88" />
          <path
            d="M233.712 78.636c11.72-15.086 20.938-32.809 20.938-45.537 0-6.652-4.765-11.295-10.978-14.823.123 13.831-4.668 46.263-9.96 60.36M195.279 115.809c27.47-9.188 67.29-30.598 94.985-49.725 2.324-1.6 4.135-3.085 4.135-5.685 0-4.519-8.275-10.576-12.292-12.987-21.792 22.653-65.163 56.596-86.828 68.397"
            fill="#ffdd05"
          />
          <path
            d="M220.76 96.567c16.938-11.709 41.545-33.739 49.873-45.727 1.963-2.82 3.416-4.454 3.416-7.405 0-4.839-5.644-8.382-9.703-10.849-9.727 22.924-31.579 51.469-43.586 63.981M236.192 64.087c2.191-14.477.903-31.952-1.894-42.913-1.521-5.969-6.901-12.706-11.88-14.812 6.526 18.522 12.128 44.898 13.774 57.725"
            fill="#ffdd05"
          />
          <path
            d="M231.367 43.779C226.235 29.91 213.446.998 194.633-6.165c12.247 13.516 30.417 40.337 36.734 49.944"
            fill="#ffdd05"
          />
        </svg>
      </div>
      <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
        <svg
          className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2500 816"
        >
          <g clipPath="url(#a)">
            <path
              d="M307.9 0H330a303.4 303.4 0 0 1 207.7 87.7c-20.2 20.6-40.7 40.3-60.5 60.9-30.6-27.7-67.5-49.1-107.8-56.7A227.9 227.9 0 0 0 196 124.7a227.3 227.3 0 0 0-99.4 160.6 233.5 233.5 0 0 0 50.7 180.4 224.5 224.5 0 0 0 163.6 80.5c58.7 3.4 120-14.7 162.8-55.8 33.5-29 49-73 54-115.7-69.5 0-139.2.4-208.8 0v-86.5H612c15.1 92.7-6.7 197.2-77.2 263.5-47 47-112 74.6-178.3 80A327.4 327.4 0 0 1 169 595 322.8 322.8 0 0 1 19.3 424a309.3 309.3 0 0 1-2.1-209.3 319.4 319.4 0 0 1 115.4-153A329.3 329.3 0 0 1 307.9 0Z"
              fill="#3780FF"
            />
            <path
              d="M1990 21.9h89.7v599c-29.8 0-60 .4-89.8-.4.4-199.3 0-399 0-598.6Z"
              fill="#38B137"
            />
            <path
              d="M811.7 229.5a210.8 210.8 0 0 1 161 34.4 197 197 0 0 1 79.3 125.9c11.3 58.3-3 122-40.7 168.2A205 205 0 0 1 839 633a204.1 204.1 0 0 1-152.7-81.8c-39.8-53.6-49.5-127.5-27.6-190.4 21.8-67.5 83.4-119.1 153-131.3Zm12.5 79.7a112.8 112.8 0 0 0-58.7 37.3c-40.7 48.7-38.2 128 6.7 173.3a111.7 111.7 0 0 0 177.9-26.4c27.7-50 19.7-118.7-22.7-157.8a113.2 113.2 0 0 0-103.2-26.4Z"
              fill="#FA3913"
            />
            <path
              d="M1256.3 229.5c63.3-12.1 132.5 5.5 180 50 77.1 69.1 85.5 198.8 19.7 278.5a204.7 204.7 0 0 1-168.3 75 202.6 202.6 0 0 1-156.8-81.8c-40.7-54.9-49.5-130.4-26.5-194.6a199.2 199.2 0 0 1 151.9-127Zm12.6 79.7a114.7 114.7 0 0 0-58.8 37c-40.2 47.7-38.5 125.8 4.7 171.5a112.2 112.2 0 0 0 102.3 33.1 115 115 0 0 0 78-57.4c27.3-50.4 19.3-119.2-23.5-158.2a112.4 112.4 0 0 0-102.7-26Z"
              fill="#FCBD06"
            />
            <path
              d="M1633.4 253.8c48.2-30.2 112.4-38.5 164.4-12.5 16.4 7 29.8 19.3 42.8 31.4.4-11.3 0-23 .4-34.8 28.1.4 56.2 0 84.8.4v370c-.5 55.8-14.7 115-55 155.6-44 44.9-111.6 58.7-172.4 49.5-65-9.6-121.6-57-146.8-117 25.2-12.2 51.6-21.8 77.6-33.2 14.7 34.4 44.5 63.8 81.8 70.5 37.3 6.7 80.5-2.5 104.9-33.5 26-32 26-75.5 24.7-114.6-19.3 19-41.5 35.7-68.4 42-58.3 16.3-122.5-3.8-167.3-43.2a205.5 205.5 0 0 1-69.7-160.7 207.4 207.4 0 0 1 98.2-169.9Zm86.8 53.7a110.4 110.4 0 0 0-65.8 38.2c-39.5 47-39.5 122 .4 168.2a109.8 109.8 0 0 0 94.4 38.6 106.6 106.6 0 0 0 80-53.3c27.8-49 23.1-115.7-14.2-158.5-23-26.4-60-39.5-94.8-33.2Z"
              fill="#3780FF"
            />
            <path
              d="M2187.5 275.2c50.3-47 128-62.9 192.5-38.1 61.3 23 100.3 81.3 120 141.3-91 37.8-181.6 75.1-272.7 112.9 12.6 23.9 32 45.7 58 54.5 36.4 13 80 8.4 110.7-16a178.1 178.1 0 0 0 31-33c23 15.4 46.2 30.5 69.2 46a202 202 0 0 1-146.8 89c-65.4 8-135-17.2-177.4-68.4-69.7-80.5-63-215.6 15.5-288.2Zm44.9 77.6a119.8 119.8 0 0 0-19.7 70.5 33573 33573 0 0 0 182.4-76c-10-23.4-34.4-37.7-59.1-41.4-39.9-7.2-81.4 14.2-103.6 47Z"
              fill="#FA3913"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0H2500V816H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    {/* End Grid */}
  </div>
  {/* End Clients */}
</>
  



</>



  )
}

export default Home;