let menuicon = document.queryselector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');


window.onscroll = () =>{
    section.foreach(sec =>{
        let top =window.screenY;
        let offset = sec.offsettop -150;
        let height = sec.offsetweight;
        let id = sec.gtattribute('id'); 

        if(top >= offset && top < offset + height){
            navlinks.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href'= + id + ']')
                    .classList.add
                        ('active')
                
            })
        }
    })
}


menuicon,onclick =() =>{
    menuicon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');

}