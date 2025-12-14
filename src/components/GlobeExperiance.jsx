import "./GlobeExperiance.css"
import { useEffect, useRef, useState } from "react";

const GlobeExperiance = () => {
  const titleRef = useRef(null);
  const [animateMonth, setAnimateMonth] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateMonth(true);
          observer.disconnect(); 
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -20% 0px", 
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="globe-exp-wrapper">
        <div className="globe-header-container" ref={titleRef}>
          <h2 className="industries-title">
            2 Years <span className="month-wrapper">
              <span className={`month-track ${animateMonth ? "animate" : ""}`}>
                <span className="month prev">09</span>
                <span className="month curr">10</span>
              </span>
            </span> Months
          </h2>
          <p>AND GROWING</p>
        </div>
        <div className="globe-wrapper">
          <div className="relative-wrap">
            <div className="circle globe-1"></div>
            <div className="circle globe-2"></div>
            <div className="circle globe-3"></div>
            <div className="circle globe-4"></div>
            <div className="circle globe-5"></div>
            <div className="circle globe-6"></div>
            <div className="circle globe-7"></div>
          </div>
        </div>
        <div className="globe-wrapper">
          <div className="relative-wrap">
            <div className="stage-1">
              <h4>Started as an intern with <br />big curiosity</h4>
              <p>Feb 2023</p>
            </div>
            <div className="stage-2">
              <h4>Grew into a junior  <br />solving real problems</h4>
              <p>Jan 2024</p>
            </div>
            <div className="stage-3">
              <h4>Evolved into a mid-level <br />shaping products</h4>
              <p>April 2025</p>
            </div>
            <div className="stage-4">
              <h4>Next chapter? <br />Maybe with you.</h4>
              <p>Future Starts Here</p>
            </div>
          </div>
        </div>
        <svg className="desktop" width="842" height="255" viewBox="0 0 842 255" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M841 27.3277C683.5 19.837 0.5 46.5003 0.5 134C0.5 221.5 476 104.5 706.5 244" stroke="#2C7E00"/>
          <g filter="url(#filter0_d_821_4452)">
          <circle cx="210.5" cy="61" r="16" fill="#24321C"/>
          </g>
          <circle cx="210.5" cy="61" r="10" fill="#3D5231"/>
          <circle cx="210.5" cy="61" r="5" fill="#5EEA13"/>
          <g filter="url(#filter1_d_821_4452)">
          <circle cx="156.5" cy="172" r="16" fill="#24321C"/>
          </g>
          <circle cx="156.5" cy="172" r="10" fill="#3D5231"/>
          <circle cx="156.5" cy="172" r="5" fill="#5EEA13"/>
          <g filter="url(#filter2_d_821_4452)">
          <circle cx="731.5" cy="26" r="16" fill="#24321C"/>
          </g>
          <circle cx="731.5" cy="26" r="10" fill="#3D5231"/>
          <circle cx="731.5" cy="26" r="5" fill="#5EEA13"/>
          <g filter="url(#filter3_d_821_4452)">
          <path d="M685.755 231.863C685.531 232.369 685.165 232.799 684.701 233.101C684.243 233.411 683.704 233.578 683.151 233.582L667.434 234.097C666.994 234.118 666.555 234.035 666.152 233.855C665.982 233.78 665.823 233.687 665.674 233.577C665.157 233.22 664.772 232.702 664.578 232.104C664.382 231.505 664.385 230.859 664.587 230.262C664.79 229.665 665.18 229.15 665.7 228.795L670.787 225.826C670.937 225.685 671.056 225.515 671.14 225.327C671.232 225.124 671.274 224.903 671.263 224.681L670.187 219.277C670.109 218.644 670.244 218.003 670.571 217.455C670.881 216.928 671.35 216.512 671.911 216.268C672.472 216.024 673.096 215.964 673.693 216.097C674.292 216.234 674.834 216.552 675.247 217.008L685.326 228.793C685.677 229.213 685.904 229.724 685.98 230.266C686.056 230.809 685.978 231.362 685.755 231.863Z" fill="#5EEA13"/>
          </g>
          <defs>
          <filter id="filter0_d_821_4452" x="184.5" y="35" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_821_4452"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_821_4452" result="shape"/>
          </filter>
          <filter id="filter1_d_821_4452" x="130.5" y="146" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_821_4452"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_821_4452" result="shape"/>
          </filter>
          <filter id="filter2_d_821_4452" x="705.5" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_821_4452"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_821_4452" result="shape"/>
          </filter>
          <filter id="filter3_d_821_4452" x="644.433" y="196.028" width="61.575" height="58.0728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_821_4452"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_821_4452" result="shape"/>
          </filter>
          </defs>
        </svg>
        <svg className="mobile" width="349" height="449" viewBox="0 0 349 449" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M347.978 66.2871C262 58.5076 148.5 58.2871 150.5 132.007C152.152 192.9 263.001 165.008 266.5 241.008C270 317.008 23.5 235.007 23.5004 307.507C23.5008 380.008 171 306.507 141.5 421.007" stroke="#5EEA13"/>
          <g filter="url(#filter0_d_822_4453)">
          <circle cx="295" cy="66.0076" r="13" fill="#24321C"/>
          </g>
          <circle cx="295" cy="66.0076" r="8.125" fill="#3D5231"/>
          <circle cx="295" cy="66.0076" r="4.0625" fill="#5EEA13"/>
          <g filter="url(#filter1_d_822_4453)">
          <circle cx="262" cy="220.008" r="13" fill="#24321C"/>
          </g>
          <circle cx="262" cy="220.008" r="8.125" fill="#3D5231"/>
          <circle cx="262" cy="220.008" r="4.0625" fill="#5EEA13"/>
          <g filter="url(#filter2_d_822_4453)">
          <circle cx="23" cy="308.008" r="13" fill="#24321C"/>
          </g>
          <circle cx="23" cy="308.008" r="8.125" fill="#3D5231"/>
          <circle cx="23" cy="308.008" r="4.0625" fill="#5EEA13"/>
          <g filter="url(#filter3_d_822_4453)">
          <path d="M142.718 413.049C142.169 412.983 141.65 412.759 141.226 412.403C140.795 412.056 140.477 411.59 140.311 411.063L135.215 396.186C135.066 395.771 135.018 395.327 135.071 394.889C135.094 394.704 135.136 394.525 135.197 394.35C135.387 393.751 135.769 393.231 136.284 392.871C136.799 392.508 137.418 392.322 138.048 392.34C138.678 392.359 139.285 392.582 139.777 392.975L144.106 396.968C144.285 397.071 144.482 397.135 144.687 397.16C144.907 397.189 145.131 397.164 145.34 397.089L150.192 394.477C150.774 394.217 151.427 394.158 152.046 394.31C152.641 394.452 153.176 394.778 153.574 395.243C153.972 395.708 154.211 396.287 154.259 396.897C154.303 397.51 154.158 398.122 153.844 398.65L145.528 411.739C145.229 412.198 144.807 412.564 144.31 412.796C143.814 413.027 143.262 413.115 142.718 413.049Z" fill="#5EEA13"/>
          </g>
          <defs>
          <filter id="filter0_d_822_4453" x="272" y="43.0076" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_822_4453"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_822_4453" result="shape"/>
          </filter>
          <filter id="filter1_d_822_4453" x="239" y="197.008" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_822_4453"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_822_4453" result="shape"/>
          </filter>
          <filter id="filter2_d_822_4453" x="0" y="285.008" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_822_4453"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_822_4453" result="shape"/>
          </filter>
          <filter id="filter3_d_822_4453" x="115.05" y="372.339" width="59.2168" height="60.7312" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.917647 0 0 0 0 0.0745098 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_822_4453"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_822_4453" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
    </>
  )
}

export default GlobeExperiance