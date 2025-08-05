export const headerRef = ref(null);
export const anchorClicked = ref(false);

export function handleAnchorClick() {
  anchorClicked.value = true;
  headerRef.value?.classList.remove("hidden");

  setTimeout(() => {
    if (anchorClicked.value) {
      headerRef.value?.classList.add("hidden");
      anchorClicked.value = false;
    }
  }, 3000);

  setTimeout(() => {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }, 1000);
}