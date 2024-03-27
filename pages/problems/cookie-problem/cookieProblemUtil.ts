     export function cookieProblemUtil(cookie: string) : string {
     if (cookie.toLowerCase() === 'snickerdoodle') {
          return `ctf_cookie=${0}`;
     }else if (cookie.toLowerCase() === 'chocolate chip cookies') {
          return `ctf_cookie=${1}`;
     }else if (cookie.toLowerCase() === 'oatmeal raisin') {
          return `ctf_cookie=${2}`;
     }else if (cookie.toLowerCase() === 'shortbread') {
          return `ctf_cookie=${3}`;
     }else if (cookie.toLowerCase() === 'peanut butter') {
          return `ctf_cookie=${4}`;
     }else if (cookie.toLowerCase() === 'sugar') {
          return `ctf_cookie=${5}`;
     }else if (cookie.toLowerCase() === 'biscotti') {
          return `ctf_cookie=${6}`;
     }else if (cookie.toLowerCase() === 'butter') {
          return `ctf_cookie=${7}`;
     }else if (cookie.toLowerCase() === 'wafers') {
          return `ctf_cookie=${8}`;
     }else if (cookie.toLowerCase() === 'macaroons') {
          return `ctf_cookie=${9}`;
     }else{
          return `ctf_cookie=${-1}`;
     }

}
