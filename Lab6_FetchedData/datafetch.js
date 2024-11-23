const limit = 10;

axios
  .get("https://jsonplaceholder.typicode.com/posts?_limit=" + limit)
  .then((response) =>
    response.data.forEach((element) => {
      addCard(element.title, element.body);
    })
  );

function addCard( name, title)
       {
      const template =
                document.getElementById("card-template")
                    .content.cloneNode(true);

            // populate the template and passing the content dynamically for exercise 1
            template.querySelector(".card-title").innerText = title;
            template.querySelector(".card-text").innerText = name;
           
        


    
           
        document.querySelector('#card-list').appendChild(template);
            
          
         };

