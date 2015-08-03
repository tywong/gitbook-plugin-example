#An example gitbook plugin

## Installation

	cd your-gitbook
	git clone git@github.com:tywong/gitbook-plugin-example.git node_modules/gitbook-plugin-example
	cp node_modules/gitbook-plugin-example/book.json ./book.json
	cp node_modules/gitbook-plugin-example/example.md ./example.md
	echo "* [Plugin Example](example.md)" >> SUMMARY.md  # append a new chapter
	gitbook build && gitbook serve
