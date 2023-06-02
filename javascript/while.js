let texto = "";
let i = 0;
while (i <= 30)
{
    texto += "<br>O número agora é: " + i;
    i++;
}
document.getElementById("demo").innerHTML = texto;