export async function mountReveal(element) {
	const [
		{ default: Reveal },
		{ default: Markdown },
		{ default: Highlight },
		{ default: Notes },
		{ default: Search },
		{ default: Math },
		{ default: Zoom }
	] = await Promise.all([
		import('reveal.js'),
		import('reveal.js/plugin/markdown'),
		import('reveal.js/plugin/highlight'),
		import('reveal.js/plugin/notes'),
		import('reveal.js/plugin/search'),
		import('reveal.js/plugin/math'),
		import('reveal.js/plugin/zoom')
	]);

	const deck = new Reveal(element, {
		plugins: [Markdown, Highlight, Notes, Search, Math, Zoom]
	});

	await deck.initialize({
		center: true,
		width: 1500,
		height: 900,
		slideNumber: true,
		hash: true,
		navigationMode: "default"
		// transition: "slide",
		// transitionSpeed: "slow"
	});
	return deck;
}