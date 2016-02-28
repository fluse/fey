# app js
browserify -t [ babelify --presets [ es2015 react ] ] ./../src/app/app.js -o ./../public/dist/app.js
