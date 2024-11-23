/*function addCard(
                title = "My Card Title",
                text = "lorem impusm ble bla",
                url = null,
        )*/ 
       
       
       function addCard( name, title, imageURL, linkURL)
       {
            // clone the template
                const template =
                document.getElementById("card-template")
                    .content.cloneNode(true);

            // populate the template and passing the content dynamically for exercise 1
            template.querySelector(".card-title").innerText = title;
           template.querySelector(".card-text").innerText = name;
           
           const node = document.createElement("img");
                node.src = imageURL;
                template.querySelector('.card-art').appendChild(node);

            /*const imgElement = template.querySelector(".card-art");
               imgElement.src = imageURL;*/

            const linkElement = template.querySelector('.card-link');
           linkElement.href = linkURL; // Make sure this matches the parameter
           linkElement.innerText = "View Artist Bio";

    
            document.querySelector('#card-list').appendChild(template);
            
          
           };

            

            

            // include the populated template into the page
            
           
        //data set example for exercise 2
         /*const data = [
            { name: 'Bob', age: 23 },
            { name: 'Alice', age: 39 },
            { name: 'Rikki', age: 30},
    ];*/
        //data set for artists portfolio, exercise 3

        //add bio links - I guess
    const artist = {
       
        portfolio: [
        
            { name: "Van Gogh", title: "Portrait", url:
                "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image", 
                bio:"https://en.wikipedia.org/wiki/Vincent_van_Gogh" },
            
            { name: "Van Gogh", title: "Sky", url:
                "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
                bio: "https://en.wikipedia.org/wiki/Vincent_van_Gogh"
            },
            
            {
                name: "Pablo Picasso", title: "Head of a Woman", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/489645/1009267/restricted",
                bio: "https://en.wikipedia.org/wiki/Pablo_Picasso"
            },
            
            {
                name: "Charles Henry Alston", title: "Girl in a Red Dress", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/848284/2024854/restricted",
                bio: "https://en.wikipedia.org/wiki/Charles_Alston"
            },

            {
                name: "Kerry James Marshall", title: "Untitled (Studio)", url: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/669451/1548951/restricted',
                bio: "https://en.wikipedia.org/wiki/Kerry_James_Marshall"
            },
            
            {
                name: "Umberto Boccioni", title: "The Street Pavers", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/485555/1005479/main-image", 
                bio: "https://en.wikipedia.org/wiki/Umberto_Boccioni"
            },

            {
                name: "Pierre Bonnard", title: "Woman with Mimosa", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/481763/1008410/restricted",
                bio: "https://en.wikipedia.org/wiki/Pierre_Bonnard"
            },  

        ]
    };

            /*data.forEach(person => {
                addCard(`Name: ${person.name}`, `Age: ${person.age}`)
            });*/

            artist.portfolio.forEach(artwork => {
                    addCard(`Artist: ${artwork.name}`, artwork.title, artwork.url, artwork.bio);
            });
