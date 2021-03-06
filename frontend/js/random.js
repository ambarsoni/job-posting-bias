/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function takeSurvey(){
	var link = document.getElementById("takeSurvey");

	var surveys = ['http://goo.gl/forms/aFg40znhQH',
				   'http://goo.gl/forms/0uu2TA3EPW',
				   'http://goo.gl/forms/CXxRP5MHsP',
				   'http://goo.gl/forms/Z7VkrEYYCz',
				   'http://goo.gl/forms/oTWbfpShiw',
				   'http://goo.gl/forms/MOyTJ81i64',
				   'http://goo.gl/forms/5XKBnVqIrp',
				   'http://goo.gl/forms/eWxOT9ywSf',
				   'http://goo.gl/forms/xhk09KW3et',
				   'http://goo.gl/forms/gTL1hCKvjp',
				   'http://goo.gl/forms/53mjjjsOLJ',
					'http://goo.gl/forms/kKsq0PbQMJ',
					'http://goo.gl/forms/dB9tsXO4Pq',
					'http://goo.gl/forms/Mj825CUzCW',
					'http://goo.gl/forms/Z2iKY3a5ZX',
					'http://goo.gl/forms/uT9K6HlS4H',
					'http://goo.gl/forms/5VelbwpHFJ',
					'http://goo.gl/forms/9wpNY0LYJN',
					'http://goo.gl/forms/1ALxXPk9NX',
					'http://goo.gl/forms/u2I5oquu5o']
	var index = getRandomInt(0, 9);
	link.setAttribute('href', surveys[index]);
}

function generateRoom() {
    var link = document.getElementById("createRoomButton");

    link.setAttribute('href', generateRandStr());
}

