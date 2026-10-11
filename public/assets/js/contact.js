// The email address and phone number aren't in the HTML, so scrapers harvesting them for spam
// don't find them; the script puts them together from parts.
const email = ['info', 'claessvensson.com'].join('@');
const mobile = ['+46 (0)702', '690612'].join('');
const link = document.createElement('a');
link.href = `mailto:${email}`;
link.textContent = email;
document.getElementById('contact')
  .replaceChildren('Email: ', link, document.createElement('br'), `Mobile: ${mobile}`);
