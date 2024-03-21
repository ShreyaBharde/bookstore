import React,{useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css';
import { AuthContext } from '../contects/AuthProvider';
import { Button } from 'flowbite-react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);



    const {user} = useContext(AuthContext);

console.log(user);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/About" },
    
        { link: "Shop", path: "/shop" },
       
        { link: "Store", path: "/admin/dashboard" },
    
    ];

    return (
        <header>
            <div className="logo">
                <Link to="/" className='snacks'>Store of Knowledge</Link>
                <i className="fa fa-book" aria-hidden="true"></i>
            </div>
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>{item.link}</Link>
                            
                        </li>
                    ))}
                    
                </ul>
            

            </nav>
        </header>
    );
}

export default Navbar;























































// const Navbar=()=>{
// const [isMenuOpen,setIsMenuOpen] = useState(false);
// const [isSticky,setIsSticky] = useState(false);


// const toggleMenu = () =>{
// setIsMenuOpen(!isMenuOpen);
//  }
// useEffect(()=>{
//         const handleScroll = () =>{
//             if(window.scrollY > 100){
//                 setIsSticky(true);
//             }
//             else{
//             setIsSticky(false);
//         }
//     }

//     window.addEventListener("scroll",handleScroll);

//     return () =>{
//         window.addEventListener("scroll",handleScroll);    
//     }
// },[])




// const navItems = [
//     {link:"Home",path:"/"},
//     {link:"About",path:"/About"},
//     {link:"Shop",path:"/shop"},
//     {link:"Sell Your Book",path:"/admin/dashboard"},
//     {link:"Blog",path:"/Blog"},
// ]


    


    

//     return (
//        <header>
//          <div className="logo">
       
//        <Link to="/" className='snacks'>Books</Link>
//        <i className="fa fa-book" aria-hidden="true"></i>
      
//        </div>
//         <nav>
            
//                <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                     <Link to="/About">About</Link>
//                     </li>
//                     <li>
//                     <Link to="/shop">Shop</Link>
//                     </li>
//                     <li>
//                     <Link to="/Sell Your Book">Sell Your Book</Link>
//                     </li>
//                     <li>
//                     <Link to="/Blog">Blog</Link>
//                     </li>
                    

                
//                     </ul>

                  
                   
//         </nav>
//        </header>
//     );
    

// // return(
// //     <header>
// //         <nav>
// //             <div>
// //                 <Link to="/">Books</Link>
// //                 <ul>
// //                     {
// //                        navItems.map(({Link,path}) => <Link key={path} to={path}>{Link}</Link>)  
// //                     }
// //                 </ul>
// //             </div>
// //         </nav>
// //     </header>
// // )
   
// }
// export default Navbar;

