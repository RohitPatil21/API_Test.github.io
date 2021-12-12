async function fnFetch(){
    var res =  await fetch( "https://meme-api.herokuapp.com/gimme")
    var data = await res.json();
    document.getElementById('image').src = data.preview[2];
    document.getElementById('title').innerText = data.subreddit;
    document.getElementById('postlink').innerText = data.postLink;
    console.log(data);
    console.log(data.subreddit)
}