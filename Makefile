start:
	git pull
	jupyter lab

serve:
	mkdocs serve

publish:
	mkdocs gh-deploy --clean --verbose

change:
	git commit -am "change made."
	git push