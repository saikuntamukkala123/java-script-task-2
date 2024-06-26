let e = parseInt(prompt("Enter the electricity units"));
a = 0.05*e;
b = 0.075*e;
c = 0.095*e;
d = 0.112*e;
f = 0.12*e;

g = 500+a;
h = 1200+b;
i = 1500+c;
j = 2000+d;
k = 2200+f;
if(e<100)
    {
        alert(+g);
    }
    else if(e>100 && e<500)
        {
            alert(+h);
        }
        else if( e>500 && e<750)
            {
                alert(+i);
            }
            else if(e>750 && e<1000)
                {
                    alert(+j)
                }
                else
                {
                    alert(+k);
                }