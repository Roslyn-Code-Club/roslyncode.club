export const parseCategory = (category) => {
  if (category == "html") {
    return html;
  } else if (category == "css") {
    return css;
  } else if (category == "js") {
    return js;
  } else if (category == "cpp") {
    return cpp;
  } else if (category == "java") {
    return java;
  } else if (category == "py") {
    return py;
  } else if (category == "ctf") {
    return ctf;
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

const ctf = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