function generateRandStr() {
    var first = ['addicting', 'afraid', 'agreeable', 'amused', 'ancient', 'angry', 'annoyed', 'anxious', 'arrogant', 'ashamed', 'average', 'awful', 'bad', 'beautiful', 'better', 'big', 'bitter', 'black', 'blue', 'boiling', 'brave', 'breezy', 'brief', 'bright', 'broad', 'broken', 'bumpy', 'calm', 'careful', 'charming', 'cheerful', 'chilly', 'clumsy', 'cold', 'colossal', 'combative', 'comfortable', 'confused', 'cooing', 'cool', 'cooperative', 'courageous', 'crazy', 'creepy', 'cruel', 'cuddly', 'curly', 'curved', 'damp', 'dangerous', 'deafening', 'deep', 'defeated', 'defiant', 'delicious', 'delightful', 'depressed', 'determined', 'dirty', 'disgusted', 'disturbed', 'dizzy', 'dry', 'dull', 'dusty', 'eager', 'early', 'elated', 'embarrassed', 'empty', 'encouraging', 'energetic', 'enthusiastic', 'envious', 'evil', 'excited', 'exuberant', 'faint', 'fair', 'faithful', 'fantastic', 'fast', 'fat', 'few', 'fierce', 'filthy', 'fine', 'flaky', 'flat', 'fluffy', 'foolish', 'forlorn', 'frail', 'frantic', 'fresh', 'friendly', 'frightened', 'funny', 'fuzzy', 'gentle', 'giant', 'gigantic', 'good', 'gorgeous', 'greasy', 'great', 'green', 'grieving', 'grubby', 'grumpy', 'handsome', 'happy', 'hard', 'harsh', 'healthy', 'heavy', 'helpful', 'helpless', 'high', 'hilarious', 'hissing', 'hollow', 'homeless', 'horrible', 'hot', 'huge', 'hungry', 'hurt', 'hushed', 'husky', 'icy', 'ill', 'immense', 'itchy', 'jealous', 'jittery', 'jolly', 'juicy', 'kind', 'large', 'late', 'lazy', 'light', 'little', 'lively', 'lonely', 'long', 'loose', 'loud', 'lovely', 'low', 'lucky', 'magnificent', 'mammoth', 'many', 'massive', 'melodic', 'melted', 'mighty', 'miniature', 'moaning', 'modern', 'mute', 'mysterious', 'narrow', 'nasty', 'naughty', 'nervous', 'new', 'nice', 'nosy', 'numerous', 'nutty', 'obedient', 'obnoxious', 'odd', 'old', 'orange', 'ordinary', 'outrageous', 'panicky', 'perfect', 'petite', 'plastic', 'pleasant', 'precious', 'pretty', 'prickly', 'proud', 'puny', 'purple', 'purring', 'quaint', 'quick', 'quickest', 'quiet', 'rainy', 'rapid', 'rare', 'raspy', 'ratty', 'red', 'relieved', 'repulsive', 'resonant', 'ripe', 'roasted', 'robust', 'rotten', 'rough', 'round', 'sad', 'salty', 'scary', 'scattered', 'scrawny', 'screeching', 'selfish', 'shaggy', 'shaky', 'shallow', 'sharp', 'shivering', 'short', 'shrill', 'silent', 'silky', 'silly', 'skinny', 'slimy', 'slippery', 'slow', 'small', 'smart', 'smiling', 'smooth', 'soft', 'solid', 'sore', 'sour', 'spicy', 'splendid', 'spotty', 'square', 'squealing', 'stale', 'steady', 'steep', 'sticky', 'stingy', 'straight', 'strange', 'striped', 'strong', 'stupendous', 'successful', 'sweet', 'swift', 'tall', 'tame', 'tan', 'tart', 'tasteless', 'tasty', 'tender', 'tender', 'tense', 'terrible', 'testy', 'thirsty', 'thoughtful', 'thoughtless', 'thundering', 'tight', 'tiny', 'tired', 'tough', 'tricky', 'troubled', 'ugliest', 'ugly', 'uneven', 'upset', 'uptight', 'vast', 'victorious', 'vivacious', 'voiceless', 'wasteful', 'watery', 'weak', 'weary', 'wet', 'whispering', 'wicked', 'wide', 'wide-eyed', 'witty', 'wonderful', 'wooden', 'worried', 'x-ray', 'yellow', 'young', 'yummy', 'zany'];
    var second = ['ball', 'bat', 'bed', 'book', 'boy', 'bun', 'can', 'cake', 'cap', 'car', 'cat', 'cow', 'cub', 'cup', 'dad', 'day', 'dog', 'doll', 'dust', 'fan', 'feet', 'girl', 'gun', 'hall', 'hat', 'hen', 'jar', 'kite', 'man', 'map', 'men', 'mom', 'pan', 'pet', 'pie', 'pig', 'pot', 'rat', 'son', 'sun', 'toe', 'tub', 'van', 'apple', 'arm', 'banana', 'bike', 'bird', 'book', 'chin', 'clam', 'class', 'clover', 'club', 'corn', 'crayon', 'crow', 'crown', 'crowd', 'crib', 'desk', 'dime', 'dirt', 'dress', 'fang', 'field', 'flag', 'flower', 'fog', 'game', 'heat', 'hill', 'home', 'horn', 'hose', 'joke', 'juice', 'kite', 'lake', 'maid', 'mask', 'mice', 'milk', 'mint', 'meal', 'meat', 'moon', 'mother', 'morning', 'name', 'nest', 'nose', 'pear', 'pen', 'pencil', 'plant', 'rain', 'river', 'road', 'rock', 'room', 'rose', 'seed', 'shape', 'shoe', 'shop', 'show', 'sink', 'snail', 'snake', 'snow', 'soda', 'sofa', 'star', 'step', 'stew', 'stove', 'straw', 'string', 'summer', 'swing', 'table', 'tank', 'team', 'tent', 'test', 'toes', 'tree', 'vest', 'water', 'wing', 'winter', 'woman', 'women', 'alarm', 'animal', 'aunt', 'bait', 'balloon', 'bath', 'bead', 'beam', 'bean', 'bedroom', 'boot', 'bread', 'brick', 'brother', 'camp', 'chicken', 'children', 'crook', 'deer', 'dock', 'doctor', 'downtown', 'drum', 'dust', 'eye', 'family', 'father', 'fight', 'flesh', 'food', 'frog', 'goose', 'grade', 'grandfather', 'grandmother', 'grape', 'grass', 'hook', 'horse', 'jail', 'jam', 'kiss', 'kitten', 'light', 'loaf', 'lock', 'lunch', 'lunchroom', 'meal', 'mother', 'notebook', 'owl', 'pail', 'parent', 'park', 'plot', 'rabbit', 'rake', 'robin', 'sack', 'sail', 'scale', 'sea', 'sister', 'soap', 'song', 'spark', 'space', 'spoon', 'spot', 'spy', 'summer', 'tiger', 'toad', 'town', 'trail', 'tramp', 'tray', 'trick', 'trip', 'uncle', 'vase', 'winter', 'water', 'week', 'wheel', 'wish', 'wool', 'yard', 'zebra', 'actor', 'airplane', 'airport', 'army', 'baseball', 'beef', 'birthday', 'boy', 'brush', 'bushes', 'butter', 'cast', 'cave', 'cent', 'cherries', 'cherry', 'cobweb', 'coil', 'cracker', 'dinner', 'eggnog', 'elbow', 'face', 'fireman', 'flavor', 'gate', 'glove', 'glue', 'goldfish', 'goose', 'grain', 'hair', 'haircut', 'hobbies', 'holiday', 'hot', 'jellyfish', 'ladybug', 'mailbox', 'number', 'oatmeal', 'pail', 'pancake', 'pear', 'pest', 'popcorn', 'queen', 'quicksand', 'quiet', 'quilt', 'rainstorm', 'scarecrow', 'scarf', 'stream', 'street', 'sugar', 'throne', 'toothpaste', 'twig', 'volleyball', 'wood', 'wrench', 'advice', 'anger', 'answer', 'apple', 'arithmetic', 'badge', 'basket', 'basketball', 'battle', 'beast', 'beetle', 'beggar', 'brain', 'branch', 'bubble', 'bucket', 'cactus', 'cannon', 'cattle', 'celery', 'cellar', 'cloth', 'coach', 'coast', 'crate', 'cream', 'daughter', 'donkey', 'drug', 'earthquake', 'feast', 'fifth', 'finger', 'flock', 'frame', 'furniture', 'geese', 'ghost', 'giraffe', 'governor', 'honey', 'hope', 'hydrant', 'icicle', 'income', 'island', 'jeans', 'judge', 'lace', 'lamp', 'lettuce', 'marble', 'month', 'north', 'ocean', 'patch', 'plane', 'playground', 'poison', 'riddle', 'rifle', 'scale', 'seashore', 'sheet', 'sidewalk', 'skate', 'slave', 'sleet', 'smoke', 'stage', 'station', 'thrill', 'throat', 'throne', 'title', 'toothbrush', 'turkey', 'underwear', 'vacation', 'vegetable', 'visitor', 'voyage', 'year', 'able', 'achieve', 'acoustics', 'action', 'activity', 'aftermath', 'afternoon', 'afterthought', 'apparel', 'appliance', 'beginner', 'believe', 'bomb', 'border', 'boundary', 'breakfast', 'cabbage', 'cable', 'calculator', 'calendar', 'caption', 'carpenter', 'cemetery', 'channel', 'circle', 'creator', 'creature', 'education', 'faucet', 'feather', 'friction', 'fruit', 'fuel', 'galley', 'guide', 'guitar', 'health', 'heart', 'idea', 'kitten', 'laborer', 'language', 'lawyer', 'linen', 'locket', 'lumber', 'magic', 'minister', 'mitten', 'money', 'mountain', 'music', 'partner', 'passenger', 'pickle', 'picture', 'plantation', 'plastic', 'pleasure', 'pocket', 'police', 'pollution', 'railway', 'recess', 'reward', 'route', 'scene', 'scent', 'squirrel', 'stranger', 'suit', 'sweater', 'temper', 'territory', 'texture', 'thread', 'treatment', 'veil', 'vein', 'volcano', 'wealth', 'weather', 'wilderness', 'wren', 'wrist', 'writer'];

    var postfix = first[Math.floor(Math.random() * first.length)] + "-" + second[Math.floor(Math.random() * second.length)];
    return "https://broomsimple.herokuapp.com/" + postfix;
}
