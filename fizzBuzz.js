// Write your solution below this line:
for (let yuna = 1; yuna < 51; yuna++)
{
    if (yuna % 3 == 0 && yuna % 5 == 0)
    {
        console.log("fizzbuzz")
    }
    else if (yuna % 3 == 0)
    {
        console.log("fizz")
    }
    else if (yuna % 5 == 0)
    {
        console.log("buzz")
    }
    else
    {
        console.log (yuna)
    }
}
