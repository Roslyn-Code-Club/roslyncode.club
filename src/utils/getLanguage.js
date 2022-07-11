export const getLanguage = (language) => {
  if (language == "html") {
    return html;
  } else if (language == "css") {
    return css;
  } else if (language == "js") {
    return js;
  } else if (language == "cpp") {
    return cpp;
  } else if (language == "java") {
    return java;
  } else if (language == "py") {
    return py;
  } else {
    return "placeholder";
  }
};

const html =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";

const css =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";

const js =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";

const cpp =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg";

const java =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";

const py =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
