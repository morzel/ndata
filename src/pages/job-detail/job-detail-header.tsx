import React from 'react';
// import { PageHead } from 'components/layout';

interface Props {
  name: string;
  status: string;
}

export const JobDetailHeader: React.FC<Props> = ({ name, status }) => {
  return (
    <div className="nd-pageHead">

      <div className="head-step-back">
        <h1>{name} - {status}</h1>
      </div>

      <a href="#" className="nd-button color-grey nd-trans" title="">
        <svg version="1.1" x="0px" y="0px" width="14px" height="14px"
             viewBox="0 0 512 512">
          <g>
            <path
              d="M478.42,309.096l-31.099-17.98c2.059-11.397,3.309-23.104,3.309-35.115c0-12.018-1.25-23.705-3.309-35.104l31.081-17.947   c13.764-7.959,18.48-25.551,10.54-39.314l-36.466-63.15c-7.94-13.764-25.532-18.48-39.314-10.536l-31.08,17.931   c-17.818-15.127-38.39-27.059-60.843-35.116V36.884c0-15.903-12.894-28.792-28.797-28.792h-72.859   c-15.903,0-28.792,12.889-28.792,28.792v35.879c-22.553,8.058-43.079,19.989-60.879,35.116L98.846,89.93   c-6.613-3.809-14.478-4.844-21.854-2.865c-7.376,1.977-13.651,6.793-17.475,13.406l-36.447,63.15   c-7.959,13.777-3.242,31.369,10.535,39.328l31.099,17.947c-2.108,11.398-3.34,23.086-3.34,35.104   c0,12.012,1.231,23.718,3.34,35.129l-31.112,17.967c-13.764,7.959-18.48,25.551-10.521,39.314l36.447,63.15   c3.811,6.613,10.099,11.43,17.475,13.406c7.376,1.978,15.24,0.939,21.854-2.885l31.099-17.966   c17.786,15.127,38.325,27.044,60.847,35.053v35.942c0,15.908,12.889,28.797,28.792,28.797h72.859   c15.903,0,28.797-12.889,28.797-28.797v-35.942c22.453-8.009,43.024-19.926,60.811-35.053l31.112,17.966   c13.782,7.945,31.374,3.224,39.332-10.54l36.448-63.132C496.883,334.646,492.166,317.041,478.42,309.096z M256.013,389.314   c-73.636,0-133.318-59.679-133.318-133.314c0-73.623,59.683-133.301,133.318-133.301c73.604,0,133.301,59.678,133.301,133.301   C389.313,329.636,329.617,389.314,256.013,389.314z"/>
            <path
              d="M322.322,186.72c-11.204-7.958-26.733-5.349-34.728,5.873l-60.455,85.003l-19.763-13.8   c-11.286-7.846-26.801-5.105-34.679,6.181c-7.864,11.28-5.11,26.796,6.176,34.678l40.014,27.916   c4.343,3.016,9.304,4.474,14.233,4.474c7.783,0,15.452-3.647,20.314-10.474l74.756-105.123   C336.154,210.248,333.526,194.697,322.322,186.72z"/>
          </g>
        </svg>
        Validate
      </a>
      <a href="#" className="nd-button color-grey nd-trans" title="">
        <svg version="1.1" x="0px" y="0px" width="14px" height="14px"
             viewBox="0 0 488.446 488.446">
          <g>
            <g>
              <g>
                <path
                  d="M153.029,90.223h182.404c5.427,0,9.873-4.43,9.873-9.869V0H143.137v80.354C143.137,85.793,147.571,90.223,153.029,90.223     z"/>
                <path
                  d="M480.817,122.864L377.88,19.494v60.859c0,23.404-19.043,42.447-42.447,42.447H153.029     c-23.409,0-42.447-19.043-42.447-42.447V0H44.823C20.068,0,0.002,20.07,0.002,44.808v398.831     c0,24.736,20.066,44.808,44.821,44.808h398.813c24.74,0,44.808-20.068,44.808-44.808V141.325     C488.444,134.392,485.698,127.758,480.817,122.864z M412.461,385.666c0,14.434-11.703,26.154-26.168,26.154H102.137     c-14.451,0-26.153-11.722-26.153-26.154V249.303c0-14.43,11.702-26.148,26.153-26.148h284.156     c14.465,0,26.168,11.72,26.168,26.148V385.666z"/>
                <path
                  d="M356.497,265.131H131.949c-9.008,0-16.294,7.273-16.294,16.28s7.286,16.28,16.294,16.28h224.549     c8.988,0,16.277-7.273,16.277-16.28S365.487,265.131,356.497,265.131z"/>
                <path
                  d="M323.936,330.264H164.508c-8.994,0-16.28,7.273-16.28,16.28c0,8.989,7.286,16.28,16.28,16.28h159.427     c8.994,0,16.281-7.291,16.281-16.28C340.217,337.537,332.93,330.264,323.936,330.264z"/>
              </g>
            </g>
          </g>
        </svg>
        Save
      </a>
      <a href="#" className="nd-button color-grey nd-trans" title="">
        <svg version="1.1" x="0px" y="0px" width="14px" height="14px"
             viewBox="0 0 408.483 408.483">
          <g>
            <g>
              <path
                d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316    H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293    c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329    c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355    c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356    c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/>
              <path
                d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916    c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/>
            </g>
          </g>
        </svg>
        Delete
      </a>

    </div>
  );
};

export default JobDetailHeader;
