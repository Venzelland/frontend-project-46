install:
		npm ci
lint:
		npx eslint .
test:
		npx jest
test-coverage:
		npx jest --coverage
link:
		sudo npm link
run:
	node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml
run2:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json