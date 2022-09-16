console.log("Let's get this party started!");

const $gif = $('#gif-area');
const $input = $('#search-bar');
const $form = $('#search');
const $remove = $('#remove-gifs');

function findAndAddGif(res) {
    const numResults = res.data.length;
        if(numResults) {
            let randomIdx = Math.floor(Math.random() * numResults);
            const $newCol = $('<div>');
            const $newGif = $('<img>', {
                src: res.data[randomIdx].images.original.url
            });
            $newCol.append($newGif);
            $gif.append($newCol);
        }
}
$form.on('submit', async function(e) {
    e.preventDefault();
    let searchTerm = $input.val();
    $input.val('');

    const response = await axios.get('http://api.giphy.com/v1/gifs/search', 
    {params: {q: searchTerm, api_key: "Qh2sRJKWxsRh8Vr3hMpe89mcjjNIDvoh"}});
    findAndAddGif(response.data)
 
});

$remove.on('click', () => {
    $gif.empty();
});








// api_key: "Qh2sRJKWxsRh8Vr3hMpe89mcjjNIDvoh"