

let search = document.getElementById('search');
 // get input value
 let searchTerm = search.value.toLowerCase();
 // get ul names
 let ul = document.getElementById('names');
 //get list from ul
 let li = ul.querySelectorAll('li.data-title');

// add event listener
search.addEventListener('keyup',() => {

   //loop through datat-title
    for (let i = 0; i < li.length; i += 1) {
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toLowerCase().indexOf(searchTerm) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        
        }
    }

} );


    

    
  