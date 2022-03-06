

.PHONY: build clean test



build:
	npm run esbuild

test:
	npm run test-compile

publish:
	# vsix generated
	vsce package
	# vsce publish
	# lfm.vscode-makefile-term published to VS Code Marketplace
	vsce publish

# Node.js at least 14.x.x
# https://marketplace.visualstudio.com/manage/publishers/lfm
# vsce login lfm

info:
	# v12.22.10
	node --version

clean:
	-rm -rf out
	-mkdir out