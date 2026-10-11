// The email address isn't in the HTML, so scrapers harvesting addresses for spam don't find it;
// the script puts it together from parts.
const email = ['info', 'claessvensson.com'].join('@');
const link = document.createElement('a');
link.href = `mailto:${email}`;
link.textContent = email;
document.getElementById('contact').replaceChildren('Email: ', link);
