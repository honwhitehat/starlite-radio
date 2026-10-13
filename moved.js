// Old versions of the Android app (Starlite 1.0, 1.1 and Redio Life 1.2) load this address and expose the
// StarliteApp bridge: ask them to update. Everyone else goes straight to the new address.
if (typeof window.StarliteApp !== 'undefined') {
  document.getElementById('msg').textContent = 'This version of the app uses an old address. Tap below to download the update; it installs over this one and keeps your favourites.';
} else {
  location.replace('https://honwhitehat.github.io/redio-life/');
}
