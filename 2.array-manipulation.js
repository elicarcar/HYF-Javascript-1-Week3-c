let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0,'meerkat');
console.log('The new value of my array is 4.')
console.log(favoriteAnimals);
console.log('The Array has a length of ' + favoriteAnimals.length + '.');
favoriteAnimals.splice(-2, 1);
console.log(favoriteAnimals);
favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));
