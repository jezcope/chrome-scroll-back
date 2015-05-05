JAVASCRIPT := js/scrollback.js
SUPPORT := manifest.json icon.png key.pem

all: chrome-scroll-back.zip

chrome-scroll-back.zip: ${JAVASCRIPT} ${SUPPORT}
	zip $@ $^

clean:
	rm -f chrome-scroll-back.zip

.PHONY: all clean
