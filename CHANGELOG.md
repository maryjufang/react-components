*:crystal_ball: TODO: File Structure and functional CSS*
*:crystal_ball: TODO: Proxy with an API*

5. :four_leaf_clover: Add first component, add layout with nested components

4. :unlock: Functional CSS:
  - [tailwind css](https://tailwindcss.com/docs/installation/)
    - [Configuration](https://tailwindcss.com/docs/configuration)
  - [tachyons](http://tachyons.io/#style)
    - names are too short
  4.1 $ npm i tailwindcss
  4.2 ./node_modules/.bin/tailwind init src/styles/styles.js
  4.3 Generated Tailwind config: /Users/machen/Documents/mercurial/git/react-components/src/styles/styles.js
  4.4 create src/styles/styles.css with:
    - \@tailwind preflight;
    - \@tailwind components;
    - \@tailwind utilities;
  4.5 Generate CSS file: $ ./node_modules/.bin/tailwind build src/styles/styles.css  -c src/styles/styles.js  -o src/styles/tailwind.css

3. :high_brightness: install atom plugin language-babel to highlight the syntax

2. :rose: run react APP
  - $ npm start    ## run app

1. :sunny: [Create a repo on github](https://www.codecademy.com/articles/how-to-create-a-react-app)
	- $ npm install -g create-react-app
	  - install the create-react-app command line interface (CLI) globally (-g)
	- $ create-react-app react-components
  - $ cd react-components/
	- $ git init
	- $ git add .
	- $ git commit -m "create React APP"
	- $ git remote add origin https://github.com/maryjufang/react-components.git
	- $ git push -u origin master
