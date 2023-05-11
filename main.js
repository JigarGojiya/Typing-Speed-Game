
        // Load Sounds
        bgm = new Audio("bgm.mp3");
        shoot = new Audio("shoot.mp3");

        // Background Music Playing
        m = setInterval(bgmusic,0);
		function bgmusic()
		{
			bgm.play();
		}

        // Declare Variables
        p1 = 1000;
        p2 = 1000;
        p3 = 1000;
        p4 = 1000;
        p5 = 1000;
        p6 = 1000;
        p7 = 1000;
        p8 = 1000;

        score = 0;
        highscore = 0;
        start = 0;
        speed = 50;


        // Words Array
        a = ["have","were","said","will","would","make","like","look","write","could","been","call","find",
        "come","made","take","know","live","give","think","help","tell","follow","came","want","show","does",
        "must","went","read","need","move","change","play","spell","found","study","learn","should","keep",
        "start","thought","turn","might","close","seem","open","begin","walk","began","grow","took","carry",
        "hear","stop","miss","watch","talk","being","leave","word","time","number","people","water","part",
        "sound","work","place","year","back","thing","name","sentence","line","farm","land","home","hand",
        "picture","animal","house","page","letter","point","mother","answer","America","world","country",
        "food","plant","school","father","tree","city","earth","head","story","example","life","paper",
        "group","children","side","feet","mile","night","river"]


        // First Target Sponer

        function gamestart()
        {
            document.getElementById("firebox").value = "";

            if(score>0)
            {
                speed = 50;
                start = 0;
                clearInterval(c);
            }

            if(highscore < score)
            {
                highscore = score;
                document.getElementById("highscore").innerHTML = highscore;
            }

            score = 0;
            document.getElementById("score").innerHTML = score;

            p1 = 1000;
            p2 = 1000;
            p3 = 1000;
            p4 = 1000;
            p5 = 1000;
            p6 = 1000;
            p7 = 1000;
            p8 = 1000;
            
            r = parseInt(Math.random()*a.length);
            document.getElementById("target1").innerHTML = a[r]; 
            document.getElementById("target1").style.left = "1000px";
            r = parseInt(Math.random()*a.length);
            document.getElementById("target2").innerHTML = a[r]; 
            document.getElementById("target2").style.left = "1000px";
            r = parseInt(Math.random()*a.length);
            document.getElementById("target3").innerHTML = a[r]; 
            document.getElementById("target3").style.left = "1000px";
            r = parseInt(Math.random()*a.length);
            document.getElementById("target4").innerHTML = a[r]; 
            document.getElementById("target4").style.left = "1000px";
            r = parseInt(Math.random()*a.length);
            document.getElementById("target5").innerHTML = a[r]; 
            document.getElementById("target5").style.left = "1000px";
            r = parseInt(Math.random()*a.length);
            document.getElementById("target6").innerHTML = a[r]; 
            document.getElementById("target6").style.left = "1000px";
            r = parseInt(Math.random()*a.length);
            document.getElementById("target7").innerHTML = a[r]; 
            document.getElementById("target7").style.left = "1000px";
            r = parseInt(Math.random()*a.length);
            document.getElementById("target8").innerHTML = a[r]; 
            document.getElementById("target8").style.left = "1000px";
        }

        // Target Sponer
        function targetsponer()
        {
            // Speed Change With Score Increase
            if(score > 30 && score <= 50)
            {
                speed = 40;
                start = 0;
                clearInterval(c);
            }
            if(score > 50 && score <=70)
            {
                speed = 30;
                start = 0;
                clearInterval(c);
            }
            if(score > 70 && score <= 90)
            {
                speed = 25;
                start = 0;
                clearInterval(c);
            }
            if(score > 90 && score <= 110)
            {
                speed = 20;
                start = 0;
                clearInterval(c);
            }
            if(score > 110 && score <= 130)
            {
                speed = 18;
                start = 0;
                clearInterval(c);
            }
            if(score > 130 && score <= 150)
            {
                speed = 15;
                start = 0;
                clearInterval(c);
            }
            if(score > 150 && score <= 180)
            {
                speed = 13;
                start = 0;
                clearInterval(c);
            }
            if(score > 180)
            {
                speed = 10;
                start = 0;
                clearInterval(c);
            }

            level = parseInt(score/10);
            level += 1;
            document.getElementById("level").innerHTML = level;


            if(start == 0)
            {
                c = setInterval(timer,speed);
                start++;
            }

            fire = document.getElementById("firebox").value;

            t1 = document.getElementById("target1").innerHTML;
            if(fire == t1)
            {
                shoot.play();
                document.getElementById("target1").style.left = "1000px";
                p1 = 1000;
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target1").innerHTML = a[r];   
                document.getElementById("firebox").value = ""; 
            }

            t2 = document.getElementById("target2").innerHTML;
            if(fire == t2)
            {
                shoot.play();
                document.getElementById("target2").style.left = "1000px";  
                p2 = 1000;
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target2").innerHTML = a[r];  
                document.getElementById("firebox").value = "";  
            }

            t3 = document.getElementById("target3").innerHTML;
            if(fire == t3)
            {
                shoot.play();
                document.getElementById("target3").style.left = "1000px";  
                p3 = 1000;
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target3").innerHTML = a[r];  
                document.getElementById("firebox").value = "";  
            }

            t4 = document.getElementById("target4").innerHTML;
            if(fire == t4)
            {
                shoot.play();
                document.getElementById("target4").style.left = "1000px"; 
                p4 = 1000;
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target4").innerHTML = a[r];  
                document.getElementById("firebox").value = "";   
            }

            t5 = document.getElementById("target5").innerHTML;
            if(fire == t5)
            {
                shoot.play();
                document.getElementById("target5").style.left = "1000px";   
                p5 = 1000;
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target5").innerHTML = a[r];  
                document.getElementById("firebox").value = ""; 
            }

            t6 = document.getElementById("target6").innerHTML;
            if(fire == t6)
            {
                shoot.play();
                document.getElementById("target6").style.left = "1000px";  
                p6 = 1000;
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target6").innerHTML = a[r];  
                document.getElementById("firebox").value = "";  
            }

            t7 = document.getElementById("target7").innerHTML;
            if(fire == t7)
            {
                shoot.play();
                document.getElementById("target7").style.left = "1000px";   
                p7 = 1000;
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target7").innerHTML = a[r]; 
                document.getElementById("firebox").value = "";
            }

            t8 = document.getElementById("target8").innerHTML;
            if(fire == t8)
            {
                shoot.play();
                document.getElementById("target8").style.left = "1000px";  
                p8 = 1000; 
                score ++;
                document.getElementById("score").innerHTML = score;
                r = parseInt(Math.random()*a.length);
                document.getElementById("target8").innerHTML = a[r]; 
                document.getElementById("firebox").value = "";
            }
        }
       
        // Timer For Decrease Position
        function timer()
        {
            p1--;
            p2--;
            p3--;
            p4--;
            p5--;
            p6--;
            p7--;
            p8--;
            document.getElementById("target1").style.left = p1 + "px";
            document.getElementById("target2").style.left = p2 + "px";
            document.getElementById("target3").style.left = p3 + "px";
            document.getElementById("target4").style.left = p4 + "px";
            document.getElementById("target5").style.left = p5 + "px";
            document.getElementById("target6").style.left = p6 + "px";
            document.getElementById("target7").style.left = p7 + "px";
            document.getElementById("target8").style.left = p8 + "px";

            if(p1 == 0 || p2 == 0 || p3 == 0 || p4 == 0 || p5 == 0 || p6 == 0 || p7 == 0 || p8 == 0)
            {
                alert("Game Over");
                gamestart();
            }
        }
