var myDate = new Date();
       
        // get hour value.
        var hours = myDate.getHours();
       
        hours = hours % 12;
        hours = hours ? hours : 12;
        var minutes = myDate.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var myTime = hours + ":"+ minutes + 
            ":" + myDate.getMilliseconds();
       console.log("\tCurrent time is : " + myTime);