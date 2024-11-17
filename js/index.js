async function getData(){
    const result = await fetch('https://randomuser.me/api?results=8')
    const character = await result.json();
    console.log(character)
    character.results.forEach(element => {
        const project_row = document.querySelector('.projects-row');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img')
        const div = document.createElement('div');
        div.className = "box flex"
        img1.src=`${element.picture.large}`;
        img2.src=`${element.picture.large}`;
        project_row.appendChild(div)
        div.appendChild(img1)
        //div.appendChild(img2)
        //project_row.appendChild(img1);

    });
}

getData()