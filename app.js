document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementsByClassName('btn')[0];

    button.addEventListener('click', function() {
        let friends = ['Tera', 'Tiaira', 'Bre', 'Shana', 'Abria'];

        for(let i = 0; i < friends.length; i++) {
            console.log(friends[i]+':');
            for (let j = 99; j >=1; j--) {
                if (j > 2) {
                    line = ([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out ' + (j-1) + ' lines of code in the file' );
                } else if (j == 2) {
                    line = ([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out ' + [j] + ' lines of code in the file' );
                } else if (j = 1) {
                    line = ([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out' + [j] + ' line of code in the file' );
                }
            

            let div = document.createElement('div');
            div.className = 'maindiv'
            document.body.appendChild(div);

            let divFri = document.createElement('div');
            divFri.className = "friend";
            div.appendChild(divFri);

            let header = document.createElement('h3');
            header.innerText = friends[i];
           // divFri.appendChild(header);
           document.body.appendChild(header);
           

            let para = document.createElement('p');
            para.className = 'song';
            para.innerText = line;

            div.innerHTML = line;

            }
        }
    });

});