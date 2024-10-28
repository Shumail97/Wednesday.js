function capitalizeWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Create an array to hold the capitalized words
    const capitalizedWords = words.map(word => {
        // Capitalize the first letter and lowercase the rest
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the capitalized words back into a string
    return capitalizedWords.join(' ');
}

// Example usage:
const inputString = "the quick brown fox jumped over the lazy dog";
const result = capitalizeWords(inputString);
console.log(result); 
