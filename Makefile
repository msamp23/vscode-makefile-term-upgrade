

.PHONY: build clean test



build:
	npm run esbuild

test:
	npm run test-compile

publish:
	# npm install -g vsce
	# vsix generated
	vsce package
	# vsce publish
	# lfm.vscode-makefile-term published to VS Code Marketplace
	vsce publish

# Node.js at least 14.x.x
# https://marketplace.visualstudio.com/manage/publishers/lfm
# vsce login lfm

info:
	node --version
	nvm use v16.14.0

clean:
	-rm -rf out
	-mkdir out