

.PHONY: build clean test

build:
	npm run esbuild

test:
	npm run test-compile

clean:
	-rm -rf out
	-mkdir out