let counter = 0;
function clicker()
{
    counter += 1;
    let score = document.getElementById("score");
    score.innerHTML = "Score : " + counter;
    switch (counter)
    {
        case 50:
            alert("Congrats on getting to 50 Clicks!");
            break;
        case 100:
            alert("Congrats on getting to 100 Clicks!");
            break;
        case 250:
            alert("Congrats on getting to 250 Clicks!");
            break;
        case 500:
            alert("Congrats on getting to 500 Clicks!");
            break;
    }
}