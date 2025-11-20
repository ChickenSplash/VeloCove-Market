export function capitalizeFirstLetter(str) {
  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function buildQuery(obj) {
  const params = new URLSearchParams();

  Object.entries(obj).forEach(([key, val]) => {
    if (val === "" || val === null || val === undefined || val === false) return; // skip empty values for clean URL

    // Skip page=1 to keep URLs clean
    if (key === "page" && Number(val) === 1) return;

    if (key === "categoryFilter" && Array.isArray(val)) {
      val.forEach(v => params.append('categoryFilter[]', v));
    } else {
      params.append(key, val);
    }
  });

  return params.toString();
};