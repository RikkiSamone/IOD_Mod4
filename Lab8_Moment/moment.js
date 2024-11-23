 //Today
  const today = moment();
    document.querySelector(".today").textContent = `Today's Date: ${today.format('MMMM Do, YYYY')}`;
    //Birtdate
    const birth = moment("1994-06-19");
        document.querySelector(".birthdate").textContent = `Birth Date: ${birth.format('MMMM Do, YYYY')}`;    
    //Time in London
    const London = moment.utc()
        document.querySelector(".London").textContent = `Time in London: ${London.format('HH:mm:ss')}`;
    //Days Since Birth
    const daysAlive = today.diff(birth, "days");
        document.querySelector(".q1").textContent = `Rikki has been alive for ${daysAlive} days`;

    const years = today.diff(birth, 'years'); 
    const months = today.diff(birth.add(years, 'years'), 'months'); 
    const days = today.diff(birth.add(months, 'months'), 'days'); 
        document.querySelector(".q2").textContent = `Rikki has been alive for ${years} years, ${months} months, and ${days} days`
    
    //Closest Date
     document.getElementById('calc-date').addEventListener('submit', function (event) {
            event.preventDefault(); 

    const date1input = document.getElementById("date1").value;
    const date2input = document.getElementById("date2").value;

    const date1 = moment(date1input);
    const date2 = moment(date2input);
    const formtoday = moment();

    const diff1 = Math.abs(formtoday.diff(date1, "days" ));
    const diff2 = Math.abs(formtoday.diff(date2, "days"));

    let closestDate;
    if(diff1 < diff2){
        closestDate = date1;
    } else if (diff2 < diff1){
        closestDate = date2;
    } else {
        closestDate = null;
    }

    const result = document.querySelector(".q3");
        if (closestDate){
            result.innerHTML = `The closest date to Today is ${closestDate.format('MMMM Do, YYYY')}`;
        } else {
            result.innerHTML = `Both dates are equally close to Today.`;
        }
    });

    //Date Comparison
            document.getElementById('calc-date-order').addEventListener('submit', function (event) {
            event.preventDefault();

            const dateorder1input = document.getElementById("date-order1").value;
            const dateorder2input = document.getElementById("date-order2").value;

            const dateorder1 = moment(dateorder1input);
            const dateorder2 = moment(dateorder2input);

            const dateorderResult = document.querySelector(".q4");
            if (dateorder1.isBefore(dateorder2)) {
                dateorderResult.innerHTML = `The first date is <strong>BEFORE</strong> the second date.`;
            } else if (dateorder1.isAfter(dateorder2)) {
                dateorderResult.innerHTML = `The first date is <strong>AFTER</strong> the second date.`;
            } else {
                dateorderResult.innerHTML = `The 2 dates are the <strong>SAME</strong>.`;
            }
        });
