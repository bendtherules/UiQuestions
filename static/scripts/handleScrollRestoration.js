var hash = window.location.hash;
var hashName = hash.substring(1, hash.length);

if (hashName.startsWith("link-")) {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}
