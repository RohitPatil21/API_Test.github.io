async function fnFetch(){
    var res =  await fetch( "https://meme-api.herokuapp.com/gimme")
    var data = await res.json();
    document.getElementById('image').src = data.preview[3]
    console.log(data.preview[3]);
}