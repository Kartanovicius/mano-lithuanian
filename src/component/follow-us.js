import React from "react";

export default function FollowUs() {
  const iconSize = 45;
  //When creating links always use https:// in beginning
  const facebook = "https://www.facebook.com";

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={" bg-yellow text-center py-10"}>
      <div className={"container mx-auto grid gap-5"}>
        <h2 className={"text-4xl sm:text-5xl md:text-6xl sm:font-light"}>
          Follow us
        </h2>
        <h3 className={"text-xl"}>
          You can find lots of cool memes and information by following us on our
          social media
        </h3>
        <div className={"flex grid-col-3 justify-center gap-6"}>
          <button onClick={() => openInNewTab(facebook)}>
            <svg
              class="transition duration-500 ease-in-out fill-current text-black hover:text-blue-500"
              width={iconSize}
              height={iconSize}
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 41.2258 10.0563 52.6029 23.2031 54.6659V35.4492H16.2207V27.5H23.2031V21.4414C23.2031 14.5492 27.3088 10.7422 33.5903 10.7422C36.5981 10.7422 39.7461 11.2793 39.7461 11.2793V18.0469H36.2785C32.8625 18.0469 31.7969 20.1668 31.7969 22.3438V27.5H39.4238L38.2046 35.4492H31.7969V54.6659C44.9437 52.6029 55 41.2258 55 27.5Z" />
            </svg>
          </button>
          <button onClick={() => openInNewTab(facebook)}>
            <svg
              class="transition duration-500 ease-in-out fill-current text-black hover:text-yellow-500"
              width={iconSize}
              height={iconSize}
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M27.5 4.95215C34.8477 4.95215 35.7178 4.98437 38.6074 5.11328C41.293 5.23144 42.7432 5.68262 43.71 6.05859C44.9883 6.55273 45.9121 7.1543 46.8682 8.11035C47.835 9.07715 48.4258 9.99024 48.9199 11.2686C49.2959 12.2354 49.7471 13.6963 49.8652 16.3711C49.9941 19.2715 50.0264 20.1416 50.0264 27.4785C50.0264 34.8262 49.9941 35.6963 49.8652 38.5859C49.7471 41.2715 49.2959 42.7217 48.9199 43.6885C48.4258 44.9668 47.8242 45.8906 46.8682 46.8467C45.9014 47.8135 44.9883 48.4043 43.71 48.8984C42.7432 49.2744 41.2822 49.7256 38.6074 49.8438C35.707 49.9727 34.8369 50.0049 27.5 50.0049C20.1523 50.0049 19.2822 49.9727 16.3926 49.8438C13.707 49.7256 12.2568 49.2744 11.29 48.8984C10.0117 48.4043 9.08789 47.8027 8.13184 46.8467C7.16504 45.8799 6.57422 44.9668 6.08008 43.6885C5.7041 42.7217 5.25293 41.2607 5.13477 38.5859C5.00586 35.6856 4.97363 34.8154 4.97363 27.4785C4.97363 20.1309 5.00586 19.2607 5.13477 16.3711C5.25293 13.6855 5.7041 12.2354 6.08008 11.2686C6.57422 9.99024 7.17578 9.06641 8.13184 8.11035C9.09863 7.14356 10.0117 6.55273 11.29 6.05859C12.2568 5.68262 13.7178 5.23144 16.3926 5.11328C19.2822 4.98437 20.1523 4.95215 27.5 4.95215ZM27.5 0C20.0342 0 19.0996 0.0322266 16.167 0.161133C13.2451 0.290039 11.2363 0.762695 9.49609 1.43945C7.68066 2.14844 6.14453 3.08301 4.61914 4.61914C3.08301 6.14453 2.14844 7.68067 1.43945 9.48535C0.762695 11.2363 0.290039 13.2344 0.161133 16.1562C0.0322266 19.0996 0 20.0342 0 27.5C0 34.9658 0.0322266 35.9004 0.161133 38.833C0.290039 41.7549 0.762695 43.7637 1.43945 45.5039C2.14844 47.3193 3.08301 48.8555 4.61914 50.3809C6.14453 51.9062 7.68067 52.8516 9.48535 53.5498C11.2363 54.2266 13.2344 54.6992 16.1563 54.8281C19.0889 54.957 20.0234 54.9893 27.4893 54.9893C34.9551 54.9893 35.8897 54.957 38.8223 54.8281C41.7441 54.6992 43.7529 54.2266 45.4932 53.5498C47.2979 52.8516 48.834 51.9062 50.3594 50.3809C51.8848 48.8555 52.8301 47.3193 53.5283 45.5147C54.2051 43.7637 54.6777 41.7656 54.8066 38.8438C54.9356 35.9111 54.9678 34.9766 54.9678 27.5107C54.9678 20.0449 54.9356 19.1104 54.8066 16.1777C54.6777 13.2559 54.2051 11.2471 53.5283 9.50684C52.8516 7.68066 51.917 6.14453 50.3809 4.61914C48.8555 3.09375 47.3193 2.14844 45.5147 1.4502C43.7637 0.773438 41.7656 0.300781 38.8438 0.171875C35.9004 0.0322266 34.9658 0 27.5 0Z" />
              <path d="M27.5 13.374C19.7012 13.374 13.374 19.7012 13.374 27.5C13.374 35.2988 19.7012 41.626 27.5 41.626C35.2988 41.626 41.626 35.2988 41.626 27.5C41.626 19.7012 35.2988 13.374 27.5 13.374ZM27.5 36.6631C22.4404 36.6631 18.3369 32.5596 18.3369 27.5C18.3369 22.4404 22.4404 18.3369 27.5 18.3369C32.5596 18.3369 36.6631 22.4404 36.6631 27.5C36.6631 32.5596 32.5596 36.6631 27.5 36.6631Z" />
              <path d="M45.4824 12.8153C45.4824 14.6415 44 16.1132 42.1846 16.1132C40.3584 16.1132 38.8867 14.6307 38.8867 12.8153C38.8867 10.9891 40.3691 9.51746 42.1846 9.51746C44 9.51746 45.4824 10.9999 45.4824 12.8153Z" />
            </svg>
          </button>
          <button onClick={() => openInNewTab(facebook)}>
            <svg
              class="transition duration-500 ease-in-out fill-current text-black hover:text-blue-400"
              width={iconSize}
              height={iconSize}
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5ZM28.4855 20.3017C25.8107 21.4142 20.4649 23.7169 12.4481 27.2097C11.1463 27.7274 10.4643 28.2338 10.4023 28.729C10.2973 29.5659 11.3454 29.8955 12.7725 30.3442C12.9667 30.4053 13.1678 30.4685 13.374 30.5356C14.7781 30.992 16.6669 31.5259 17.6488 31.5472C18.5395 31.5664 19.5335 31.1992 20.6311 30.4456C28.1214 25.3894 31.988 22.8337 32.2307 22.7786C32.402 22.7398 32.6393 22.6909 32.8001 22.8338C32.9609 22.9767 32.9451 23.2474 32.928 23.32C32.8242 23.7626 28.7103 27.5873 26.5813 29.5666C25.9176 30.1836 25.4468 30.6213 25.3506 30.7212C25.135 30.9452 24.9153 31.157 24.7041 31.3605C23.3997 32.618 22.4215 33.561 24.7583 35.101C25.8813 35.841 26.7799 36.4529 27.6763 37.0634C28.6554 37.7302 29.6319 38.3952 30.8954 39.2234C31.2173 39.4344 31.5247 39.6536 31.8241 39.867C32.9635 40.6793 33.9871 41.4091 35.2518 41.2927C35.9866 41.2251 36.7456 40.5341 37.1311 38.4733C38.0422 33.603 39.8329 23.0506 40.2468 18.7022C40.283 18.3213 40.2374 17.8337 40.2008 17.6196C40.1641 17.4056 40.0876 17.1007 39.8094 16.8749C39.4799 16.6076 38.9712 16.5512 38.7438 16.5552C37.7094 16.5734 36.1225 17.1252 28.4855 20.3017Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
